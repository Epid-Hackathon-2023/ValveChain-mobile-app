import { Component } from '@angular/core';

@Component({
  selector: 'app-tab_login',
  templateUrl: 'tab_login.page.html',
  styleUrls: ['tab_login.page.scss']
})
export class TabLoginPage {

  Name:string;
  Password:string;

  test:string = "Password";

  constructor() {}

}
