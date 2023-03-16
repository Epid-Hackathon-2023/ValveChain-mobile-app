import { NavController} from '@ionic/angular';
import { Component,OnInit ,ViewChild,ViewContainerRef, EnvironmentInjector } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';


import { environment } from '../../environments/environment';


const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.webPath;

};




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
  public NOTE:string;

  public att="";
  public description ="";
  public nom ="";
  public pos ="";
  public local ="";

  public annexe;
  public annexe1;
  public tournee_rendementdatestart = environment['tournee_rendement']; //.date_debut;  à fixer, titres "objet" sans ça
  public tournee_rendementdatefin = environment['tournee_rendement']; //.date_fin;
  public ntranche = environment['tournee_rendement']; //.tranche;
  
  imageURL = null;

  async Takepicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    if (image.webPath){
       this.imageURL = image.webPath;
    }

  }
 
  constructor( private alertController: AlertController,public navCtrl: NavController){
   
    this.listItems=[{     //templates List
      date: "Date",
       name: "N°",
       etat:"Etat",
       temA:"",
       tempB:"",
       note:"",
       pos:"Position attendue",
       att:"Temperature attendue",
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
    

    
    for (const annexeId in environment['annexes']) {
      if (environment['annexes'].hasOwnProperty(annexeId)) {
         this.annexe = environment['annexes'][annexeId];
         
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

              console.log(`  Description vanne:  ${vanne.description}`);
              this.vannesdes.push(`${vanne.description}`);

              console.log(`  Position_constatee:  ${vanne.position_constatee}`);
              this.vannescons.push(`${vanne.position_constatee}`);

              console.log(`  Position_attendue:  ${vanne.position_attendue}`);
              this.vannepossatt.push(`${vanne.position_attendue}`);
              
              console.log(vanne.temperature_relevee.amont);
              this.valeuramont.push(vanne.temperature_relevee.amont);
              
              console.log(vanne.temperature_relevee.aval);
              this.valeuraval.push(vanne.temperature_relevee.aval);

              console.log(`  Position_attendue:  ${vanne.temperature_attendue}`);
              this.vannesatt.push(`${vanne.temperature_attendue}`);

            }
          }
        }     
      }
    }




  }

  async onclick2(){
    

    for (const annexeId in environment['annexes']) {
      
      if (environment['annexes'].hasOwnProperty(annexeId)) {
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
  console.log(`  Valeur attend dynamique:  ${this.att}`);
  console.log(`  Description dynamique:  ${this.description}`);
  }
}



  async onclick(){

    const alert = await this.alertController.create({
      header: "Tous les champs doivent être remplis pour valider la vanne.",
      buttons: ['OK'],
    });

    if(this.N == null || this.ETAT == null || this.TAM == null || this.TAV == null){
      console.log('is empty'); 
      await alert.present();
    }else{
    this.listItems.push({
     date:this.DATE, name: this.N , etat: this.ETAT,temA:this.TAM,pos:this.pos  ,att:this.att , temB:this.TAV, note:this.NOTE,imageURL: "./assets/image_01.png"
    });
  }
  };

  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Comment connaitre l'état de la vanne ?",
      message: 'Lorem ipsum dolor sit amet.',
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
      header: 'Comment prendre la température en amont ?',
      message: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      buttons: ['OK'],
    });
    await alert.present();

}
async presentAlert3() {
  const alert = await this.alertController.create({
    header: 'Comment prendre la température en aval:',
    message: 'Curabitur nec tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris gravida neque vitae mollis pretium. Vestibulum iaculis ligula quis felis hendrerit condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    buttons: ['OK'],
  });
  await alert.present();

}
async presentAlert4() {
  const alert = await this.alertController.create({
    header: 'Pourquoi prendre des notes ?',
    message: 'Curabitur nec tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris gravida neque vitae mollis pretium. Vestibulum iaculis ligula quis felis hendrerit condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    buttons: ['OK'],
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