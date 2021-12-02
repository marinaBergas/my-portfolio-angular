import { NgModule } from '@angular/core';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [AdminComponent,AdminDashboardComponent,ManageProjectsComponent, AdminNavbarComponent],
  imports: [
    AdminRoutingModule,
    NgbModule,
    NgbModalModule,
   CommonModule,
   FontAwesomeModule
  ]
})
export class AdminModule { }
