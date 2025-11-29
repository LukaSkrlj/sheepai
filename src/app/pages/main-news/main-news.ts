import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { Data } from '@/services/data';
import { News } from '@/pages/service/news.service';

@Component({
    selector: 'app-main-news',
    standalone: true,
    imports: [CommonModule, DataViewModule, FormsModule, SelectButtonModule, PickListModule, OrderListModule, TagModule, ButtonModule],
    templateUrl: './main-news.html',
    styleUrl: './main-news.scss'
})
export class MainNews {
    news: News[] = [];

    private dataService = inject(Data);

    constructor() {}

    ngOnInit() {
        this.dataService.loadData('main-news').subscribe((data) => (this.news = data));
    }

    getSeverity(product: News) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return 'info';
        }
    }
}
