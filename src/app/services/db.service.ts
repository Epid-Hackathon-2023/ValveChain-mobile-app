import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Usersdb, Valvedb } from './valvedb';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})

export class DbService {
  private storage: SQLiteObject;
  usersList = new BehaviorSubject([]);
  valvesList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'valve.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
  }


  dbState() {
    return this.isDbReady.asObservable();
  }


  fetchUsers(): Observable<Usersdb[]> {
    return this.usersList.asObservable();
  }
 
  fetchValves(): Observable<Valvedb[]> {
    return this.valvesList.asObservable();
  }


  //Render fake data
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql', 
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getValves();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }


  //######## GET ########//

  // Get users list
  getUsers(){
    return this.storage.executeSql('SELECT * FROM userstable', []).then(res => {
      let items: Usersdb[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            user: res.rows.item(i).user,  
            pass_hash: res.rows.item(i).pass_hash
           });
        }
      }
      this.usersList.next(items);
    });
  }

  // Get valves list
  getValves(){
    return this.storage.executeSql('SELECT * FROM valvetable', []).then(res => {
      let items: Valvedb[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            user: res.rows.item(i).user,  
            valve_name: res.rows.item(i).valve_name
           });
        }
      }
      this.valvesList.next(items);
    });
  }


  //######## ADD ########//

  // Add user
  addUser(user, pass_hash) {
    let data = [user, pass_hash];
    return this.storage.executeSql('INSERT INTO userstable (user, pass_hash) VALUES (?, ?)', data)
    .then(res => {
      this.getUsers();
    });
  }

  // Add valve
  addValve(user, valve_name) {
    let data = [user, valve_name];
    return this.storage.executeSql('INSERT INTO valvetable (user, valve_name) VALUES (?, ?)', data)
    .then(res => {
      this.getValves();
    });
  }
 

  //######## GET_SINGLE ########//

  // Get single user
  getSingleUser(user): Promise<Usersdb> {
    return this.storage.executeSql('SELECT * FROM userstable WHERE user = ?', [user]).then(res => { 

      /*id_out = res.rows.item(0).id,
      user_out = res.rows.item(0).user,
      pass_hash_out = res.rows.item(0).pass_hash*/
      return {
        id: res.rows.item(0).id,
        user: res.rows.item(0).user,
        pass_hash: res.rows.item(0).pass_hash
      }
    });
  }
 
  // Get single object
  getSingleValve(id): Promise<Valvedb> {
    return this.storage.executeSql('SELECT * FROM valvetable WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id,
        user: res.rows.item(0).user,  
        valve_name: res.rows.item(0).valve_name
      }
    });
  }


  //######## UPDATE ########//

  // Update user
  updateUser(user: Usersdb, pass_hash: Usersdb) {
    let data = [user, pass_hash];
    return this.storage.executeSql(`UPDATE userstable SET user = ?, pass_hash = ? WHERE user = ${user}`, data)
    .then(data => {
      this.getUsers();
    })
  }

  // Update valve
  updateValve(id, valve: Valvedb) {
    let data = [valve.user, valve.valve_name];
    return this.storage.executeSql(`UPDATE valvetable SET user = ?, valve_name = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getValves();
    })
  }


  //######## DELETE ########//

  // Delete user
  deleteUser(user) {
    return this.storage.executeSql('DELETE FROM userstable WHERE user = ?', [user])
    .then(_ => {
      this.getUsers();
    });
  }

  // Delete
  deleteValve(id) {
    return this.storage.executeSql('DELETE FROM valvetable WHERE id = ?', [id])
    .then(_ => {
      this.getValves();
    });
  }
}