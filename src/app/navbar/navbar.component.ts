import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  Inject,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public navbarCollapsed = true;
  @Output() scroll = new EventEmitter<any>();

  scrollToAbout() {
    this.scroll.emit(true);
  }
  constructor() {}

  ngAfterContentInit() {
    (() => {
      let nav = document.getElementById('navbar') as HTMLElement;
      let logo = document.querySelector('.logo') as HTMLElement;
      window.addEventListener('scroll', () => {
        if (window.scrollY > 35) {
          nav.classList.add('scroll');
          logo.classList.add('logo-dark-color');
        } else {
          nav.classList.remove('scroll');
          logo.classList.remove('logo-dark-color');
        }
      });
      console.log('Listner added');
    })();
  }

  ngOnInit(): void {}
}
