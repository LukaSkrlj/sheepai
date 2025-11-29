import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { TeamSettings } from '@/team-settings/team-settings';
import { UserSettings } from '@/user-settings/user-settings';
import { AddTopic } from '@/add-topic/add-topic';
import {ListTopic} from "@/list-topic/list-topic";

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'team-settings', component: TeamSettings },
            { path: 'user-settings', component: UserSettings },
            { path: 'add-topic', component: AddTopic },
            { path: 'all-topics', component: ListTopic },
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
