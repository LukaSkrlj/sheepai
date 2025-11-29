import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { NoteService } from '@/services/note.service';
import { UserService } from '@/services/user.service';
import { Note } from '@/models/note.interface';
import { NoteCardComponent } from './components/note-card.component';
import { NoteFormDialogComponent, NoteFormData } from './components/note-form-dialog.component';

@Component({
    selector: 'app-notes',
    standalone: true,
    imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DataViewModule, CardModule, ToastModule, ConfirmDialogModule, InputIconModule, IconFieldModule, InputTextModule, SelectModule, NoteCardComponent, NoteFormDialogComponent],
    providers: [ConfirmationService, MessageService],
    template: `
        <p-toast />
        <p-confirmdialog />

        <div class="mb-6">
            <h1 class="text-3xl font-bold mb-2">My Notes</h1>
            <p class="text-gray-600">Manage your personal and team notes</p>
        </div>

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Note" icon="pi pi-plus" (onClick)="openNoteDialog()" />
            </ng-template>
            <ng-template #end>
                <p-iconfield styleClass="mr-2">
                    <p-inputicon styleClass="pi pi-search" />
                    <input pInputText [ngModel]="searchTerm()" (ngModelChange)="onSearchChange($event)" placeholder="Search notes..." />
                </p-iconfield>
                <p-select [ngModel]="filterType()" (ngModelChange)="onFilterChange($event)" [options]="filterOptions" placeholder="Filter" />
            </ng-template>
        </p-toolbar>

        <div class="grid grid-cols-12 gap-4 mb-6">
            <div class="col-span-4">
                <p-card styleClass="h-full">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-2xl font-bold text-blue-600">1</div>
                            <div class="text-gray-600 text-sm">Total Notes</div>
                        </div>
                        <i class="pi pi-bookmark text-4xl text-blue-600"></i>
                    </div>
                </p-card>
            </div>
            <div class="col-span-4">
                <p-card styleClass="h-full">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-2xl font-bold text-green-600">{{ personalNotes() }}</div>
                            <div class="text-gray-600 text-sm">Personal Notes</div>
                        </div>
                        <i class="pi pi-user text-4xl text-green-600"></i>
                    </div>
                </p-card>
            </div>
            <div class="col-span-4">
                <p-card styleClass="h-full">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-2xl font-bold text-purple-600">1</div>
                            <div class="text-gray-600 text-sm">Team Notes</div>
                        </div>
                        <i class="pi pi-users text-4xl text-purple-600"></i>
                    </div>
                </p-card>
            </div>
        </div>

        <!--<div *ngIf="filteredNotes().length === 0" class="text-center py-12">
            <i class="pi pi-inbox text-6xl text-gray-400 mb-4"></i>
            <p class="text-gray-600 text-lg">No notes found</p>
            <p class="text-gray-500 text-sm">Create your first note to get started</p>
        </div>-->

        <div class="col-span-12">
            <app-note-card [note]="myNote" [currentUserId]="currentUser()?.id" (delete)="deleteNote($event)" />
        </div>

        <!--<p-dataview *ngIf="filteredNotes().length > 0" [value]="filteredNotes()">
            <ng-template #list let-items>

            </ng-template>
        </p-dataview>-->

        <app-note-form-dialog [(visible)]="noteDialogVisible" (save)="saveNote($event)" />
    `
})
export class Notes implements OnInit {
    noteService = inject(NoteService);
    userService = inject(UserService);
    confirmationService = inject(ConfirmationService);
    messageService = inject(MessageService);

    notes = signal<Note[]>([]);
    currentUser = signal(this.userService.getCurrentUser());
    searchTerm = signal('');
    filterType = signal<'all' | 'personal' | 'team'>('all');
    noteDialogVisible = false;

    filterOptions = [
        { label: 'All Notes', value: 'all' },
        { label: 'Personal', value: 'personal' },
        { label: 'Team', value: 'team' }
    ];

    filteredNotes = computed(() => {
        let result = this.notes();

        // Apply search
        const search = this.searchTerm().toLowerCase();
        if (search) {
            result = result.filter((n) => n.content.toLowerCase().includes(search) || n.metadata?.articleTitle?.toLowerCase().includes(search) || n.metadata?.tags?.some((tag) => tag.toLowerCase().includes(search)));
        }

        // Apply filter
        const filter = this.filterType();
        if (filter === 'personal') {
            result = result.filter((n) => !n.teamId);
        } else if (filter === 'team') {
            result = result.filter((n) => !!n.teamId);
        }

        // Sort by timestamp descending (newest first)
        return result.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    });

    totalNotes = computed(() => this.notes().length);
    personalNotes = computed(() => this.notes().filter((n) => !n.teamId).length);
    teamNotes = computed(() => this.notes().filter((n) => !!n.teamId).length);

    myNote: Note = {
        id: '1',
        userId: '101',
        teamId: 'team-1',
        articleId: '1003',
        content: 'The most critical flaw is recorded as CVE-2025-13223 — a type confusion bug that could lead to heap corruption, giving a remote attacker the possibility of arbitrary code execution or causing crashes.',
        contentType: 'text',
        imageUrl: '',
        timestamp: '2025-11-29',
        metadata: {
            articleTitle: 'Google issues security fix for Chrome V8 zero-day vulnerability',
            articleUrl: '/articles/1003',
            tags: []
        }
    };
    ngOnInit(): void {
        // Load data into services (async operations)
        this.userService.loadUsers();
        this.userService.loadTeams();
        this.noteService.loadNotes();

        // Wait for async data to load before accessing it
        setTimeout(() => {
            this.currentUser.set(this.userService.getCurrentUser());
            this.loadNotes();
        }, 200);
    }

    loadNotes(): void {
        const user = this.currentUser();
        if (user) {
            const userNotes = this.noteService.getNotesForUser(user.id, user.teamId);
            this.notes.set(userNotes);
        }
    }

    onSearchChange(value: string): void {
        this.searchTerm.set(value);
    }

    onFilterChange(value: 'all' | 'personal' | 'team'): void {
        this.filterType.set(value);
    }

    openNoteDialog(): void {
        this.noteDialogVisible = true;
    }

    saveNote(formData: NoteFormData): void {
        const user = this.currentUser();
        if (!user) return;

        this.noteService.addNote({
            userId: user.id,
            teamId: formData.shareWithTeam ? user.teamId : null,
            articleId: formData.articleId,
            content: formData.content,
            contentType: 'text',
            metadata: {
                articleTitle: formData.articleTitle || undefined,
                tags: formData.tags.length > 0 ? formData.tags : undefined
            }
        });

        this.loadNotes();

        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Note created successfully',
            life: 3000
        });
    }

    deleteNote(noteId: string): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this note?',
            header: 'Confirm Delete',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.noteService.deleteNote(noteId);
                this.loadNotes();

                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Note deleted successfully',
                    life: 3000
                });
            }
        });
    }
}
