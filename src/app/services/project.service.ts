import { Injectable } from '@angular/core';
import { ProjectType } from '../models/enums';
import { Project } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private _projectList: Project[] = [
    {
      id: 1,
      logoImg: `../../../assets/calmaLogo.png`,
      projectType: ProjectType.react,
      url: `${'https://marinabergas.github.io/Calma/#/'}`,
      imgscreenshot: `../../../assets/calmascreenshot.png`,
      title: 'Calma Psychological Website',
      description:
        ' A Psychological booking website built with React, Redux,Material-UI, and Firebase',
    },
    {
      id: 2,
      logoImg: ``,
      projectType: ProjectType.angular,
      url: `${' https://marinabergas.github.io/shipment-service/'}`,
      imgscreenshot: `../../../assets/services-screenshots.png`,
      title: 'Shipment-service',
      description:
        'Shipment-services website using react hooks,props ,i18 translate,rest api use react axios,you can check 7234258,6636255,9442984 and other',
    },
    {
      id: 3,
      logoImg: ``,
      projectType: ProjectType.react,
      url: `${'https://marinabergas.github.io/TodoList/'}`,
      imgscreenshot: `../../../assets/TodoList-screenshot.png`,
      title: 'Todo website app',
      description:
        'Todo website app using react fake api deploy with github use hooks ,props',
    },
    {
      id: 4,
      logoImg: ``,
      projectType: ProjectType.react,
      url: `${'https://marinabergas.github.io/post-leave-request/#/'}`,
      imgscreenshot: `../../../assets/post-leave-request.png`,
      title: 'Post Leave Request',
      description: 'post leave request website using,react,hooks,redux',
    },
    {
      id: 5,
      logoImg: ``,
      projectType: ProjectType.landingPage,
      url: `${'https://marinabergas.github.io/map-feature/#/'}`,
      imgscreenshot: `../../../assets/school-mapscreenshot.png`,
      title: 'School map ',
      description:
        'react website  using leafletmap library carousel with javascript',
    },
  ];
  public get projectList(): Project[] {
    return this._projectList;
  }
  constructor() {}
}
