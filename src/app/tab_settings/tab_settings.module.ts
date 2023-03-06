import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabSettingsPage } from './tab_settings.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabSettingsPageRoutingModule } from './tab_settings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabSettingsPageRoutingModule
  ],
  declarations: [TabSettingsPage]
})
export class TabSettingsPageModule {}
