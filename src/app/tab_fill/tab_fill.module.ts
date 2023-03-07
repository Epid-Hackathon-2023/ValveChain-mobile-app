import { IonicModule} from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabFillPage } from './tab_fill.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
//import {SidebarModule} from "ng-sidebar";
import { TabFillPageRoutingModule } from './tab_fill-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabFillPageRoutingModule,
    
  ],
  declarations: [TabFillPage]
})
export class TabFillPageModule {

}
