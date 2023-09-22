import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/interfaces';
import * as Aos from 'aos';
import { HttpClient } from '@angular/common/http';
import { ProjectType } from 'src/app/models/enums';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  // public projectList: Project[] = [];
  // public projectList: Project[] = [
  //   {
  //     _id: '1',
  //     logoImg: `assets/calmaLogo.png`,
  //     projectType: ProjectType.react,
  //     url: `${'https://marinabergas.github.io/Calma/#/'}`,
  //     imgscreenshot: `assets/calmascreenshot.png`,
  //     title: 'Calma Psychological Website',
  //     description:
  //       ' A Psychological booking website built with React, Redux,Material-UI, and Firebase',
  //   },
  //   {
  //     _id:' 2',
  //     logoImg: ``,
  //     projectType: ProjectType.angular,
  //     url: `${' https://marinabergas.github.io/shipment-service/'}`,
  //     imgscreenshot: `assets/services-screenshots.png`,
  //     title: 'Shipment-service',
  //     description:
  //       'Shipment-services website using react hooks,props ,i18 translate,rest api use react axios,you can check 7234258,6636255,9442984 and other',
  //   },
  //   {
  //     _id: '3',
  //     logoImg: ``,
  //     projectType: ProjectType.react,
  //     url: `${'https://marinabergas.github.io/TodoList/'}`,
  //     imgscreenshot: `assets/TodoList-screenshot.png`,
  //     title: 'Todo website app',
  //     description:
  //       'Todo website app using react fake api deploy with github use hooks ,props',
  //   },
  //   {
  //     _id: '4',
  //     logoImg: ``,
  //     projectType: ProjectType.react,
  //     url: `${'https://marinabergas.github.io/post-leave-request/#/'}`,
  //     imgscreenshot: `assets/post-leave-request.png`,
  //     title: 'Post Leave Request',
  //     description: 'post leave request website using,react,hooks,redux',
  //   },
  //   {
  //     _id: '5',
  //     logoImg: ``,
  //     projectType: ProjectType.landingPage,
  //     url: `${'https://marinabergas.github.io/map-feature/#/'}`,
  //     imgscreenshot: `assets/school-mapscreenshot.png`,
  //     title: 'School map ',
  //     description:
  //       'react website  using leafletmap library carousel with javascript',
  //   },
  // ];
  public projectList: Project[] = [];

  filteredProjectList: Project[]=[];
  constructor(private projectService: ProjectService, private route: Router,private http: HttpClient) {

  }

  ngOnInit() {
    Aos.init();
    // this.projectService.getProjectList().subscribe((data)=>{
    //   this.projectList = data;
    // });
    this.getProjects();
    this.filteredProjectList=this.projectList;

  }

  getProjects(){
    this.projectService.getProjectList().subscribe((data)=>{
      // this.projectList = Object.values(data);
      for (const key in data) {
          const element = data[key];
          this.projectList=[{...element,_id:key }]
          console.log(this.projectList);


      }
      // data.map(project=>{
      //   console.log('data',project);

      //   // this.projectList=[...this.projectList,{Object.values(project)}]
      // })
    });
  }
  // onClickHandle(project: any) {
  //   this.route.navigate(['/portfolio',  project._id ]);
  // }
  // allHandle() {
  //   // this.projectService.getProjectList().subscribe((data)=>{
  //   //   this.projectList = data;
  //   // });
  //   this.filteredProjectList=this.projectList;
  // }
  // typeReactHandle() {
  //   // this.projectService.getProjectList().subscribe((data)=>{
  //   //   this.projectList = data.filter((el: Project) => {
  //   //     return el.projectType === 'react';
  //   //  });
  //   // });
  //     this.filteredProjectList = this.projectList.filter((el: Project) => {
  //       return el.projectType === 'react';
  //    });


  // }
  // typeAngularHandle() {
  //   // this.projectService.getProjectList().subscribe((data)=>{
  //   //   this.projectList = data.filter((el: Project) => {
  //   //     return el.projectType === 'angular';
  //   //  });
  //   // });
  //     this.filteredProjectList = this.projectList.filter((el: Project) => {
  //       return el.projectType === 'angular';
  //    });

  // }
  // typeLandinaPageHandle() {
  //   // this.projectService.getProjectList().subscribe((data)=>{
  //   //   this.projectList = data.filter((el: Project) => {
  //   //     return el.projectType === 'landingPage';
  //   //  });;
  //   // });
  //     this.filteredProjectList = this.projectList.filter((el: Project) => {
  //       return el.projectType === 'landingPage';
  //    });

  // }

  ///////////////////////////////////
    typeHandle(type: string) {
      if(type==='all'){
          this.filteredProjectList=this.projectList;
      }else{
        this.filteredProjectList = this.projectList.filter((el: Project) => {
          return el.projectType === type;
       });
      }

    }
}
