import { Directive, ElementRef, HostListener, Output, EventEmitter, inject, OnDestroy } from '@angular/core';

export interface NoteableContent {
    content: string;
    contentType: 'text' | 'image';
    imageUrl?: string;
}

@Directive({
    selector: '[appNoteable]',
    standalone: true
})
export class NoteableDirective implements OnDestroy {
    @Output() noteCreated = new EventEmitter<NoteableContent>();

    private overlayButton: HTMLElement | null = null;
    private elementRef = inject(ElementRef);

    // Track the last clicked image to handle showing/hiding on subsequent clicks
    private lastClickedImageTarget: HTMLElement | null = null;

    // --- TEXT SELECTION LOGIC (remains as fixed) ---

    @HostListener('mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
        // Prevent action if the click was on the button itself or on an image
        if (this.isOverlayButton(event.target as HTMLElement) || (event.target as HTMLElement)?.tagName === 'IMG') {
            return;
        }

        const selection = window.getSelection();

        setTimeout(() => {
            if (selection && selection.toString().trim().length > 0) {
                // Pass the original mouse event, even though position will be recalculated
                this.showOverlay(event, 'text', selection.toString());
            } else {
                this.hideOverlay();
            }
        }, 10);
    }

    // --- IMAGE CLICK LOGIC (NEW) ---

    // Replace onMouseOver/onMouseLeave for images with a single click handler
    @HostListener('click', ['$event'])
    onHostClick(event: MouseEvent) {
        const target = event.target as HTMLElement;

        // If the click is on the current image
        if (target.tagName === 'IMG') {
            event.preventDefault(); // Prevent default image click behavior if any

            const img = target as HTMLImageElement;
            const content: NoteableContent = {
                content: 'Image captured from article',
                contentType: 'image',
                imageUrl: img.src
            };

            // Calculate position for top-left of the image
            const rect = img.getBoundingClientRect();
            const posX = rect.left + window.scrollX;
            const posY = rect.top + window.scrollY;

            // If the overlay is already visible AND it was triggered by the same image, hide it.
            if (this.overlayButton && this.lastClickedImageTarget === target) {
                this.hideOverlay();
                this.lastClickedImageTarget = null;
                return;
            }

            // Hide any existing overlay (text or previous image)
            this.hideOverlay();

            // Show new overlay on the current image's top-left corner
            this.showOverlay(event, 'image', content.content, content.imageUrl, { x: posX, y: posY });
            this.lastClickedImageTarget = target;

        } else if (this.overlayButton && !this.isOverlayButton(target) && this.lastClickedImageTarget) {
            // Clicked outside the button AND outside the image (handled by onDocumentClick)
            // We just need to ensure the overlay disappears when clicking elsewhere in the document.
            // This is primarily managed by onDocumentClick now.
            // Reset lastClickedImageTarget if we hide the overlay
            this.lastClickedImageTarget = null;
        }
    }

    // Remove the previous onMouseOver and onMouseLeave methods entirely for a cleaner implementation.
    // The image overlay is now purely controlled by onHostClick and onDocumentClick.

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const targetIsImage = target.tagName === 'IMG';

        // Hide overlay if:
        // 1. Overlay is present.
        // 2. Click is NOT the overlay button itself.
        // 3. Click is NOT the image that currently owns the overlay.
        if (this.overlayButton && !this.isOverlayButton(target) && !(targetIsImage && target === this.lastClickedImageTarget)) {
            window.getSelection()?.removeAllRanges();
            this.hideOverlay();
            this.lastClickedImageTarget = null; // Reset owner
        }
    }

    // --- UTILITY METHODS ---

    private showOverlay(
        event: MouseEvent,
        type: 'text' | 'image',
        content: string,
        imageUrl?: string,
        positionOverride?: { x: number, y: number }
    ) {
        this.hideOverlay();

        this.overlayButton = document.createElement('button');
        this.overlayButton.innerHTML = '<i class="pi pi-bookmark"></i> Add to Notes';
        this.overlayButton.className = 'noteable-overlay-button';
        this.overlayButton.style.position = 'absolute';
        this.overlayButton.style.zIndex = '1000';
        this.overlayButton.style.background = '#3b82f6';
        this.overlayButton.style.color = 'white';
        this.overlayButton.style.border = 'none';
        this.overlayButton.style.padding = '8px 16px';
        this.overlayButton.style.borderRadius = '6px';
        this.overlayButton.style.cursor = 'pointer';
        this.overlayButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        this.overlayButton.style.fontSize = '14px';
        this.overlayButton.style.display = 'flex';
        this.overlayButton.style.alignItems = 'center';
        this.overlayButton.style.gap = '8px';
        this.overlayButton.style.transition = 'all 0.2s';

        let posX: number;
        let posY: number;

        if (positionOverride) {
            // Use explicit position for image click (top-left)
            posX = positionOverride.x;
            posY = positionOverride.y - 50; // Position above the top edge
        } else { // type === 'text' (use previous text selection calculation)
            const selection = window.getSelection();
            const range = selection?.getRangeAt(0);
            const rect = range?.getBoundingClientRect();

            if (rect) {
                posX = rect.left + window.scrollX + (rect.width / 2) - 75;
                posY = rect.top + window.scrollY - 50;
                posX = Math.max(window.scrollX + 10, posX);
            } else {
                posX = event.pageX;
                posY = event.pageY - 50;
            }
        }

        this.overlayButton.style.left = posX + 'px';
        this.overlayButton.style.top = posY + 'px';

        // Style handlers (remain the same)
        this.overlayButton.onmouseenter = () => {
            if (this.overlayButton) {
                this.overlayButton.style.background = '#2563eb';
                this.overlayButton.style.transform = 'translateY(-2px)';
                this.overlayButton.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
            }
        };

        this.overlayButton.onmouseleave = () => {
            if (this.overlayButton) {
                this.overlayButton.style.background = '#3b82f6';
                this.overlayButton.style.transform = 'translateY(0)';
                this.overlayButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        };

        this.overlayButton.onclick = (e) => {
            e.stopPropagation();
            this.noteCreated.emit({ content, contentType: type, imageUrl });
            window.getSelection()?.removeAllRanges();
            this.hideOverlay();
            this.lastClickedImageTarget = null;
        };

        document.body.appendChild(this.overlayButton);
    }

    private hideOverlay() {
        if (this.overlayButton) {
            try {
                document.body.removeChild(this.overlayButton);
            } catch (e) {
                // Element may have already been removed
            }
            this.overlayButton = null;
        }
    }

    private isOverlayButton(element: HTMLElement | null): boolean {
        if (!element) return false;
        return element === this.overlayButton || element.closest('.noteable-overlay-button') !== null;
    }

    ngOnDestroy(): void {
        this.hideOverlay();
    }
}
