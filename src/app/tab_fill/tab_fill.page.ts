import { NavController} from '@ionic/angular';
import { Component,OnInit ,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { AlertController} from '@ionic/angular';


import { environment } from '../../environments/environment';







@Component({
  selector: 'app-tab_fill',
  templateUrl: 'tab_fill.page.html',
  styleUrls: ['tab_fill.page.scss'],
})


export class TabFillPage {
  public listItems:any;
  public valve:any;
  public ETAT:any;
  public TAM:any;
  public TAV:any;
  public N:any;
  public DATE:any;

 

  public  tournee_rendement  =  environment.tournee_rendement;
  public  annexes  =  environment.annexes;
  public  1  =  environment.annexes[1];
  public  groupes_vannes  =  environment.annexes[1].groupes_vannes[0];
  public  groupes_vannes1  =  environment.annexes[1].groupes_vannes[1];
  public vannes1 = environment.annexes[1].groupes_vannes[0].vannes[0];
  public temperature_relevee1 = environment.annexes[1].groupes_vannes[0].vannes[0].temperature_relevee;

  public vannes2 = environment.annexes[1].groupes_vannes[0].vannes[1];
  public temperature_relevee2 = environment.annexes[1].groupes_vannes[0].vannes[1].temperature_relevee;

  public vannes3 = environment.annexes[1].groupes_vannes[0].vannes[2];
  public temperature_relevee3 = environment.annexes[1].groupes_vannes[0].vannes[2].temperature_relevee;

  public vannes4 = environment.annexes[1].groupes_vannes[0].vannes[3];
  public temperature_relevee4 = environment.annexes[1].groupes_vannes[0].vannes[3].temperature_relevee;



 
  constructor( private alertController: AlertController,public navCtrl: NavController, resolver:ComponentFactoryResolver){
   
    this.listItems=[{
      date: "Date", name: "N°", etat:"Etat",temA:"...",tempB:"...", imageURL: "./assets/image_01.png" 
    }];
  }

  async onclick(){

    const alert = await this.alertController.create({
      header: "Tout les champs doivent etre remplis pour validée la vanne",
      buttons: ['OK'],
    });

    if(this.N == null && this.DATE == null && this.ETAT == null && this.TAM == null && this.TAV == null){
      console.log('is empty'); 
      await alert.present();
    }else{
    this.listItems.push({
     date:this.DATE, name: this.N , etat: this.ETAT,temA:this.TAM, temB:this.TAV,imageURL: "./assets/image_01.png"
    });
  }
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