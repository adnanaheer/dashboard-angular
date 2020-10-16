import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup, } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  hide = true;

  email = new FormControl('', [Validators.required]);

  LoginFormComponent: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoginFormComponent = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {

      return 'Enter your Value';

    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);

  }

}