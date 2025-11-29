import { Component } from '@angular/core';

@Component({
    selector: 'highlights-widget',
    template: `
        <div id="highlights" class="py-20 px-6 lg:px-20 bg-white dark:bg-surface-900">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div class="text-surface-900 dark:text-surface-0 font-bold mb-4 text-4xl md:text-5xl">Built on Advanced AI Architecture</div>
                    <span class="text-surface-600 dark:text-surface-300 text-xl">Multi-agent orchestration powered by cutting-edge technology</span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div class="flex flex-col justify-center">
                        <div class="inline-flex items-center justify-center mb-6" style="width: 4rem; height: 4rem; border-radius: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                            <i class="pi pi-fw pi-bolt text-4xl text-white"></i>
                        </div>
                        <h3 class="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4">LangGraph Multi-Agent Orchestration</h3>
                        <p class="text-lg text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                            Our platform uses LangGraph to orchestrate multiple specialized AI agents in a hierarchical workflow. Each agent handles specific tasks - scraping, filtering, validation, summarization - ensuring accurate, reliable threat intelligence.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 gap-4">
                        <div class="flex items-center gap-4 p-6 bg-surface-50 dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700">
                            <div class="flex-shrink-0 flex items-center justify-center" style="width: 3rem; height: 3rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                                <i class="pi pi-sitemap text-2xl text-white"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-surface-900 dark:text-surface-0 mb-1">LangGraph Orchestration</div>
                                <div class="text-sm text-surface-600 dark:text-surface-300">State machine workflow engine</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-6 bg-surface-50 dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700">
                            <div class="flex-shrink-0 flex items-center justify-center" style="width: 3rem; height: 3rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                                <i class="pi pi-users text-2xl text-white"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-surface-900 dark:text-surface-0 mb-1">Multi-Agent System</div>
                                <div class="text-sm text-surface-600 dark:text-surface-300">Hierarchical AI agents</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-6 bg-surface-50 dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700">
                            <div class="flex-shrink-0 flex items-center justify-center" style="width: 3rem; height: 3rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                                <i class="pi pi-server text-2xl text-white"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-surface-900 dark:text-surface-0 mb-1">RAG Pipeline</div>
                                <div class="text-sm text-surface-600 dark:text-surface-300">LangChain-powered retrieval</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div class="grid grid-cols-1 gap-4 order-2 lg:order-1">
                        <div class="flex items-center gap-4 p-6 bg-surface-50 dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700">
                            <div class="flex-shrink-0 flex items-center justify-center" style="width: 3rem; height: 3rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                                <i class="pi pi-eye text-2xl text-white"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-surface-900 dark:text-surface-0 mb-1">Dwell Time Tracking</div>
                                <div class="text-sm text-surface-600 dark:text-surface-300">Measures reading engagement</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-6 bg-surface-50 dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700">
                            <div class="flex-shrink-0 flex items-center justify-center" style="width: 3rem; height: 3rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                                <i class="pi pi-bookmark text-2xl text-white"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-surface-900 dark:text-surface-0 mb-1">Note Analysis</div>
                                <div class="text-sm text-surface-600 dark:text-surface-300">Learns from your highlights</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-6 bg-surface-50 dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700">
                            <div class="flex-shrink-0 flex items-center justify-center" style="width: 3rem; height: 3rem; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                                <i class="pi pi-chart-line text-2xl text-white"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-surface-900 dark:text-surface-0 mb-1">Adaptive Filtering</div>
                                <div class="text-sm text-surface-600 dark:text-surface-300">Improves over time</div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center order-1 lg:order-2">
                        <div class="inline-flex items-center justify-center mb-6" style="width: 4rem; height: 4rem; border-radius: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                            <i class="pi pi-fw pi-chart-network text-4xl text-white"></i>
                        </div>
                        <h3 class="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4">Intelligent Personalization Engine</h3>
                        <p class="text-lg text-surface-600 dark:text-surface-300 leading-relaxed">
                            Hybrid recommender system combines content-based filtering with collaborative filtering, tracking your engagement patterns including dwell time, highlights, and notes to deliver increasingly relevant security intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class HighlightsWidget {}
