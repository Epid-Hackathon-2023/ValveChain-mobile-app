import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabFillPage } from './tab_fill.page';

const routes: Routes = [
  {
    path: '',
    component: TabFillPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabFillPageRoutingModule {}
