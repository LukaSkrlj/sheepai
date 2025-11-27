import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ContactFormComponent } from './contact-form/contact-form';
import { RegistrationFormComponent } from './registration-form/registration-form';
import { SurveyFormComponent } from './survey-form/survey-form';
import { AddressFormComponent } from './address-form/address-form';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    //RouterLink,
    ButtonModule,
    CardModule,
    ContactFormComponent,
    RegistrationFormComponent,
    SurveyFormComponent,
    AddressFormComponent
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class FormsComponent {
  selectedForm: 'contact' | 'registration' | 'survey' | 'address' | null = null;

  selectForm(form: 'contact' | 'registration' | 'survey' | 'address') {
    this.selectedForm = form;
  }

  back() {
    this.selectedForm = null;
  }
}
