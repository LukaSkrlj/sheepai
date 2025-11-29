import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSwitchModule  } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-notifications-widget',
    imports: [CommonModule, ToggleSwitchModule , FormsModule],
    template: `<div class="card">
        <div class="mb-6">
            <div class="font-semibold text-xl mb-2">Notification Settings</div>
            <p class="text-surface-600 dark:text-surface-300 text-sm">Choose how you want to receive alerts</p>
        </div>

        <div class="flex flex-col gap-4">
            <!-- In-App Notifications (Active) -->
            <div class="p-4 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800/50">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-lg" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-bell text-purple-500 text-xl"></i>
                        </div>
                        <div>
                            <div class="font-semibold text-surface-900 dark:text-surface-0">In-App Notifications</div>
                            <div class="text-sm text-surface-600 dark:text-surface-300">Receive alerts within the application</div>
                        </div>
                    </div>
                    <p-inputSwitch [(ngModel)]="inAppEnabled" />
                </div>
                <div class="mt-3 ml-14 text-xs text-surface-500 dark:text-surface-400" *ngIf="inAppEnabled">
                    ✓ Notifications enabled for high-severity threats
                </div>
            </div>

            <!-- Slack (Coming Soon) -->
            <div class="p-4 border border-surface-200 dark:border-surface-700 rounded-lg opacity-60">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center bg-surface-200 dark:bg-surface-700 rounded-lg" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-slack text-surface-500 dark:text-surface-400 text-xl"></i>
                        </div>
                        <div>
                            <div class="font-semibold text-surface-900 dark:text-surface-0 flex items-center gap-2">
                                Slack
                                <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded font-medium">Coming Soon</span>
                            </div>
                            <div class="text-sm text-surface-600 dark:text-surface-300">Send alerts to Slack channels</div>
                        </div>
                    </div>
                    <div class="w-12 h-6 bg-surface-200 dark:bg-surface-700 rounded-full relative">
                        <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            <!-- Microsoft Teams (Coming Soon) -->
            <div class="p-4 border border-surface-200 dark:border-surface-700 rounded-lg opacity-60">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center bg-surface-200 dark:bg-surface-700 rounded-lg" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-microsoft text-surface-500 dark:text-surface-400 text-xl"></i>
                        </div>
                        <div>
                            <div class="font-semibold text-surface-900 dark:text-surface-0 flex items-center gap-2">
                                Microsoft Teams
                                <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded font-medium">Coming Soon</span>
                            </div>
                            <div class="text-sm text-surface-600 dark:text-surface-300">Post alerts to Teams channels</div>
                        </div>
                    </div>
                    <div class="w-12 h-6 bg-surface-200 dark:bg-surface-700 rounded-full relative">
                        <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            <!-- Email (Coming Soon) -->
            <div class="p-4 border border-surface-200 dark:border-surface-700 rounded-lg opacity-60">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center bg-surface-200 dark:bg-surface-700 rounded-lg" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-envelope text-surface-500 dark:text-surface-400 text-xl"></i>
                        </div>
                        <div>
                            <div class="font-semibold text-surface-900 dark:text-surface-0 flex items-center gap-2">
                                Email
                                <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded font-medium">Coming Soon</span>
                            </div>
                            <div class="text-sm text-surface-600 dark:text-surface-300">Receive email notifications</div>
                        </div>
                    </div>
                    <div class="w-12 h-6 bg-surface-200 dark:bg-surface-700 rounded-full relative">
                        <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div class="flex items-start gap-2">
                <i class="pi pi-info-circle text-blue-600 dark:text-blue-400 text-sm mt-0.5"></i>
                <p class="text-sm text-blue-800 dark:text-blue-200">
                    You'll be notified about high-severity threats (relevance score 8.0+) and critical security alerts.
                </p>
            </div>
        </div>
    </div>`
})
export class NotificationsWidget {
    inAppEnabled = true;
}
