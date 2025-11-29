import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'footer-widget',
    imports: [RouterModule],
    template: `
        <div class="py-12 px-12 mx-0 mt-20 lg:mx-20 border-t border-surface-200 dark:border-surface-700">
            <div class="grid grid-cols-12 gap-8">
                <div class="col-span-12 md:col-span-4">
                    <div class="flex items-center gap-3 mb-6">
                        <img src="/awareai.png" alt="aware.ai logo" class="h-12 w-12" />
                        <h4 class="font-bold text-3xl text-surface-900 dark:text-surface-0">aware.ai</h4>
                    </div>
                    <p class="text-surface-600 dark:text-surface-200 mb-4 text-lg">
                        AI-first security intelligence platform that delivers hyper-personalized threat insights.
                    </p>
                    <p class="text-surface-500 dark:text-surface-300 italic">
                        Don't be a sheep, be aware.ai
                    </p>
                </div>

                <div class="col-span-12 md:col-span-8">
                    <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                        <div class="col-span-12 md:col-span-4">
                            <h4 class="font-semibold text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Product</h4>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Features</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Pricing</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">API</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Integrations</a>
                        </div>

                        <div class="col-span-12 md:col-span-4">
                            <h4 class="font-semibold text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Resources</h4>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Documentation</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Blog</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Security Research</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Support</a>
                        </div>

                        <div class="col-span-12 md:col-span-4">
                            <h4 class="font-semibold text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Company</h4>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">About</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Contact</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Privacy Policy</a>
                            <a class="leading-normal text-base block cursor-pointer mb-2 text-surface-600 dark:text-surface-200 hover:text-purple-600">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t border-surface-200 dark:border-surface-700 mt-8 pt-6 text-center">
                <p class="text-surface-600 dark:text-surface-200">
                    © 2025 aware.ai. All rights reserved.
                </p>
            </div>
        </div>
    `
})
export class FooterWidget {
    constructor(public router: Router) {}
}
