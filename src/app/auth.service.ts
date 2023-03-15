import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DbService } from './services/db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  editForm: FormGroup;
  LoginData: any[] = []
  private isLoggedIn: boolean = false;
  user_db:string;
  pass_hash_db:string;

  constructor(private sqlite: SQLite, private db:DbService) {
    /*this.db.getSingleUser("1").then(res => {
      this.editForm.setValue({
        user_db: res['user'],
        pass_hash_db: res['pass_hash']
      })
    });*/
  }


  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchUsers().subscribe(item => {
          this.LoginData = item
        })
      }
    });

    //this.db.addUser(this.user, this.pass_hash);
    this.db.addUser("ok","okOK99")
  }


  //######## LOGIN REQUEST ########//
  login(user: string, pass: string): boolean {
    // Ajoutez ici la logique pour valider les informations d'identification de l'utilisateur
    
    /*this.sqlite.create({
      name: 'users.db',
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

    }).catch(e => console.log(e));*/

    if (user === this.user_db && pass === this.pass_hash_db) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
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