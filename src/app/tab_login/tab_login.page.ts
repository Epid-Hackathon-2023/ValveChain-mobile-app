import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab_login',
  templateUrl: 'tab_login.page.html',
  styleUrls: ['tab_login.page.scss']
})
export class TabLoginPage implements OnInit {

  Name:string;
  Password:string;
  test:string = "Password";
  loginForm:FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, public formBuilder:FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(26)]),
      pass: this.formBuilder.control('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$')]),
    });
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  //Déclenche le formuaire lorsque "Connexion" appuyé
//submitForm() {
  OnSubmit() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Veuillez remplire tous les champs.')
      this.isSubmitted = false;
      return false;
    }
    
    else {
      console.log(this.loginForm.value)

      if (this.authService.login(this.user, this.pass)) {
        console.log('Good password !')
      }

      else {
        console.log('Bad password...')
        this.isSubmitted = false;
      }

      return true;
    }
  }
}
