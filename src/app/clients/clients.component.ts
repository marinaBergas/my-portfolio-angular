import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  public clients = [
    { img: '../../assets/client1.webp' },
    { img: '../../assets/client2.webp' },
    { img: '../../assets/client3.webp' },
    { img: '../../assets/client4.webp' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
