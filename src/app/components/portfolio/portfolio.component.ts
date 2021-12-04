import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/interfaces';
import * as Aos from 'aos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  public projectList: Project[] = [];


  constructor(private projectService: ProjectService, private route: Router,private http: HttpClient) {

  }

  ngOnInit() {
    Aos.init();
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data;
    });
  }

  onClickHandle(project: any) {
    this.route.navigate(['portfolio', { id: project.id }]);
  }
  allHandle() {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data;
    });  }
  typeReactHandle() {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data.filter((el: Project) => {
        return el.projectType === 'react';
     });;
    }); 
   
  }
  typeAngularHandle() {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data.filter((el: Project) => {
        return el.projectType === 'angular';
     });;
    }); 
  }
  typeLandinaPageHandle() {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data.filter((el: Project) => {
        return el.projectType === 'landingPage';
     });;
    }); 
  
  }
}
