import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Nopagefound } from './pages/nopagefound/nopagefound';
import { Dashboard } from './pages/dashboard/dashboard';
import { Breadcrumbs } from './shared/breadcrumbs/breadcrumbs';
import { Sidebar } from './shared/sidebar/sidebar';
import { Header } from './shared/header/header';
import { Progress } from './pages/progress/progress';
import { Grafical } from './pages/grafical/grafical';
import { Pages } from './pages/pages';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Nopagefound,
    Dashboard,
    Breadcrumbs,
    Sidebar,
    Header,
    Progress,
    Grafical,
    Pages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
