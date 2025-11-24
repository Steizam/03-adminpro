import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing-module';
import { PagesModule } from './pages/pages-module';
import { AuthModule } from './auth/auth-module';

import { App } from './app';
import { Nopagefound } from './nopagefound/nopagefound';



@NgModule({
  declarations: [
    App,
    Nopagefound,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
