
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from "./admin/admin.component";
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';

const routes: Routes = [
  { path: '', component: AdminComponent ,canActivate:[AuthGuard],children:[
    {path:'dashboard',component:AdminDashboardComponent}      ,
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
