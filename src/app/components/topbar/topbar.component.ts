import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, MethodService } from 'src/app/core/services';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @ViewChild('overlay') overlay!: ElementRef;

  isLogin: boolean = false;
  isHamburgerMenuActive: boolean = false;
  isLanguageChangingDisplay: boolean = false;
  language!: string;

  userInfo: any;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    public authService: AuthService,
    public methodService: MethodService
  ) {}

  ngOnInit(): void {
    this.subscribeAuthService();
    this.handleCloseMenu();
    this.changeLanguage(this.language, 'desktop');

    window.onresize = () => {
      if (window.innerWidth > 1700) {
        this.isHamburgerMenuActive = false;
      }
    };
  }

  subscribeAuthService() {
    this.authService.getIsLogin().subscribe((value: boolean) => {
      this.isLogin = value;
    });

    this.authService.getUserInfo().subscribe((value: any) => {
      this.userInfo = value;
    });

    this.authService.getLanguage().subscribe((value: string) => {
      this.language = value;
    });
  }

  changePage(pageName: string) {
    this.router.navigate([`/${pageName}`]);
    this.isHamburgerMenuActive = false;

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  }

  changeLanguage(value: string, screenType: string) {
    this.authService.language.next(value);
    this.translateService.use(this.language);
    document.documentElement.setAttribute('lang', this.language);

    if (screenType === 'responsive') {
      this.isHamburgerMenuActive = false;
    }
  }

  handleCloseMenu() {
    document.addEventListener('mousedown', (event: any) => {
      const elem = this.overlay.nativeElement;

      if (elem && elem.contains(event.target)) {
        this.isHamburgerMenuActive = false;
      }
    });
  }

  signOut() {
    this.authService.signOut().subscribe(
      (value: any) => {
        this.authService.isLogin.next(false);
        this.authService.userInfo.next(undefined);
        localStorage.clear();
        this.router.navigate([`/sign-in`]);
        this.isHamburgerMenuActive = false;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
