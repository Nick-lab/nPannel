import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './access-gaurd.service';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'admin'
},
{
  path: 'admin',
  loadChildren: './home/home.module#HomeModule',
  data: { requiresAdmin: true },
  canActivate: [AccessGuard]
},
{
  path: 'admin/signin',
  loadChildren: './signin/signin.module#SigninModule'
},
{
  path: 'admin/signout',
  loadChildren: './signout/signout.module#SignoutModule'
},
{
  path: '**',
  redirectTo: 'admin'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
