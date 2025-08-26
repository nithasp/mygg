import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';

import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss'],
})
export class TopupComponent implements OnInit {

  language!: string;

  topupBannerConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: -1,
    speed: 800,
    navigation: false,
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class="hexagon dot swiper-pagination-bullet"></div>`;
      },
      el: '.topup-pagination',
    },
    scrollbar: { draggable: true },
  };

  topupBanner: any = [
    { image: '/assets/images/topup/topup-banner.jpg', text: 'TOP UP BANNER' },
    { image: '/assets/images/topup/topup-banner.jpg', text: 'TOP UP BANNER' },
    { image: '/assets/images/topup/topup-banner.jpg', text: 'TOP UP BANNER' },
    { image: '/assets/images/topup/topup-banner.jpg', text: 'TOP UP BANNER' },
  ];

  method: any = [
    {
      name: 'MYGG Coins TOP UP',
      name_th: 'เติมเหรียญ MYGG',
      image: 'assets/images/topup/coin.png',
      url: '/topup/coin',
    },
    {
      name: 'Slashy Ninja',
      name_th: 'Slashy Ninja',
      image: 'assets/images/topup/logo animal ninija 1.png',
      url: '/topup/game/slashy-ninja',
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn();
    this.subscribeService();
  }

  subscribeService() {
    this.authService.getLanguage().subscribe(value => {
      this.language = value;
    })
  }
}
