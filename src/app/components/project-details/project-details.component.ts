import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from '../../models/interfaces';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
public projectId:any;
public projectDetails: Project[] = [];

  constructor(private projectService: ProjectService,private route: Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe(params=>{
    this.projectId=params.get('id')
  })
  this.projectService.getProjectList().subscribe((data)=>{
    this.projectDetails= data.filter(p=>p._id==this.projectId);

  });
  }

}
