import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/interfaces';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {
  public projectList: Project[] = [];
  constructor(private projectService:ProjectService, private route: Router) { }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data;
    });
  }
  preview(project: any) {
    this.route.navigate(['/portfolio',  project._id ]);
  }

}
