import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Progress } from './pages/progress/progress';
import { Grafical } from './pages/grafical/grafical';
import { Nopagefound } from './pages/nopagefound/nopagefound';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard},
  { path: 'login', component: Login},
  { path: 'register', component: Register},
  { path: 'progress', component: Progress},
  { path: 'grafical', component: Grafical},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: Nopagefound},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
