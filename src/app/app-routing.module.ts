import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},  //TabsProtected
  //{ path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},  //TabsAccess
  { path: 'tab_login', loadChildren: () => import('./tab_login/tab_login.module').then(m => m.TabLoginPageModule)},
  { path: 'tab_home', canActivate: [AuthGuard], loadChildren: () => import('./tab_home/tab_home.module').then(m => m.TabHomePageModule)},
  { path: 'tab_fill', canActivate: [AuthGuard], loadChildren: () => import('./tab_fill/tab_fill.module').then(m => m.TabFillPageModule)},
  { path: 'tab_settings', canActivate: [AuthGuard], loadChildren: () => import('./tab_settings/tab_settings.module').then(m => m.TabSettingsPageModule)},
  { path: 'pictures', loadChildren: () => import('./pictures/pictures.module').then( m => m.PicturesPageModule)}

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}