import { Injectable } from '@angular/core';
import { ProjectType } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  public projects = [
    {
      id: 1,
      logoimg: `../../assets/calmaLogo.png`,
      filtration: ProjectType.react,
      url: `${'https://marinabergas.github.io/Calma/#/'}`,
      imgscreenshot: `../../assets/calmascreenshot.png`,
      header: 'Calma Psychological Website',
      paragraph:
        ' A Psychological booking website built with React, Redux,Material-UI, and Firebase',
    },
    {
      id: 2,
      logoimg: ``,
      filtration: ProjectType.angular,
      url: `${' https://marinabergas.github.io/shipment-service/'}`,
      imgscreenshot: `../../assets/services-screenshots.png`,
      header: 'Shipment-service',
      paragraph:
        'Shipment-services website using react hooks,props ,i18 translate,rest api use react axios,you can check 7234258,6636255,9442984 and other',
    },
    {
      id: 3,
      logoimg: ``,
      filtration: ProjectType.react,
      url: `${'https://marinabergas.github.io/TodoList/'}`,
      imgscreenshot: `../../assets/TodoList-screenshot.png`,
      header: 'Todo website app',
      paragraph:
        'Todo website app using react fake api deploy with github use hooks ,props',
    },
    {
      id: 4,
      logoimg: ``,
      filtration: ProjectType.react,
      url: `${'https://marinabergas.github.io/post-leave-request/#/'}`,
      imgscreenshot: `../../assets/post-leave-request.png`,
      header: 'Post Leave Request',
      paragraph: 'post leave request website using,react,hooks,redux',
    },
    {
      id: 5,
      logoimg: ``,
      filtration: ProjectType.landingPage,
      url: `${'https://marinabergas.github.io/map-feature/#/'}`,
      imgscreenshot: `../../assets/school-mapscreenshot.png`,
      header: 'School map ',
      paragraph:
        'react website  using leafletmap library carousel with javascript',
    },
  ];

  constructor() {}
}
