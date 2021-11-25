import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {
  faBuilding,
  faMapMarker,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { educationValues, workExperiences } from '../shared/models/interfaces';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  public icons = {
    faBuildingIcon: faBuilding,
    faMapMarkerIcon: faMapMarker,
    faCalendarIcon: faCalendar,
  };

  public experiences: workExperiences[] = [
    {
      prevExperience: 'Front end developer',
      workPlace: 'orange labs',
      location: 'cairo',
      period: 'full time',
      periodCalenderStart: 'November2021',
      periodCalenderEnd: 'present',
    },
  ];
  public eductions: educationValues[] = [
    {
      education: 'Diploma Front End Development Track ',
      educationPlace: 'Information Technology Institute',
      educationStart: 'JANUARY2021',
      educationEnd: 'APRIL 2021',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
