import { inject, Injectable, signal } from '@angular/core';
import { Data } from './data';
import { Article } from '@/models/article.interface';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    #data = inject(Data);

    private _allArticles = signal<Article[]>([]);

    // Expose as readonly for reactive access
    allArticles = this._allArticles.asReadonly();

    loadArticles(): void {
        this.#data.loadData('articles').subscribe((data) => {
            this._allArticles.set(data.articles || []);
        });
    }

    getArticleById(id: string): Article {
        return this._allArticles().filter((article) => article.id === id)[0];
    }
}
