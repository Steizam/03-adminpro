import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { Progress } from './progress/progress';
import { Grafical } from './grafical/grafical';
import { Pages } from './pages';
import { SharedModule } from '../shared/shared-module';
import { AppRoutingModule } from '../app-routing-module';



@NgModule({
  declarations: [
    Dashboard,
    Progress,
    Grafical,
    Pages
  ],
  exports: [
    Dashboard,
    Progress,
    Grafical,
    Pages
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
