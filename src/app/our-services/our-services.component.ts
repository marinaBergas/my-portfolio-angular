import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

import {
  faCartPlus,
  faBinoculars,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit {
  faCartPlus = faCartPlus;
  faBinoculars = faBinoculars;
  faDesktop = faDesktop;
  public ourServices = [
    {
      header: 'Development',
      paragraph:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      header: 'Design',
      paragraph:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      header: 'eCommerce',
      paragraph:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
