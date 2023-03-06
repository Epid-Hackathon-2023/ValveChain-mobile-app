import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabLoginPage } from './tab_login.page';

const routes: Routes = [
  {
    path: '',
    component: TabLoginPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabLoginPageRoutingModule {}
