export interface Note {
    id: string;
    userId: string;
    teamId: string | null;
    articleId: string;
    content: string;
    contentType: 'text' | 'image';
    imageUrl?: string;
    timestamp: string;
    metadata?: {
        articleTitle?: string;
        articleUrl?: string;
        tags?: string[];
    };
}
