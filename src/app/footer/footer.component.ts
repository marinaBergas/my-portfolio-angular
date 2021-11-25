import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faDribbble,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { navigationServiceValues } from '../shared/models/interfaces';
import { NavigationService } from '../shared/services/navigation.service';
import { OurServicesService } from '../shared/services/our-services.service';
import { contacts } from '../shared/models/enums';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public socialIcons = [
    faFacebookF,
    faInstagram,
    faTwitter,
    faLinkedin,
    faDribbble,
    faPinterest,
  ];
  public navigations: navigationServiceValues[] = [];
  public ourServices: navigationServiceValues[] = [];
  public contacts = {
    address: contacts.address,
    email: contacts.email,
    phone: contacts.phone,
  };
  constructor(
    private navigationService: NavigationService,
    private OurServicesService: OurServicesService
  ) {
    this.navigations = this.navigationService.navigations;
    this.ourServices = this.OurServicesService.ourServices;
  }

  ngOnInit(): void {
    Aos.init();
  }
}
