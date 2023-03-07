import { NavController} from '@ionic/angular';
import { Component,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { AlertController } from '@ionic/angular';

var inc=0;



@Component({
  selector: 'app-tab_fill',
  templateUrl: 'tab_fill.page.html',
  styleUrls: ['tab_fill.page.scss'],
})


export class TabFillPage {
  public listItems:any;
 
  constructor(private alertController: AlertController,public navCtrl: NavController, resolver:ComponentFactoryResolver){
    this.listItems=[{
      name: "NAME", etat:"ETAT",temA:"...",tempB:"...", imageURL: "./assets/image_01.png" 
    }];
  }

  public onclick():void{
    this.listItems.push({
      name: "Valve 1", etat: "ON",temA:"0.1", temB:"0.2",imageURL: "./assets/image_01.png"
    });
  };

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Comment connaitre l'etat de la vanne",
      message: 'bla bla bla',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Comment prendre la temperature en amont:',
      message: 'bla bla bla',
      buttons: ['OK'],
    });
    await alert.present();

}
async presentAlert3() {
  const alert = await this.alertController.create({
    header: 'Comment prendre la temperature en aval:',
    message: 'bla bla bla',
    buttons: ['OK'],
  });
  await alert.present();

}
}

