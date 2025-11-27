import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Select as DropdownComponent } from 'primeng/select';
import { RadioButton } from 'primeng/radiobutton';
import { Checkbox } from 'primeng/checkbox';
import { Rating } from 'primeng/rating';
import { Textarea } from 'primeng/textarea';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownComponent,
    RadioButton,
    Checkbox,
    Rating,
    Textarea,
    Button,
    Card,
    Toast
  ],
  providers: [MessageService],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss'
})
export class SurveyFormComponent {
  private fb = inject(FormBuilder);
  private messages = inject(MessageService);

  topics = [
    { label: 'UI/UX', value: 'ui' },
    { label: 'Performance', value: 'perf' },
    { label: 'Features', value: 'features' },
    { label: 'Other', value: 'other' }
  ];

  channels = [
    { label: 'Email', value: 'email' },
    { label: 'Discord', value: 'discord' },
    { label: 'Reddit', value: 'reddit' },
    { label: 'Twitter/X', value: 'twitter' }
  ];

  form: FormGroup = this.fb.group({
    topic: [this.topics[0].value, Validators.required],
    satisfaction: [3, Validators.required],
    wouldRecommend: ['yes', Validators.required],
    channels: [[], Validators.required],
    comments: ['', Validators.maxLength(500)]
  });

  toggleChannel(value: string, checked: boolean) {
    const arr = this.form.get('channels')?.value as string[];
    const next = new Set(arr ?? []);
    if (checked) next.add(value); else next.delete(value);
    this.form.get('channels')?.setValue(Array.from(next));
    this.form.get('channels')?.markAsDirty();
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.messages.add({ severity: 'warn', summary: 'Invalid', detail: 'Please complete required fields.' });
      return;
    }
    const value = this.form.value;
    this.messages.add({ severity: 'success', summary: 'Thanks!', detail: 'Survey submitted.' });
    console.log('Survey form', value);
  }
}
