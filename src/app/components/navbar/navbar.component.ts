import {
  Component,
 
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public navbarCollapsed = true;
  // @Output() scroll = new EventEmitter<any>();

  // scrollToAbout() {
  //   this.scroll.emit(true);
  // }
  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
  }
  public scrollNavbar: boolean = false;
  public activeLink: string = '';
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
  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = 'home';
  }
  toServices() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = 'services';
  }
  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = 'about';
  }
  toPortfolio() {
    this.activeLink = 'pottfolio';
    document
      .getElementById('pottfolio')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  toResume() {
    this.activeLink = 'resume';
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  }
  toBlog() {
    this.activeLink = 'blog';
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    this.activeLink = 'contact';
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
  toSignIn() {
    this.activeLink = 'signIn';
    this.router.navigate(['sign-in']);
  }
  ngOnInit(): void {}
}
