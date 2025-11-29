import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

class Video {
    item: string;
    isPlaying: boolean;
}

@Component({
    selector: 'app-reels',
    imports: [CommonModule],
    templateUrl: './reels.html',
    styleUrl: './reels.scss'
})
export class Reels {
    items: Video[] = [
        { item: 'reel1', isPlaying: false },
        { item: 'reel2', isPlaying: false },
        { item: 'reel3', isPlaying: false }
    ];
    items2: Video[] = [
        { item: 'reel3', isPlaying: false },
        { item: 'reel1', isPlaying: false },
        { item: 'reel2', isPlaying: false }
    ];

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
}
