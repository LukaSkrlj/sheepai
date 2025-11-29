import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

interface Note {
    id: string;
    title: string;
    content: string;
    category: string;
    timestamp: string;
}

@Component({
    standalone: true,
    selector: 'app-recent-sales-widget',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    template: `<div class="card mb-8!">
        <div class="font-semibold text-xl mb-4">Recent Notes</div>
        <p-table [value]="notes" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th pSortableColumn="title">Title <p-sortIcon field="title"></p-sortIcon></th>
                    <th pSortableColumn="category">Category <p-sortIcon field="category"></p-sortIcon></th>
                    <th pSortableColumn="timestamp">Date <p-sortIcon field="timestamp"></p-sortIcon></th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-note>
                <tr>
                    <td style="width: 45%; min-width: 10rem;">
                        <div class="font-medium text-surface-900 dark:text-surface-0">{{ note.title }}</div>
                        <div class="text-sm text-surface-600 dark:text-surface-300 mt-1">{{ note.content }}</div>
                    </td>
                    <td style="width: 20%; min-width: 7rem;">
                        <span class="px-2 py-1 rounded text-xs font-medium"
                              [ngClass]="{
                                'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300': note.category === 'Supply Chain',
                                'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300': note.category === 'AI',
                                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300': note.category === 'Security Alert'
                              }">
                            {{ note.category }}
                        </span>
                    </td>
                    <td style="width: 20%; min-width: 8rem;" class="text-surface-600 dark:text-surface-300">
                        {{ note.timestamp }}
                    </td>
                    <td style="width: 15%;">
                        <button pButton pRipple type="button" label="View" class="p-button-sm p-button-text"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`
})
export class RecentSalesWidget {
    notes: Note[] = [
        {
            id: '1',
            title: 'Python Bootstrap Scripts Vulnerability',
            content: 'Legacy scripts create domain takeover risk in PyPI...',
            category: 'Supply Chain',
            timestamp: '2025-11-29'
        },
        {
            id: '2',
            title: 'Meta AI Security Bugs',
            content: 'Serious vulnerabilities in Llama framework affecting...',
            category: 'AI',
            timestamp: '2025-11-28'
        },
        {
            id: '3',
            title: 'Chrome V8 Zero-Day Patch',
            content: 'Google issues critical security fix for actively exploited...',
            category: 'Security Alert',
            timestamp: '2025-11-27'
        },
        {
            id: '4',
            title: 'North Korean Malware Campaign',
            content: 'OtterCookie malware spread through npm packages...',
            category: 'Supply Chain',
            timestamp: '2025-11-26'
        },
        {
            id: '5',
            title: 'WhatsApp Security Research Program',
            content: 'Meta expands bug bounty program with $4M funding...',
            category: 'Security Alert',
            timestamp: '2025-11-25'
        },
        {
            id: '6',
            title: 'Russian Kazuar Backdoor Deployment',
            content: 'Advanced persistent threat targeting Ukraine infrastructure...',
            category: 'Security Alert',
            timestamp: '2025-11-24'
        }
    ];
}
