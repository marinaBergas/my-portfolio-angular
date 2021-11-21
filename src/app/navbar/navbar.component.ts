import { Component, Output, EventEmitter } from '@angular/core';
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

  ngOnInit(): void {}
}
