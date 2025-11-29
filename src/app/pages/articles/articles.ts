import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { Chip } from 'primeng/chip';
import { Knob } from 'primeng/knob';
import { RouterLink } from '@angular/router';
import { ArticleService } from '@/services/article.service';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [CommonModule, DataViewModule, FormsModule, SelectButtonModule, PickListModule, OrderListModule, TagModule, ButtonModule, Chip, Knob, RouterLink],
    templateUrl: './articles.html',
    styleUrl: './articles.scss'
})
export class Articles {
    articleService = inject(ArticleService);

    constructor() {}

    ngOnInit() {
        this.articleService.loadArticles();
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
