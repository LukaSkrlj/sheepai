import { inject, Injectable, signal } from '@angular/core';
import { Data } from './data';
import { Note } from '@/models/note.interface';

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    #data = inject(Data);

    private _allNotes = signal<Note[]>([]);

    // Expose as readonly for reactive access
    allNotes = this._allNotes.asReadonly();

    loadNotes(): void {
        this.#data.loadData('notes').subscribe(data => {
            this._allNotes.set(data.notes || []);
        });
    }

    getNotesForUser(userId: string, teamId: string | null): Note[] {
        return this._allNotes().filter(note => {
            // Always show user's own notes
            if (note.userId === userId) return true;

            // Show team notes if user is in a team
            if (teamId && note.teamId === teamId) return true;

            return false;
        });
    }

    addNote(noteData: Omit<Note, 'id' | 'timestamp'>): void {
        const newNote: Note = {
            ...noteData,
            id: this.generateId(),
            timestamp: new Date().toISOString()
        };

        this._allNotes.update(notes => [...notes, newNote]);
    }

    deleteNote(noteId: string): void {
        this._allNotes.update(notes => notes.filter(n => n.id !== noteId));
    }

    updateNote(noteId: string, updates: Partial<Note>): void {
        this._allNotes.update(notes =>
            notes.map(note =>
                note.id === noteId ? { ...note, ...updates } : note
            )
        );
    }

    getNotesByArticle(articleId: string, userId: string, teamId: string | null): Note[] {
        return this.getNotesForUser(userId, teamId)
            .filter(note => note.articleId === articleId);
    }

    private generateId(): string {
        return 'note-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }
}
