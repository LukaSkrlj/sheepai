import { inject, Injectable, signal } from '@angular/core';
import { Data } from './data';
import { User } from '@/models/user.interface';
import { Team } from '@/models/team.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    #data = inject(Data);

    users = signal<any[]>([]);
    teams = signal<any[]>([]);

    // Hardcoded for hackathon demo
    private readonly CURRENT_USER_ID = 101;

    loadUsers(): void {
        this.#data.loadData('users').subscribe(data => {
            this.users.set(data || []);
        });
    }

    loadTeams(): void {
        this.#data.loadData('teams').subscribe(data => {
            this.teams.set(data || []);
        });
    }

    getCurrentUser(): any {
        return this.users().find(u => u.id === this.CURRENT_USER_ID);
    }

    getUserById(userId: string): any {
        return this.users().find(u => u.id === userId);
    }

    getTeamById(teamId: string): any {
        return this.teams().find(t => t.id === teamId);
    }
}
