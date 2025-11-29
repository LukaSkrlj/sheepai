import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule, ButtonModule, InputTextModule, FormsModule],
    template: `
        <!-- The Hacker News - Existing Source -->
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0 border-2 border-primary">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">News Source</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">The Hacker News</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-globe text-purple-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">1,245 articles </span>
                <span class="text-muted-color">this month</span>
            </div>
        </div>

        <!-- Add New Source Cards (3 cards) -->
        <div class="col-span-12 lg:col-span-6 xl:col-span-3" *ngFor="let index of [1, 2, 3]">
            <div class="card mb-0 border-2 border-dashed border-surface-300 dark:border-surface-600 hover:border-primary transition-colors cursor-pointer"
                 (click)="openAddForm(index)"
                 *ngIf="!showForm || formIndex !== index">
                <div class="flex flex-col items-center justify-center py-8">
                    <div class="flex items-center justify-center bg-surface-100 dark:bg-surface-700 rounded-full mb-4" style="width: 4rem; height: 4rem">
                        <i class="pi pi-plus text-surface-600 dark:text-surface-400 text-3xl"></i>
                    </div>
                    <span class="text-surface-600 dark:text-surface-400 font-medium">Add News Source</span>
                </div>
            </div>

            <!-- Add Source Form -->
            <div class="card mb-0 border-2 border-primary" *ngIf="showForm && formIndex === index">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-surface-900 dark:text-surface-0 font-semibold text-lg">Add News Source</span>
                    <button pButton pRipple icon="pi pi-times" class="p-button-text p-button-rounded p-button-sm" (click)="closeForm()"></button>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium">Source Name</label>
                        <input pInputText type="text" placeholder="e.g., BleepingComputer" class="w-full" />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium">URL</label>
                        <input pInputText type="text" placeholder="https://..." class="w-full" />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium">Category</label>
                        <input pInputText type="text" placeholder="Security News" class="w-full" />
                    </div>

                    <div class="flex gap-2 mt-2">
                        <button pButton pRipple label="Add Source" class="flex-1 p-button-sm" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none;"></button>
                        <button pButton pRipple label="Cancel" class="flex-1 p-button-sm p-button-outlined" (click)="closeForm()"></button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class StatsWidget {
    showForm = false;
    formIndex: number | null = null;

    openAddForm(index: number): void {
        this.showForm = true;
        this.formIndex = index;
    }

    closeForm(): void {
        this.showForm = false;
        this.formIndex = null;
    }
}
