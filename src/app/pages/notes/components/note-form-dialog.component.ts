import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { Note } from '@/models/note.interface';

export interface NoteFormData {
    id?: string;
    content: string;
    articleId: string;
    articleTitle: string;
    tags: string[];
    shareWithTeam: boolean;
    contentType: 'text' | 'image';
    imageUrl?: string;
}

@Component({
    selector: 'app-note-form-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DialogModule,
        TextareaModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule
    ],
    template: `
        <p-dialog
            [(visible)]="visible"
            [header]="editingNote ? 'Edit Note' : 'New Note'"
            [modal]="true"
            [style]="{width: '50vw'}"
            (onHide)="onCancel()">

            <div class="flex flex-col gap-4">
                <div>
                    <label class="block mb-2 font-semibold">Content</label>
                    <textarea
                        pInputTextarea
                        [(ngModel)]="content"
                        rows="5"
                        class="w-full"
                        placeholder="Enter your note..."></textarea>
                </div>

                <div>
                    <label class="block mb-2 font-semibold">Article ID</label>
                    <input
                        pInputText
                        [(ngModel)]="articleId"
                        class="w-full"
                        placeholder="e.g., article-001" />
                </div>

                <div>
                    <label class="block mb-2 font-semibold">Article Title (optional)</label>
                    <input
                        pInputText
                        [(ngModel)]="articleTitle"
                        class="w-full"
                        placeholder="e.g., Managing Information Overload" />
                </div>

                <div>
                    <label class="block mb-2 font-semibold">Tags (comma-separated)</label>
                    <input
                        pInputText
                        [(ngModel)]="tagsInput"
                        class="w-full"
                        placeholder="e.g., productivity, research" />
                </div>

                <div *ngIf="contentType === 'image'">
                    <label class="block mb-2 font-semibold">Image URL</label>
                    <input
                        pInputText
                        [(ngModel)]="imageUrl"
                        class="w-full"
                        placeholder="Image URL" />
                </div>

                <div class="flex items-center gap-2">
                    <p-checkbox
                        [(ngModel)]="shareWithTeam"
                        [binary]="true"
                        inputId="shareWithTeam" />
                    <label for="shareWithTeam" class="cursor-pointer">Share with team</label>
                </div>
            </div>

            <ng-template #footer>
                <p-button
                    label="Cancel"
                    (onClick)="onCancel()"
                    [text]="true"
                    severity="secondary" />
                <p-button
                    label="Save"
                    (onClick)="onSave()"
                    [disabled]="!isValid()" />
            </ng-template>
        </p-dialog>
    `
})
export class NoteFormDialogComponent implements OnChanges {
    @Input() visible: boolean = false;
    @Input() editingNote: Note | null = null;
    @Output() visibleChange = new EventEmitter<boolean>();
    @Output() save = new EventEmitter<NoteFormData>();

    // Use regular properties for two-way binding with ngModel
    content = '';
    articleId = '';
    articleTitle = '';
    tagsInput = '';
    shareWithTeam = false;
    contentType: 'text' | 'image' = 'text';
    imageUrl = '';

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['editingNote'] && this.editingNote) {
            // Populate form with existing note data
            this.content = this.editingNote.content;
            this.articleId = this.editingNote.articleId;
            this.articleTitle = this.editingNote.metadata?.articleTitle || '';
            this.tagsInput = this.editingNote.metadata?.tags?.join(', ') || '';
            this.shareWithTeam = !!this.editingNote.teamId;
            this.contentType = this.editingNote.contentType;
            this.imageUrl = this.editingNote.imageUrl || '';
        } else if (changes['visible'] && !this.visible) {
            // Reset form when dialog is closed
            this.resetForm();
        }
    }

    resetForm(): void {
        this.content = '';
        this.articleId = '';
        this.articleTitle = '';
        this.tagsInput = '';
        this.shareWithTeam = false;
        this.contentType = 'text';
        this.imageUrl = '';
    }

    isValid(): boolean {
        return this.content.trim().length > 0 && this.articleId.trim().length > 0;
    }

    onSave(): void {
        if (!this.isValid()) return;

        const tags = this.tagsInput
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);

        this.save.emit({
            id: this.editingNote?.id,
            content: this.content,
            articleId: this.articleId,
            articleTitle: this.articleTitle,
            tags,
            shareWithTeam: this.shareWithTeam,
            contentType: this.contentType,
            imageUrl: this.imageUrl
        });

        this.resetForm();
        this.editingNote = null;
        this.visible = false;
        this.visibleChange.emit(false);
    }

    onCancel(): void {
        this.resetForm();
        this.editingNote = null;
        this.visible = false;
        this.visibleChange.emit(false);
    }
}
