import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'pricing-widget',
    imports: [DividerModule, ButtonModule, RippleModule],
    template: `
        <div id="pricing" class="py-16 px-6 lg:px-20 my-6">
            <div class="text-center mb-12">
                <div class="text-surface-900 dark:text-surface-0 font-bold mb-3 text-5xl">Pricing That Scales With You</div>
                <span class="text-muted-color text-2xl">From individual professionals to enterprise teams</span>
            </div>

            <div class="grid grid-cols-12 gap-6 justify-between mt-12">
                <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                    <div class="p-6 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-purple-400 duration-300 transition-all hover:shadow-xl" style="border-radius: 16px; min-height: 600px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-6 text-3xl font-bold">Personal Free</div>
                        <div class="text-center mb-6">
                            <i class="pi pi-user text-6xl text-purple-400"></i>
                        </div>
                        <div class="my-6 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-6xl font-bold mr-2 text-surface-900 dark:text-surface-0">$0</span>
                                <span class="text-surface-600 dark:text-surface-200">forever</span>
                            </div>
                            <button pButton pRipple label="Start Free" class="p-button-rounded border-0 font-semibold px-6 bg-purple-500 text-white hover:bg-purple-600"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-6 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col flex-grow">
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">1 news data source</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">AI summarization</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">Basic filtering</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">Dashboard access</span>
                            </li>
                            <li class="py-3 flex items-start opacity-40">
                                <i class="pi pi-times text-xl text-gray-400 mr-3 mt-1"></i>
                                <span class="text-lg">Video content</span>
                            </li>
                            <li class="py-3 flex items-start opacity-40">
                                <i class="pi pi-times text-xl text-gray-400 mr-3 mt-1"></i>
                                <span class="text-lg">Unlimited data sources</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-6 flex flex-col pricing-card cursor-pointer border-2 duration-300 transition-all shadow-xl relative" style="border-radius: 16px; min-height: 600px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); border-color: #667eea">
                        <div class="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-bold">
                            POPULAR
                        </div>
                        <div class="text-surface-900 dark:text-surface-0 text-center my-6 text-3xl font-bold">Small Team</div>
                        <div class="text-center mb-6">
                            <i class="pi pi-star text-6xl" style="color: #667eea"></i>
                        </div>
                        <div class="my-6 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-6xl font-bold mr-2 text-surface-900 dark:text-surface-0">$29</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Upgrade Now" class="p-button-rounded border-0 font-semibold px-6 text-white" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-6 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col flex-grow">
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg font-semibold">Unlimited data sources</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg font-semibold">Video content generation</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">Advanced AI features</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">RAG-powered chatbot</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">Up to 10 members</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-times text-xl text-gray-400 mr-3 mt-1"></i>
                                 <span class="text-lg">Multiple teams</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-6 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-indigo-400 duration-300 transition-all hover:shadow-xl" style="border-radius: 16px; min-height: 600px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-6 text-3xl font-bold">Enterprise</div>
                        <div class="text-center mb-6">
                            <i class="pi pi-building text-6xl text-indigo-500"></i>
                        </div>
                        <div class="my-6 flex flex-col items-center gap-4">
                            <div class="flex flex-col items-center">
                                <span class="text-5xl font-bold text-surface-900 dark:text-surface-0">Custom</span>
                                <span class="text-surface-600 dark:text-surface-200 mt-2">Contact us</span>
                            </div>
                            <button pButton pRipple label="Book Demo" class="p-button-rounded border-0 font-semibold px-6 bg-indigo-500 text-white hover:bg-indigo-600"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-6 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col flex-grow">
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg font-semibold">Unlimited teams & members</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">All Pro features</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">Team collaboration tools</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">Slack/Jira/Email integration</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">Dedicated support</span>
                            </li>
                            <li class="py-3 flex items-start">
                                <i class="pi pi-check text-xl text-green-500 mr-3 mt-1"></i>
                                <span class="text-lg">Custom integrations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PricingWidget {}
