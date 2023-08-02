import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm=this.fb.group({
    email:['' , [Validators.required , Validators.email]],
    password:['',[Validators.required]]
});
  constructor(private fb: FormBuilder){}
  get controls() {
    return this.signInForm.controls;
  }
  onSubmit() {
    console.log(this.signInForm.value);
    this.signInForm.reset();
    console.log(this.signInForm.value);
  }
}
