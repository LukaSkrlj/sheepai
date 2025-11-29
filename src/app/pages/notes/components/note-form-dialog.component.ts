import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

export interface NoteFormData {
    content: string;
    articleId: string;
    articleTitle: string;
    tags: string[];
    shareWithTeam: boolean;
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
            header="New Note"
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
export class NoteFormDialogComponent {
    @Input() visible: boolean = false;
    @Output() visibleChange = new EventEmitter<boolean>();
    @Output() save = new EventEmitter<NoteFormData>();

    // Use regular properties for two-way binding with ngModel
    content = '';
    articleId = '';
    articleTitle = '';
    tagsInput = '';
    shareWithTeam = false;

    resetForm(): void {
        this.content = '';
        this.articleId = '';
        this.articleTitle = '';
        this.tagsInput = '';
        this.shareWithTeam = false;
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
            content: this.content,
            articleId: this.articleId,
            articleTitle: this.articleTitle,
            tags,
            shareWithTeam: this.shareWithTeam
        });

        this.resetForm();
        this.visible = false;
        this.visibleChange.emit(false);
    }

    onCancel(): void {
        this.resetForm();
        this.visible = false;
        this.visibleChange.emit(false);
    }
}
