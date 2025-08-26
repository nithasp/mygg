import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.scss'],
})
export class CookiePopupComponent implements OnInit {
  isCookiePopupDisplay: boolean = true;

  constructor(private cookie: CookieService) {}

  ngOnInit(): void {
    this.checkCookie();
  }

  allow() {
    this.cookie.set('data', 'mygg', { expires: 1 });
    this.isCookiePopupDisplay = false;
  }

  decline() {
    this.isCookiePopupDisplay = false;
  }

  checkCookie() {
    const isCookieActive = this.cookie.check('data');

    if (isCookieActive) {
      this.isCookiePopupDisplay = false;
    } else {
      this.isCookiePopupDisplay = true;
    }
  }
}
