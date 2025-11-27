import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Checkbox } from 'primeng/checkbox';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputText,
    Textarea,
    Checkbox,
    Card,
    Toast,
    Button
  ],
  providers: [MessageService],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  private messages = inject(MessageService);

  form: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(/^\+?[0-9\-\s]{7,15}$/)]],
    subject: ['', [Validators.required, Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    agree: [false, [Validators.requiredTrue]]
  });

  get invalid() {
    return this.form.invalid && (this.form.dirty || this.form.touched);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.messages.add({ severity: 'warn', summary: 'Invalid', detail: 'Please fix the errors.' });
      return;
    }
    const value = this.form.value;
    this.messages.add({ severity: 'success', summary: 'Submitted', detail: 'Contact form submitted.' });
    console.log('Contact form', value);
  }
}
