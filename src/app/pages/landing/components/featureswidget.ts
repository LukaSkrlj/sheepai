import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'features-widget',
    standalone: true,
    imports: [CommonModule],
    template: ` <div id="features" class="py-20 px-6 lg:px-20 bg-surface-50 dark:bg-surface-950">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <div class="text-surface-900 dark:text-surface-0 font-bold mb-4 text-4xl md:text-5xl">Intelligent Security Intelligence</div>
                <span class="text-surface-600 dark:text-surface-300 text-xl">Hyper-personalized threat intelligence, delivered your way</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-8 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-700 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center justify-center mb-6" style="width: 3.5rem; height: 3.5rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                    <i class="pi pi-fw pi-filter text-2xl text-white"></i>
                </div>
                <h5 class="mb-3 text-surface-900 dark:text-surface-0 text-xl font-semibold">Smart Filtering</h5>
                <span class="text-surface-600 dark:text-surface-300 leading-relaxed">AI-powered scraping from sources like The Hacker News, filtered by your interests, keywords, and location.</span>
            </div>

            <div class="p-8 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-700 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center justify-center mb-6" style="width: 3.5rem; height: 3.5rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                    <i class="pi pi-fw pi-chart-line text-2xl text-white"></i>
                </div>
                <h5 class="mb-3 text-surface-900 dark:text-surface-0 text-xl font-semibold">Reliability Scoring</h5>
                <span class="text-surface-600 dark:text-surface-300 leading-relaxed">Multi-agent system validates content accuracy and assigns high-confidence scores to prevent misinformation.</span>
            </div>

            <div class="p-8 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-700 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center justify-center mb-6" style="width: 3.5rem; height: 3.5rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                    <i class="pi pi-fw pi-sparkles text-2xl text-white"></i>
                </div>
                <h5 class="mb-3 text-surface-900 dark:text-surface-0 text-xl font-semibold">AI Summarization</h5>
                <span class="text-surface-600 dark:text-surface-300 leading-relaxed">Hierarchical agents generate concise, hallucination-resistant summaries with infographics and visual aids.</span>
            </div>

            <div class="p-8 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-700 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center justify-center mb-6" style="width: 3.5rem; height: 3.5rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                    <i class="pi pi-fw pi-video text-2xl text-white"></i>
                </div>
                <h5 class="mb-3 text-surface-900 dark:text-surface-0 text-xl font-semibold">Video Insights</h5>
                <span class="text-surface-600 dark:text-surface-300 leading-relaxed">Convert summaries to engaging video format using OpenAI Sora for enhanced information retention.</span>
            </div>

            <div class="p-8 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-700 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center justify-center mb-6" style="width: 3.5rem; height: 3.5rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                    <i class="pi pi-fw pi-send text-2xl text-white"></i>
                </div>
                <h5 class="mb-3 text-surface-900 dark:text-surface-0 text-xl font-semibold">Multi-Channel Delivery</h5>
                <span class="text-surface-600 dark:text-surface-300 leading-relaxed">Receive alerts through Slack, Jira, email, or our dashboard - integrated into your existing workflow.</span>
            </div>

            <div class="p-8 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-700 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center justify-center mb-6" style="width: 3.5rem; height: 3.5rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                    <i class="pi pi-fw pi-comments text-2xl text-white"></i>
                </div>
                <h5 class="mb-3 text-surface-900 dark:text-surface-0 text-xl font-semibold">RAG-Powered Chat</h5>
                <span class="text-surface-600 dark:text-surface-300 leading-relaxed">Query your saved notes and insights with our LangChain-powered chatbot for instant knowledge retrieval.</span>
            </div>
            </div>

            <div class="mt-16 p-10 md:p-16 rounded-2xl" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                <div class="flex flex-col justify-center items-center text-center">
                    <div class="mb-6">
                        <i class="pi pi-chart-bar text-6xl text-white"></i>
                    </div>
                    <div class="text-white mb-4 text-3xl md:text-4xl font-bold">Hybrid Recommender System</div>
                    <p class="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl">
                        Our intelligent system combines content-based filtering with collaborative filtering, tracking your engagement patterns - dwell time, highlights, and note-taking - to deliver increasingly relevant security intelligence tailored to your needs.
                    </p>
                </div>
            </div>
        </div>
    </div>`
})
export class FeaturesWidget {}
