import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

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
