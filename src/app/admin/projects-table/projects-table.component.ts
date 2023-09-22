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
      // this.projectList = Object.values(data);
      for (const key in data) {
          const element = data[key];
          this.projectList=[{...element,_id:key }]
          console.log(element,key);


      }
      // data.map(project=>{
      //   console.log('data',project);

      //   // this.projectList=[...this.projectList,{Object.values(project)}]
      // })
    });
  }

  preview(project: any) {
    this.route.navigate(['/portfolio',  project._id ]);
  }

}
