import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'addnew', loadChildren: () => import('./pages/addnew/addnew.module').then(m => m.AddnewModule) },
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
  { path: 'create', loadChildren: () => import('./pages/create/create.module').then(m => m.CreateModule) },
  { path: 'home1', loadChildren: () => import('./pages/home1/home1.module').then(m => m.Home1Module) },
  { path: 'home2', loadChildren: () => import('./pages/home2/home2.module').then(m => m.Home2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
