import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab_login',
        loadChildren: () => import('../tab_login/tab_login.module').then(m => m.TabLoginPageModule)
      },
      {
        path: 'tab_fill',
        loadChildren: () => import('../tab_fill/tab_fill.module').then(m => m.TabFillPageModule)
      },
      {
        path: 'tab_settings',
        loadChildren: () => import('../tab_settings/tab_settings.module').then(m => m.TabSettingsPageModule)
      },
      {
        path: 'tab_home',
        loadChildren: () => import('../tab_home/tab_home.module').then(m => m.TabHomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab_login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab_login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
