import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../shared/services/projects.service';
import { ProjectValues } from '../shared/models/interfaces';
import * as Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  public projects: ProjectValues[] = [];
  public reactProjects: ProjectValues[] = [];
  public angularProjects: ProjectValues[] = [];
  public landingPageProjects: ProjectValues[] = [];

  constructor(
    private projectsService: ProjectsService,
    private route: Router
  ) {}

  ngOnInit(): void {
    Aos.init();
    this.projects = this.projectsService.projects;
  }
  onClickHandle(project: any) {
    this.route.navigate(['portfolio', { id: project.id }]);
  }
  allHandle() {
    this.projects = this.projectsService.projects;
  }
  typeReactHandle() {
    this.projects = this.projectsService.projects;

    this.reactProjects = this.projects.filter((el: ProjectValues) => {
      return el.filtration === 'react';
    });
    this.projects = this.reactProjects;
  }
  typeAngularHandle() {
    this.projects = this.projectsService.projects;
    this.angularProjects = this.projects.filter((el: ProjectValues) => {
      return el.filtration === 'angular';
    });
    this.projects = this.angularProjects;
  }
  typeLandinaPageHandle() {
    this.projects = this.projectsService.projects;
    this.landingPageProjects = this.projects.filter((el: ProjectValues) => {
      return el.filtration === 'landingPage';
    });
    this.projects = this.landingPageProjects;
  }
}
