import { Component } from '@angular/core';
import { Topbarwidget } from './topbarwidget/topbarwidget';
import { Herowidget } from './herowidget/herowidget';
import { Featureswidget } from './featureswidget/featureswidget';

@Component({
  selector: 'app-landingv2',
  imports: [Topbarwidget, Herowidget, Featureswidget],
  templateUrl: './landingv2.html',
  styleUrl: './landingv2.scss',
  template: `
    <div class="landing-v2">
      <h1>Welcome to Landing V2</h1>
    </div>
  `
})
export class Landingv2 {

}
