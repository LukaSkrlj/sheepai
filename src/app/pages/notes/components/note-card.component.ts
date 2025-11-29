import { Component, Input, Output, EventEmitter, inject, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Note } from '@/models/note.interface';
import { UserService } from '@/services/user.service';

@Component({
    selector: 'app-note-card',
    standalone: true,
    imports: [CommonModule, CardModule, TagModule, ButtonModule, DatePipe],
    template: `
        <p-card styleClass="mb-4">
            <ng-template #header>
                <div class="flex justify-between items-center p-4">
                    <div class="flex gap-2">
                        <p-tag *ngIf="note.teamId" value="Team" severity="info" />
                        <p-tag *ngIf="!note.teamId" value="Personal" severity="success" />
                        <p-tag [value]="note.contentType" severity="secondary" />
                    </div>
                    <div>
                        <p-button icon="pi pi-trash" (onClick)="onDelete()" [text]="true" severity="danger" [disabled]="!canDelete" />
                    </div>
                </div>
            </ng-template>

            <img *ngIf="note.contentType === 'image' && note.imageUrl" [src]="note.imageUrl" [alt]="note.content" class="w-full mb-4 rounded-lg" />

            <p class="mb-4 text-gray-700">{{ note.content }}</p>

            <div class="text-sm text-gray-500 space-y-1">
                <div *ngIf="note.metadata?.articleTitle" class="flex items-center gap-2">
                    <i class="pi pi-file"></i>
                    <span>{{ note.metadata.articleTitle }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="pi pi-calendar"></i>
                    <span>{{ note.timestamp | date: 'short' }}</span>
                </div>
                <div *ngIf="note.teamId && creatorName()" class="flex items-center gap-2">
                    <i class="pi pi-user"></i>
                    <span>By {{ creatorName() }}</span>
                </div>
                <div *ngIf="note.metadata?.tags?.length" class="flex items-center gap-2 flex-wrap mt-2">
                    <p-tag *ngFor="let tag of note.metadata.tags" [value]="tag" severity="secondary" styleClass="text-xs" />
                </div>
            </div>
        </p-card>
    `
})
export class NoteCardComponent {
    @Input() note!: Note;
    @Input() currentUserId?: string;
    @Output() delete = new EventEmitter<string>();

    userService = inject(UserService);

    canDelete = computed(() => {
        return this.note.userId === this.currentUserId;
    });

    creatorName = computed(() => {
        if (this.note.userId === this.currentUserId) {
            return '';
        }
        const user = this.userService.getUserById(this.note.userId);
        return user?.name || 'Alice Johnson';
    });

    onDelete(): void {
        this.delete.emit(this.note.id);
    }
}
