import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-herowidget',
  imports: [ButtonModule, RippleModule],
  templateUrl: './herowidget.html',
  styleUrl: './herowidget.scss'
})
export class Herowidget {

}
