import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/interfaces';
import * as Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  public projectList: any = [];
  public reactProjects: Project[] = [];
  public angularProjects: Project[] = [];
  public landingPageProjects: Project[] = [];

  constructor(private projectService: ProjectService, private route: Router) {}

  ngOnInit(): void {
    Aos.init();
    this.projectList = this.projectService.projectList;
    // this.projectList = this.projectService.fetchProject();
  }
  onClickHandle(project: any) {
    this.route.navigate(['portfolio', { id: project.id }]);
  }
  allHandle() {
    this.projectList = this.projectService.projectList;
  }
  typeReactHandle() {
    this.projectList = this.projectService.projectList;

    this.reactProjects = this.projectList.filter((el: Project) => {
      return el.projectType === 'ProjectType.react';
    });
    this.projectList = this.reactProjects;
  }
  typeAngularHandle() {
    this.projectList = this.projectService.projectList;
    this.angularProjects = this.projectList.filter((el: Project) => {
      return el.projectType === 'angular';
    });
    this.projectList = this.angularProjects;
  }
  typeLandinaPageHandle() {
    this.projectList = this.projectService.projectList;
    this.landingPageProjects = this.projectList.filter((el: Project) => {
      return el.projectType === 'landingPage';
    });
    this.projectList = this.landingPageProjects;
  }
}
