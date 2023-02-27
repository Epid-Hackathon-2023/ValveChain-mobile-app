import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Valvedb } from './valvedb';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  private storage: SQLiteObject;
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
 
  fetchValves(): Observable<Valvedb[]> {
    return this.valvesList.asObservable();
  }
    // Render fake data
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
  // Get list
  getValves(){
    return this.storage.executeSql('SELECT * FROM valvetable', []).then(res => {
      let items: Valvedb[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            artist_name: res.rows.item(i).artist_name,  
            valve_name: res.rows.item(i).valve_name
           });
        }
      }
      this.valvesList.next(items);
    });
  }
  // Add
  addValve(artist_name, valve_name) {
    let data = [artist_name, valve_name];
    return this.storage.executeSql('INSERT INTO valvetable (artist_name, valve_name) VALUES (?, ?)', data)
    .then(res => {
      this.getValves();
    });
  }
 
  // Get single object
  getValve(id): Promise<Valvedb> {
    return this.storage.executeSql('SELECT * FROM valvetable WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id,
        artist_name: res.rows.item(0).artist_name,  
        valve_name: res.rows.item(0).valve_name
      }
    });
  }
  // Update
  updateValve(id, valve: Valvedb) {
    let data = [valve.artist_name, valve.valve_name];
    return this.storage.executeSql(`UPDATE valvetable SET artist_name = ?, valve_name = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getValves();
    })
  }
  // Delete
  deleteValve(id) {
    return this.storage.executeSql('DELETE FROM valvetable WHERE id = ?', [id])
    .then(_ => {
      this.getValves();
    });
  }
}