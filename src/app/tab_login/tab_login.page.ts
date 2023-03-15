import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab_login',
  templateUrl: 'tab_login.page.html',
  styleUrls: ['tab_login.page.scss']
})


export class TabLoginPage implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, private formBuilder:FormBuilder) {this.loginForm = this.formBuilder.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
    });
  }

  ngOnInit() {

    //Fetch-check data typed by user
    this.loginForm = this.formBuilder.group({
      user: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(26)]),
      pass: this.formBuilder.control('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$')]),
    });
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  //Déclenche le formuaire lorsque "Connexion" appuyé
  OnSubmit() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Veuillez remplire tous les champs.')
      this.isSubmitted = false;
      return false;
    }
    
    else {
      console.log(this.loginForm.value)

      const user = this.loginForm.controls.user.value;
      const pass = this.loginForm.controls.pass.value;

      if (this.authService.login(user, pass)) {
        console.log('Good password !')
        //this.router.navigate(['/home']);
      }

      else {
        console.log('Bad password...')
        this.isSubmitted = false;
      }

      return true;
    }
  }
}
