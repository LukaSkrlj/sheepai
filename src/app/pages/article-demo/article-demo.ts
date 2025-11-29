import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NoteableDirective, NoteableContent } from '@/pages/notes/directives/noteable.directive';
import { NoteService } from '@/services/note.service';
import { UserService } from '@/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '@/services/article.service';
import { Data } from '@/services/data';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-article-demo',
    standalone: true,
    imports: [CommonModule, NoteableDirective, ToastModule, ButtonModule, CardModule],
    providers: [MessageService],
    template: `
        @let a = article | async;
        <p-toast />

        <div class="max-w-4xl mx-auto">
            <article class="prose prose-lg" appNoteable (noteCreated)="onNoteCreated($event, article)">
                <h1 class="text-4xl font-bold mb-2">{{ a.title }}</h1>
                <p class="text-sm text-gray-500 mb-6">By {{ a.author }} | {{ a.publishedDate }}</p>

                <div class="mb-8">
                    <!--<video #video [poster]="a.thumbnail" playsinline muted loop controls (mouseenter)="playVideo($event)" (mouseleave)="pauseVideo($event)" class="w-full rounded-lg shadow-lg" style="max-width: 600px; height: auto;">
                        <source [src]="a.reelUrl" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>-->
                    <img [src]="a.image" [alt]="a.title" class="w-full rounded-lg shadow-lg" style="max-width: 600px; height: auto;" />
                </div>

                <div class="text-lg leading-relaxed space-y-4">
                    <p class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500"><strong>Pro Tip:</strong> Select any text in this article to create a note, or hover over the image above!</p>

                    <p>
                        This is a demo of the note-taking functionality. The platform is designed to help teams collaborate on content research and share important insights. All notes are automatically saved and can be accessed from the Notes page.
                    </p>

                    <p>Team members can see each other's notes when they're marked as "Team" notes, making it easy to collaborate and avoid duplicate research. Personal notes remain private to the individual user.</p>

                    <h2 class="text-2xl font-bold mt-8 mb-4">Key Features</h2>

                    <ul class="list-disc list-inside space-y-2">
                        <li>Capture text snippets with a simple selection</li>
                        <li>Save images for visual reference</li>
                        <li>Organize notes with tags and metadata</li>
                        <li>Share knowledge within your team</li>
                        <li>Search and filter your notes easily</li>
                    </ul>

                    <p class="mt-6">Try it now! Select any text or hover over the image to see the "Add to Notes" button appear. Your notes will be saved and you can view them by clicking the "View My Notes" button above.</p>
                </div>
            </article>
        </div>
    `,
    styles: [
        `
            :host ::ng-deep .prose p {
                user-select: text;
                cursor: text;
            }

            :host ::ng-deep .prose img {
                cursor: pointer;
            }
        `
    ]
})
export class ArticleDemo implements OnInit {
    noteService = inject(NoteService);
    userService = inject(UserService);
    messageService = inject(MessageService);
    router = inject(Router);
    articleService = inject(ArticleService);
    data = inject(Data);
    activatedRoute = inject(ActivatedRoute);
    article = this.data.loadData('articles').pipe(map((i) => i.articles.find((item) => item.id === this.activatedRoute.snapshot.params['id']))); /*{
        id: 'article-001',
        title: 'Managing Information Overload in 2025',
        content:
            "In today's digital age, we are constantly bombarded with information from various sources. Learning to filter and prioritize is essential for maintaining productivity and mental health. This article explores practical strategies for managing information overload in the modern workplace. Key strategies include setting boundaries with technology, using automated filters to reduce noise, and practicing mindful consumption of content. Research shows that the average person encounters over 100,000 words daily across various media channels.",
        author: 'Dr. Sarah Chen',
        publishedDate: '2025-11-15',
        imageUrl: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg'
    };*/

    // @ViewChild('video') video: any;

    playVideo(event: Event) {
        const video = event.target as HTMLVideoElement;
        video.muted = true; // REQUIRED for hover play
        video.playsInline = true;
        video.play().catch((err) => {
            console.warn('Hover play blocked:', err);
        });
    }

    pauseVideo(event: Event) {
        const video = event.target as HTMLVideoElement;
        video.pause();
    }

    ngOnInit(): void {
        this.userService.loadUsers();
        this.userService.loadTeams();
        this.noteService.loadNotes();
        this.articleService.loadArticles();

        // Wait for services to loads
        setTimeout(() => {
            const currentUser = this.userService.getCurrentUser();
            if (!currentUser) {
                console.warn('No current user found');
            }
        }, 100);
    }

    onNoteCreated(data: NoteableContent, article): void {
        const currentUser = this.userService.getCurrentUser();
        if (!currentUser) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'User not found. Please refresh the page.',
                life: 3000
            });
            return;
        }

        this.noteService.addNote({
            userId: currentUser.id,
            teamId: currentUser.teamId,
            articleId: article.id,
            content: data.content,
            contentType: data.contentType,
            imageUrl: data.imageUrl,
            metadata: {
                articleTitle: article.title,
                articleUrl: '/article-demo',
                tags: ['demo']
            }
        });

        this.messageService.add({
            severity: 'success',
            summary: 'Note Created',
            detail: 'Your note has been saved successfully! Click "View My Notes" to see it.',
            life: 5000
        });
    }

    navigateToNotes(): void {
        this.router.navigate(['/pages/notes']);
    }
}
