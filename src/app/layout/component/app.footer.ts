import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        <img src="/awareai.png" alt="aware.ai logo" class="h-12 w-12 mr-2" />
        <span class="text-surface-900 dark:text-surface-0 font-bold text-2xl leading-normal mr-20">aware.ai</span>
    </div>`
})
export class AppFooter {}
