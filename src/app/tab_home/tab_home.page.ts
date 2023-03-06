import { Component } from '@angular/core';

@Component({
  selector: 'app-tab_home',
  templateUrl: 'tab_home.page.html',
  styleUrls: ['tab_home.page.scss']
})
export class TabHomePage {

  Name:string;
  Password:string;

  test:string = "Password";

  constructor() {}

}
