import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DbService } from './services/db.service';
import { Router } from "@angular/router";
import { Md5 } from 'ts-md5/dist/md5';
import { TabLoginPage } from './tab_login/tab_login.page';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  editForm: FormGroup;
  LoginData: any[] = []
  private amilogged = false;
  user:string;
  user_db:string;
  pass_hash:string;
  pass_hash_db:string;

  constructor(private sqlite: SQLite, private db:DbService, private router: Router) {

    console.log("[auth] Le authService est lancé")

    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchUsers().subscribe(item => {
          this.LoginData = item
        })
      }
    });
  }

  //######## HASH STRING MD5 ########//
  hashPassword(data_to_hash : string, hash : string){
    //Hash plain password and save it
    hash =  (Md5.hashStr(data_to_hash) as string);
    console.log("[auth] hash: " + hash);
    return hash;
  }


  //######## LOGIN REQUEST ########//
  login(user: string, pass: string): Promise<boolean> {

    //Hash le password
    this.pass_hash = this.hashPassword(pass, this.pass_hash)

    //Récupère les données de l'utilisateur
    return this.db.getSingleUser(user).then(res => {
      console.log(res);
      
      this.user_db = res['user'],
      this.pass_hash_db = res['pass_hash']

      console.log("[auth] user_db: " + this.user_db + ", pass_hash_db: " + this.pass_hash_db);
      console.log("[auth] user: " + user + ", pass_hash: " + this.pass_hash);

      if (user === this.user_db && this.pass_hash === this.pass_hash_db) {
        console.log('[auth] Good password !')
        this.amilogged = true;
        this.router.navigate(['/tab_fill']);
        return true;
      }
      else{
        console.log('[auth] Bad password...')
        //TabLoginPage ['isSubmitted'] = false;
        return false;
      }
    })
  }


  //######## LOGOUT REQUEST ########//
  logout(): void {
    this.amilogged = false;
  }


  //######## IF LOGGED ########//
  isLoggedIn(): boolean {
    return this.amilogged;
  }
}