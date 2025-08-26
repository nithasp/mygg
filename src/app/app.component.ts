import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

declare const gtag: Function;

@Component({
  selector: 'mygg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mygg';
  currentPath = this.location.path();

  constructor(public router: Router, private location: Location) {
    this.whatToDoWhenChangePage();
  }

  ngOnInit(): void {}

  whatToDoWhenChangePage() {
    this.router.events.subscribe((event) => {
      // Add Google Analytics for each page
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-P9NBFT2HG2', {
          page_path: event.urlAfterRedirects,
        });
      }

      // Add active class for button that match with url
      this.currentPath = this.location.path();

      const items = document.querySelectorAll('#topbar .item');
      items.forEach((AllNavButton) => {
        AllNavButton.classList.remove('active');
        if (AllNavButton.getAttribute('current-path') === this.currentPath) {
          AllNavButton.classList.add('active');
        }
      });

      const services = document.querySelectorAll('#service .service');
      services.forEach((AllNavButton) => {
        AllNavButton.classList.remove('active');
        if (AllNavButton.getAttribute('routerLink') === this.currentPath) {
          AllNavButton.classList.add('active');
        }
      });
    });
  }
}
