import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';



@NgModule({
  declarations: [AdminComponent,AdminDashboardComponent,ManageProjectsComponent, AdminNavbarComponent],
  imports: [
    AdminRoutingModule,
    NgbModule,
    NgbModalModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ]
})
export class AdminModule { }
