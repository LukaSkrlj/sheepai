import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule, RippleModule],
    template: `
        <div
            id="hero"
            class="pt-16 pb-24 px-6 lg:px-20"
            style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        >
            <div class="max-w-7xl mx-auto">
                <div class="max-w-4xl">
                    <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                        Don't be a sheep,<br/>
                        <span class="text-yellow-200">be aware.ai</span>
                    </h1>
                    <p class="text-xl md:text-2xl leading-relaxed text-white/95 mb-12 max-w-3xl">
                        AI-first security intelligence that captures news, prioritizes threats, and delivers hyper-personalized insights through the tools you already use.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button pButton pRipple type="button" label="Start Free" class="text-lg! px-8! py-4! bg-white text-purple-600 hover:bg-gray-50 font-semibold shadow-lg border-0!"></button>
                        <button pButton pRipple [outlined]="true" type="button" label="Book Enterprise Demo" class="text-lg! px-8! py-4! text-white border-2! border-white! hover:bg-white/10 font-semibold"></button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class HeroWidget {}
