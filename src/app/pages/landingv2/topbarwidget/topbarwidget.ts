import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbarwidget',
  imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, AppFloatingConfigurator],
  templateUrl: './topbarwidget.html',
  styleUrl: './topbarwidget.scss'
})
export class Topbarwidget {
  constructor(public router: Router) {}
}
