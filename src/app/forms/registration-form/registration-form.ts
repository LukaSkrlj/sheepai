import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { Checkbox } from 'primeng/checkbox';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

function matchPasswords(group: AbstractControl): ValidationErrors | null {
  const pw = group.get('password')?.value;
  const cpw = group.get('confirmPassword')?.value;
  return pw && cpw && pw !== cpw ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputText,
    Password,
    Checkbox,
    Button,
    Card,
    Toast,
  ],
  providers: [MessageService],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.scss'
})
export class RegistrationFormComponent {
  private fb = inject(FormBuilder);
  private messages = inject(MessageService);

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    credentials: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: matchPasswords }),
    terms: [false, Validators.requiredTrue]
  });

  get f() { return this.form.controls; }
  get c() { return (this.form.get('credentials') as FormGroup).controls; }
  get credentials() {
    return this.form.get('credentials')!;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.messages.add({ severity: 'warn', summary: 'Invalid', detail: 'Please fix the errors.' });
      return;
    }
    const value = this.form.value;
    this.messages.add({ severity: 'success', summary: 'Registered', detail: 'Registration form submitted.' });
    console.log('Registration form', value);
  }
}
