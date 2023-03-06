import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-tab_home',
  templateUrl: 'tab_home.page.html',
  styleUrls: ['tab_home.page.scss']
})
export class TabHomePage {

  constructor(private alertController: AlertController, private db: DbService) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Envoie des données',
      subHeader: '',
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
  }


}
