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
        <p-toast xmlns="http://www.w3.org/1999/html" />

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

                    <h3>What Happened</h3>

                    <p>
                        Google Chrome received a security update on Nov 18, 2025, to patch two serious vulnerabilities in its JavaScript / WebAssembly engine (V8 JavaScript engine). The most critical flaw is recorded as CVE-2025-13223 — a type
                        confusion bug that could lead to heap corruption, giving a remote attacker the possibility of arbitrary code execution or causing crashes. Google acknowledges that an exploit for CVE-2025-13223 “exists in the wild” — meaning
                        attackers were using it before the patch was made public.
                    </p>
                    <h3>What’s Fixed</h3>
                    <p>
                        Chrome versions before 142.0.7444.175 (on Windows/Linux) or 142.0.7444.176 (on macOS) are vulnerable — users must update to those versions or newer. Besides CVE-2025-13223, the update also patches another similar bug:
                        CVE-2025-13224 (also type confusion). This release is part of a broader patch addressing seven zero-day vulnerabilities in Chrome (some exploited, some proof-of-concept) discovered since the start of 2025.
                    </p>
                    <h3>What You Should Do Right Now</h3>
                    <p>
                        Update Chrome immediately (or any Chromium-based browser fork you’re using, once patches roll out). Treat untrusted or unknown websites with caution — especially those using WebAssembly or JavaScript in complex ways. If you’re
                        an IT admin or manage multiple devices, ensure all installations are updated to avoid mass exploitation. If you like — I can also check if there are any known real-world attacks exploiting these vulnerabilities (recent logs /
                        samples), to see how dangerous this really is right now. More about this patch
                    </p>
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
