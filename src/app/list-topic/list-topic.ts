import {Component, inject, OnInit} from '@angular/core';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Tag } from 'primeng/tag';
import {Data} from "@/services/data";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'list-topic.ts',
    templateUrl: 'list-topic.html',
    styleUrls: ['list-topic.scss'],
    standalone: true,
    imports: [TableModule, InputTextModule, Tag, IconField, InputIcon, AsyncPipe]
})
export class ListTopic {
    customers!: any[];
    data = inject(Data);
    topics$ = this.data.loadData('topics');

    selectedCustomers!: any;

    // @ts-ignore
    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warn';

            case 'renewal':
                return null;
        }
    }
}
