import { NavController} from '@ionic/angular';
import { Component,OnInit ,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { AlertController} from '@ionic/angular';








@Component({
  selector: 'app-tab_fill',
  templateUrl: 'tab_fill.page.html',
  styleUrls: ['tab_fill.page.scss'],
})


export class TabFillPage {
  public listItems:any;
  public valve:any
  public ETAT;
  public TAM;
  public TAV;
  public N;
  public DATE;


 
  constructor( private alertController: AlertController,public navCtrl: NavController, resolver:ComponentFactoryResolver){
   
    this.listItems=[{
      date: "Date", name: "N°", etat:"Etat",temA:"...",tempB:"...", imageURL: "./assets/image_01.png" 
    }];
  }

  public onclick():void{
    this.listItems.push({
     date:this.DATE, name: this.N , etat: this.ETAT,temA:this.TAM, temB:this.TAV,imageURL: "./assets/image_01.png"
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



async presentcal() {
  const alert = await this.alertController.create({
    header: 'Please enter your info',
    buttons: ['OK'],
    inputs: [
      {
        type: 'number',
        placeholder: 'Day :( ex: 01 )',
        
        attributes: {
        min: 4,
        max: 4,
        },

      },
      {
        type: 'number',
        placeholder: 'Mouth :( ex: 01 )',
        attributes: {
        min: 4,
        max: 4,
        },
      },
      {
        type: 'number',
        placeholder: 'Year :( ex: 2023 )',
        min: 4,
        max: 4,
      }
    ],
  });

  await alert.present();
}




senddata() {
  
  let senddata = {
          "numero":this.N,
          "date":this.DATE,
          "etat": this.ETAT,
          "TAM": this.TAM,
          "TAV": this.TAV,
  }

 // this.http.post("http/adress", postData)
 //   .subscribe(data => {
 //     console.log(data['_body']);
 //    },
}
}