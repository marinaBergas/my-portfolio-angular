import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio/:id', component: ProjectDetailsComponent },
  { path: 'sign-in', 
  loadChildren: () =>
  import('./login/login.module').then((m) => m.LoginModule),
 },
  { path: 'admin', 
  loadChildren: () =>
  import('./admin/admin.module').then((m) => m.AdminModule),
 },

  { path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
