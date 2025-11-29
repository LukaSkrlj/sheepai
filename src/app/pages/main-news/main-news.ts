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
import { Chip } from 'primeng/chip';
import { Knob } from 'primeng/knob';
import { Product } from '@/pages/service/product.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-main-news',
    standalone: true,
    imports: [CommonModule, DataViewModule, FormsModule, SelectButtonModule, PickListModule, OrderListModule, TagModule, ButtonModule, Chip, Knob, RouterLink],
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

    getSeverity(relevance: number) {
        if (relevance > 8.0) {
            return 'Red';
        }
        if (relevance > 6.3) {
            return 'Orange';
        }
        if (relevance > 4.0) {
            return 'Gold';
        }
        return 'MediumSpringGreen';
    }
}
