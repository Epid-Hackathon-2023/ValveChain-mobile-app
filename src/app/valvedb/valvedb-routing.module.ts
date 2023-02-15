import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValvedbPage } from './valvedb.page';

const routes: Routes = [
  {
    path: '',
    component: ValvedbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValvedbPageRoutingModule {}
