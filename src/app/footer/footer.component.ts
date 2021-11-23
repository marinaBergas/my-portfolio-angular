import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {faFacebook,faInstagram,faTwitter,faLinkedin,faDribbble} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public socialIcons = {
    faFacebookIcon:faFacebook,
    faInstagramIcon:faInstagram,
  }
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
