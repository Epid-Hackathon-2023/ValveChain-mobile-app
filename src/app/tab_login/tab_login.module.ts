import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabLoginPage } from './tab_login.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabLoginPageRoutingModule } from './tab_login-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabLoginPageRoutingModule
  ],
  declarations: [TabLoginPage]
})
export class TabLoginPageModule {}
