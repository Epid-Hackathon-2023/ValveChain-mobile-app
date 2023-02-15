import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValvedbPageRoutingModule } from './valvedb-routing.module';

import { ValvedbPage } from './valvedb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValvedbPageRoutingModule
  ],
  declarations: [ValvedbPage]
})
export class ValvedbPageModule {}
