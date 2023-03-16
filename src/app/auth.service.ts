import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DbService } from './services/db.service';
import { Router } from "@angular/router";
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  editForm: FormGroup;
  LoginData: any[] = []
  private isLoggedIn: boolean = false;
  user:string;
  user_db:string;
  pass_hash:string;
  pass_hash_db:string;

  constructor(private sqlite: SQLite, private db:DbService, private router: Router) {
    /*this.db.getSingleUser("1").then(res => {
      this.editForm.setValue({
        user_db: res['user'],
        pass_hash_db: res['pass_hash']
      })
    });*/

    console.log("Le authService est lancé")/*
    this.sqlite.create({
      name: 'valve.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      db.executeSql('SELECT * FROM users', [])
        .then(data => {
          if (data.rows.length > 0) {
            for (let i = 0; i < data.rows.length; i++) {
              console.log(data.rows.item(i).name);
            }
          }
        })
    .catch(e => console.log('Error retrieving data', e));

    }).catch(e => console.log(e));
    */

    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchUsers().subscribe(item => {
          this.LoginData = item
        })
      }
    });
  }


  //######## HASH STRING MD5 ########//
  hashPassword(data_to_hash : string, hash){
    //Hash plain password and save it
    hash =  (Md5.hashStr(data_to_hash) as string);
    console.log("hash: " + hash);
  }


  //######## LOGIN REQUEST ########//
  login(user: string, pass_hash: string): boolean {

    //Hash le password
    this.hashPassword(pass_hash, this.pass_hash)

    //Récupère les données de l'utilisateur
    this.db.getSingleUser(user).then(res => {
      this.editForm.setValue({
        [this.user_db]: res['user'],
        [this.pass_hash_db]: res['pass_hash'],
      })
    })

    console.log("user_db: " + this.user_db + ", pass_hash_db: " + this.pass_hash_db);

    if (user === this.user_db && this.pass_hash === this.pass_hash_db) {
      this.isLoggedIn = true;
      this.router.navigate(['/tab_home']);
      return true;
    }
    else{
    this.router.navigate(['/tab_settings']);

    return false;
    }
  }


  //######## LOGOUT REQUEST ########//
  logout(): void {
    this.isLoggedIn = false;
  }


  //######## IF LOGGED ########//
  isLoggedIn_(): boolean {
    return this.isLoggedIn;
  }
}