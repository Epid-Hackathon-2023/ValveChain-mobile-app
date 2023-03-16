import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab_settings',
  templateUrl: 'tab_settings.page.html',
  styleUrls: ['tab_settings.page.scss']
})
export class TabSettingsPage {

  public A:any;
  public B:any;
  public C:any;
  public D:any;
  public E:any;
  

  constructor(private alertController: AlertController, private router: Router, public navCtrl: NavController) {}

 async onclick(){
    const alert = await this.alertController.create({
      header: "Tous les champs doivent être validés pour continuer.",
      buttons: ['OK'],
    });
    

    if (this.A == true && this.B ==true && this.C ==true && this.D ==true && this.E ==true){
      console.log(`[tab_settings] Check valid`);
      this.router.navigate(['/pictures']);
    }
    else{
      await alert.present();

    }
  }

}
