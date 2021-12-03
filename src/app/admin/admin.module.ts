import { NgModule } from '@angular/core';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent,AdminDashboardComponent,ManageProjectsComponent, AdminNavbarComponent, AddNewProjectComponent],
  imports: [
    AdminRoutingModule,
    NgbModule,
    NgbModalModule,
   CommonModule,
   FontAwesomeModule,
   ReactiveFormsModule,

  ]
})
export class AdminModule { }
