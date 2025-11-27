import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Select as DropdownComponent } from 'primeng/select';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputText,
    DropdownComponent,
    Button,
    Card,
    Toast
  ],
  providers: [MessageService],
  templateUrl: './address-form.html',
  styleUrl: './address-form.scss'
})
export class AddressFormComponent {
  private fb = inject(FormBuilder);
  private messages = inject(MessageService);

  countries = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'Croatia', value: 'CRO' },
    { label: 'Germany', value: 'DE' }
  ];

  statesUS = ['AL','AK']
    .map(s => ({ label: s, value: s }));

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    country: ['US', [Validators.required]],
    state: ['', []],
    zip: ['', [Validators.required]],
  });

  get isUS() { return this.form.value.country === 'US'; }

  submit() {
    if (this.isUS) {
      this.form.get('state')?.addValidators(Validators.required);
      this.form.get('zip')?.setValidators([Validators.required, Validators.pattern(/^\d{5}(-\d{4})?$/)]);
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.messages.add({ severity: 'warn', summary: 'Invalid', detail: 'Please complete required fields.' });
      return;
    }

    const value = this.form.value;
    this.messages.add({ severity: 'success', summary: 'Address Saved', detail: 'Address form submitted.' });
    console.log('Address form', value);
  }
}
