import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {
  faBuilding,
  faMapMarker,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { workExperiences } from '../shared/models/project-values';
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
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
