import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-tab_login',
  templateUrl: 'tab_login.page.html',
  styleUrls: ['tab_login.page.scss']
})
export class TabLoginPage {

  Name:string;
  Password:string;
  test:string = "Password";
  loginForm:FormGroup;
  isSubmitted = false;

  constructor(public formBuilder:FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(2)]],
      pass: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]')]]
    })
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  //Déclenche le formuaire lorsque "Connexion" appuyé
  submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Veuillez remplire tous les champs.')
      return false;
    } else {
      console.log(this.loginForm.value)
      return true;
    }
  }
}
