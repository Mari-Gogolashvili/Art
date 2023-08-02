import { Component } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-z]/),
        Validators.minLength(2),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    password:['',[Validators.required , Validators.minLength(8)]],
    confirmPassword:['']
  });
  constructor(private fb: NonNullableFormBuilder) {
    this.controls.confirmPassword.setValidators([
      this.confirmPasswordValidator(this.controls.password),
      Validators.required,
    ]);
  }

  get controls() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
    console.log(this.registerForm.value);
  }
  confirmPasswordValidator(compareTo: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== compareTo.value) {
        return { confirmPassword: 'Passwords do not match' };
      }
      return null;
    };
  }
}
