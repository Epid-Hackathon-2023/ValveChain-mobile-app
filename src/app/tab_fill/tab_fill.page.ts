import { NavController} from '@ionic/angular';
import { Component,OnInit ,ViewChild,ViewContainerRef,ComponentFactoryResolver, EnvironmentInjector } from '@angular/core';
import { AlertController} from '@ionic/angular';


import { environment } from '../../environments/environment';







@Component({
  selector: 'app-tab_fill',
  templateUrl: 'tab_fill.page.html',
  styleUrls: ['tab_fill.page.scss'],
})


export class TabFillPage implements OnInit {
  public listItems:any;
  public valve:any;
  public ETAT:any;
  public TAM:any;
  public TAV:any;
  public N:any;
  public DATE:any;

  public att="";
  public description ="";
  public nom ="";
  public pos ="";
  public local ="";

  public annexe;
  public annexe1;
  public tournee_rendementdatestart = environment.tournee_rendement.date_debut;
  public tournee_rendementdatefin = environment.tournee_rendement.date_fin;
  public ntranche = environment.tournee_rendement.tranche;
  
 
  constructor( private alertController: AlertController,public navCtrl: NavController, resolver:ComponentFactoryResolver){
   
    this.listItems=[{     //templates List
      date: "Date",
       name: "N°",
       etat:"Etat",
       temA:"...",
       tempB:"...",
       imageURL: "./assets/image_01.png" 
    }];
  }

     annexesDescriptions: any[] = [];     //tableau json annexe
    groupesVannesLocalisations: any[] = [];

    vannesdes: any[] = [];    //tableau json annexe.vannes
    vannesfonc: any[] = [];
    vannescons:any[] = [];
    vannesatt:any[] = [];

    valeuramont: any[] = [];    //tableau json annexe.temperature
    valeuraval: any[] = [];
    vannepossatt: any[] = [];

   

  async ngOnInit(): Promise<void> 
  {
    

    
    for (const annexeId in environment.annexes) {
      if (environment.annexes.hasOwnProperty(annexeId)) {
         this.annexe = environment.annexes[annexeId];
         
         console.log(`niveau ${annexeId}: ${this.annexe.niveau}`);
        this.annexesDescriptions.push(`Annexe ${annexeId}: ${this.annexe.niveau}`);

        console.log(`annexe_description ${annexeId}: ${this.annexe.annexe_description}`);
        this.annexesDescriptions.push(`Annexe ${annexeId}: ${this.annexe.annexe_description}`);
        
        
        for (const groupeVannes of this.annexe.groupes_vannes) {
          
        
          console.log(` localisation_groupe:  ${groupeVannes.localisation_groupe}`);
          this.groupesVannesLocalisations.push(`Groupes de vannes: ${groupeVannes.localisation_groupe}`);
        
          if (Array.isArray(groupeVannes.vannes)) {
            for (const vanne of groupeVannes.vannes) {
              console.log(` repere_fonctionnel:  ${vanne.repere_fonctionnel}`);
              this.vannesfonc.push(`${vanne.repere_fonctionnel}`);

              console.log(`  description vanne:  ${vanne.description}`);
              this.vannesdes.push(`${vanne.description}`);

              console.log(`  position_constatee:  ${vanne.position_constatee}`);
              this.vannescons.push(`${vanne.position_constatee}`);

              console.log(`  position_attendue:  ${vanne.position_attendue}`);
              this.vannepossatt.push(`${vanne.position_attendue}`);
              
              console.log(vanne.temperature_relevee.amont);
              this.valeuramont.push(vanne.temperature_relevee.amont);
              
              console.log(vanne.temperature_relevee.aval);
              this.valeuraval.push(vanne.temperature_relevee.aval);

              console.log(`  position_attendue:  ${vanne.temperature_attendue}`);
              this.vannesatt.push(`${vanne.temperature_attendue}`);

            }
          }
        }     
      }
    }




  }

  async onclick2(){
    

    for (const annexeId in environment.annexes) {
      
      if (environment.annexes.hasOwnProperty(annexeId)) {
        for (const groupeVannes of this.annexe.groupes_vannes) {

          this.local = groupeVannes.localisation_groupe
          if (Array.isArray(groupeVannes.vannes)) {
            for (const vanne of groupeVannes.vannes) {

              

    for (let i = 0; i< 131072 ;i++){

      
      if(this.N == this.vannesfonc[i]){
        
        this.nom = this.vannesfonc[i]
        this.att = this.vannesatt[i];
        this.pos =this.vannepossatt[i];

        this.description = this.vannesdes[i];
        console.log(`  i:  ${i}`);

      }
    }
  }
     }
    }
  }
  console.log(`  valeur att dynamic:  ${this.att}`);
  console.log(`  description Dynamic:  ${this.description}`);
  }
}



  async onclick(){

    const alert = await this.alertController.create({
      header: "Tout les champs doivent etre remplis pour validée la vanne",
      buttons: ['OK'],
    });

    if(this.N == null || this.ETAT == null || this.TAM == null || this.TAV == null){
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

  async presentAlert0() {
    const alert = await this.alertController.create({
      header: "Description de la vanne:",
      message: this.description,
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