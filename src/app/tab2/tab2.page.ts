import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
var inc=0;



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  

 incrementIndex(){
   inc = inc + 1 ;
}

  constructor(private alertController: AlertController) {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sauvegarde de la Valve',
      subHeader: '',
      message: 'Votre valve a bien été sauvegardée',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Ajouter une vanne',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'Nom de la vanne',
          placeholder: 'Nom de la vanne',
          
        },
        {
          name: 'ID',
          placeholder: 'ID',
          
        },
        {
          name: 'Température attendue en aval',
          placeholder: 'Température attendue en aval',
          
        },
      ],
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          handler: (data: any) => {
            console.log('Saved Information', data);
          }
        },
      ],
    });

    await alert.present();
  }

  

}


