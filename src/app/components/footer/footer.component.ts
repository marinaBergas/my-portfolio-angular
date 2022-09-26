import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faDribbble,
  faPinterest,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { navigationServiceValues } from '../../models/interfaces';
import { NavigationService } from '../../services/navigation.service';
import { OurServiceService } from '../../services/our-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public socialIcons = [
    {icon:faGithub,href:'https://github.com/marinaBergas'},
    // faInstagram,
    // faTwitter,
    {icon:faLinkedin,href:'https://www.linkedin.com/in/marina-saber-7852bb14a/'},
    // faDribbble,
    // faPinterest,
  ];
  public navigations: navigationServiceValues[] = [];
  public ourServiceList: navigationServiceValues[] = [];
  public contacts = {
    address: 'alex',
    email: 'marina.bergas@gmail.com',
    phone: '+201272747752',
  };
  constructor(
    private navigationService: NavigationService,
    private OurServiceService: OurServiceService
  ) {
    this.navigations = this.navigationService.navigations;
    this.ourServiceList = this.OurServiceService.ourServiceList;
  }

  ngOnInit(): void {
    Aos.init();
  }
}
