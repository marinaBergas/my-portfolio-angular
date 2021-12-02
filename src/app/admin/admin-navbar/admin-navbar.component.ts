import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  public navbarCollapsed = true;
  public scrollNavbar: boolean = false;
  public activeLink: string = '';
  constructor() { 

  }

  ngOnInit(): void {
  }
  
  ngAfterContentInit() {
    (() => {
      let nav = document.getElementById('navbar') as HTMLElement;
      let logo = document.querySelector('.logo') as HTMLElement;
      window.addEventListener('scroll', () => {
        if (window.scrollY > 35) {
          this.scrollNavbar = true;
          nav.classList.add('scroll');
          logo.classList.add('logo-dark-color');
        } else {
          this.scrollNavbar = false;
          nav.classList.remove('scroll');
          logo.classList.remove('logo-dark-color');
        }
      });
      console.log('Listner added');
    })();
  }

}
