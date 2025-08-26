import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('responsiveMenu') responsiveMenu!: ElementRef;

  currentItem: any;
  optionItems: any = [
    {
      icon: '/assets/images/profile/Group.png',
      url: '/profile/edit',
      name: 'Profile',
      name_th: 'Profile',
    },
    {
      icon: '/assets/images/profile/Group (1).png',
      url: '/profile/inbox',
      name: 'Inbox',
      name_th: 'กล่องจดหมาย',
    },
    {
      icon: '/assets/images/profile/Group 111.png',
      url: '/topup',
      name: 'Top up',
      name_th: 'เติมเงิน',
    },
    {
      icon: '/assets/images/profile/Group (2).png',
      url: '/profile/redemption',
      name: 'Redemption',
      name_th: 'กรอกรหัสแลกรับ',
    },
    {
      icon: '/assets/images/profile/Group (3).png',
      url: '/profile/purchase-history',
      name: 'Purchase History',
      name_th: 'ประวัติการสั่งซื้อ',
    },
    {
      icon: '/assets/images/profile/Group 932.png',
      url: '/service',
      name: 'Support',
      name_th: 'ฝ่ายช่วยเหลือ',
    },
    {
      icon: '/assets/images/profile/Group (4).png',
      url: '/profile/ticket-categories',
      name: 'Ticket Categories',
      name_th: 'หมวดหมู่',
    },
  ];

  isOptionsContainerActive: boolean = false;
  optionValue!: string;
  isOptionDirty: boolean = false;

  currentPath = this.location.path();

  lang: string = 'en';
  get language(): string {
    return this.lang;
  }
  set language(value: string) {
    this.lang = value;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subscribeInboxService();
    this.authService.isLoggedIn();
    this.handleCloseSearchInit();
    this.changeRouteUiActive();
  }

  subscribeInboxService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
  }
  handleSelect(item: any) {
    if (!this.isOptionDirty) {
      this.isOptionDirty = true;
    }

    this.currentItem = item;
    this.isOptionsContainerActive = false;

    this.router.navigate([`${item.url}`]);

    setTimeout(() => {
      this.optionValue = item.name;
    }, 400);
  }

  handleCloseSearchInit() {
    document.addEventListener('mousedown', (event: any) => {
      const elem = this.responsiveMenu.nativeElement;
      if (elem && !elem.contains(event.target)) {
        this.isOptionsContainerActive = false;
      }
    });
  }

  changeRouteUiActive() {
    this.router.events.subscribe((event) => {
      this.currentPath = this.location.path();

      if (this.currentPath.includes('profile')) {
        // Desktop
        const services = document.querySelectorAll(
          '.desktop-menu .sidebar-link'
        );
        services.forEach((AllNavButton) => {
          AllNavButton.classList.remove('active');
          if (AllNavButton.getAttribute('routerLink') === this.currentPath) {
            AllNavButton.classList.add('active');
          }

          if (this.currentPath.includes('inbox')) {
            if (AllNavButton.getAttribute('routerLink')?.includes('inbox')) {
              AllNavButton.classList.add('active');
            }
          }
        });

        // Responsive
        const pathMatched = this.optionItems.find(
          (x: any) => x.url === this.currentPath
        );
        this.currentItem = pathMatched;
        this.optionValue = pathMatched?.name;

        if (this.currentPath.includes('inbox')) {
          const pathMatched = this.optionItems.find(
            (x: any) => x.url === '/profile/inbox'
          );
          this.currentItem = pathMatched;
          this.optionValue = pathMatched?.name;
        }
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
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
