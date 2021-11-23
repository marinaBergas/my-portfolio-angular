import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeComponent } from './resume/resume.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    NotFoundComponent,
    OurServicesComponent,
    ResumeComponent,
    ClientsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPageScrollCoreModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
