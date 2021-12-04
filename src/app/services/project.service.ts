import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProjectType } from '../models/enums';
import { Project } from '../models/interfaces';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // private _projectList: Project[] = [
  //   {
  //     id: 1,
  //     logoImg: `assets/calmaLogo.png`,
  //     projectType: ProjectType.react,
  //     url: `${'https://marinabergas.github.io/Calma/#/'}`,
  //     imgscreenshot: `assets/calmascreenshot.png`,
  //     title: 'Calma Psychological Website',
  //     description:
  //       ' A Psychological booking website built with React, Redux,Material-UI, and Firebase',
  //   },
  //   {
  //     id: 2,
  //     logoImg: ``,
  //     projectType: ProjectType.angular,
  //     url: `${' https://marinabergas.github.io/shipment-service/'}`,
  //     imgscreenshot: `assets/services-screenshots.png`,
  //     title: 'Shipment-service',
  //     description:
  //       'Shipment-services website using react hooks,props ,i18 translate,rest api use react axios,you can check 7234258,6636255,9442984 and other',
  //   },
  //   {
  //     id: 3,
  //     logoImg: ``,
  //     projectType: ProjectType.react,
  //     url: `${'https://marinabergas.github.io/TodoList/'}`,
  //     imgscreenshot: `assets/TodoList-screenshot.png`,
  //     title: 'Todo website app',
  //     description:
  //       'Todo website app using react fake api deploy with github use hooks ,props',
  //   },
  //   {
  //     id: 4,
  //     logoImg: ``,
  //     projectType: ProjectType.react,
  //     url: `${'https://marinabergas.github.io/post-leave-request/#/'}`,
  //     imgscreenshot: `assets/post-leave-request.png`,
  //     title: 'Post Leave Request',
  //     description: 'post leave request website using,react,hooks,redux',
  //   },
  //   {
  //     id: 5,
  //     logoImg: ``,
  //     projectType: ProjectType.landingPage,
  //     url: `${'https://marinabergas.github.io/map-feature/#/'}`,
  //     imgscreenshot: `assets/school-mapscreenshot.png`,
  //     title: 'School map ',
  //     description:
  //       'react website  using leafletmap library carousel with javascript',
  //   },
  // ];

  public test = [];
  public urlListProject = 'https://oposerver.herokuapp.com/project/list';
  public urlAddProject = 'https://oposerver.herokuapp.com/project/add';
  errorData: {} = {};

  constructor(private http: HttpClient) {

  }
getProjectList(): Observable<Project[]> {
  return this.http.get<Project[]>(this.urlListProject)
}
 
  addProject(projectsTitle: string, projectDescription: string,projectImage:string,projectType:string,logoImg:string,projectUrl:string) {
    return this.http.post<any>(`${this.urlAddProject}`, {
      title: projectsTitle,
      description: projectDescription,
      imgscreenshot:projectImage,
      projectType:projectType,
      logoImg:logoImg,
      projectUrl:projectUrl
    }).pipe(catchError(this._handleError))
  }
  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}` + `bode was : ${error.error}`
      );
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.',
    };
    return throwError(this.errorData);
  }
}
