import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OurServicesService {
  public ourServices = [
    {
      id: 1,
      service: 'web design',
    },
    {
      id: 2,
      service: 'eCommerce',
    },
    {
      id: 3,
      service: 'word press',
    },
    {
      id: 4,
      service: 'front end',
    },
  ];

  constructor() {}
}
