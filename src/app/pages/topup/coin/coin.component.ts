import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss', '../topup.component.scss'],
})
export class CoinComponent implements OnInit {
  language!: string;

  purchaseMethodValue: string = '';
  coinValue: string = '';

  hasPromotion: boolean = false;

  purchaseMethod: any = [
    {
      name: 'Credit/Debit card',
      name_th: 'บัตรเครดิต',
      image: 'assets/images/topup/purchase-method/card.png',
    },
    {
      name: 'Prompt pay',
      name_th: 'พร้อมเพย์ pay',
      image: 'assets/images/topup/purchase-method/promtpay.png',
    },
    {
      name: 'True Money',
      name_th: 'True Money',
      image: 'assets/images/topup/purchase-method/true.png',
    },
    {
      name: 'Rabbit Line Pay',
      name_th: 'Line Pay',
      image: 'assets/images/topup/purchase-method/line.png',
    },
    {
      name: 'WeChat Pay',
      name_th: 'WeChat Pay',
      image: 'assets/images/topup/purchase-method/wechat.png',
    },
    {
      name: 'Alipay',
      name_th: 'Alipay',
      image: 'assets/images/topup/purchase-method/alipay.png',
    },
    {
      name: 'Shopee Pay',
      name_th: 'Shopee Pay',
      image: 'assets/images/topup/purchase-method/shopee.png',
    },
  ];

  myggCoins: any = [
    { currency: 'THB', currency_th: 'บาท', value: 100, coin_value: 130 },
    { currency: 'THB', currency_th: 'บาท', value: 250, coin_value: 325 },
    { currency: 'THB', currency_th: 'บาท', value: 500, coin_value: 650 },
    { currency: 'THB', currency_th: 'บาท', value: 800, coin_value: 1040 },
    { currency: 'THB', currency_th: 'บาท', value: 1000, coin_value: 1300 },
    { currency: 'THB', currency_th: 'บาท', value: 2500, coin_value: 3250 },
    { currency: 'THB', currency_th: 'บาท', value: 5000, coin_value: 6500 },
    { currency: 'THB', currency_th: 'บาท', value: 10000, coin_value: 13000 },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.methodActive();
    this.subscribeService();
  }

  subscribeService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
  }

  methodActive() {
    const methodVisualPickers = document.querySelectorAll(
      '.method.visual-picker'
    );
    methodVisualPickers.forEach((methodVisualPicker) => {
      methodVisualPicker.addEventListener('click', () => {
        methodVisualPickers.forEach((AllMethodVisualPickers) => {
          AllMethodVisualPickers.classList.remove('active');
        });
        methodVisualPicker.classList.add('active');
        this.purchaseMethodValue = 'method';
      });
    });

    const coinVisualPickers = document.querySelectorAll('.coin.visual-picker');
    coinVisualPickers.forEach((coinVisualPicker) => {
      coinVisualPicker.addEventListener('click', () => {
        coinVisualPickers.forEach((AllCoinVisualPickers) => {
          AllCoinVisualPickers.classList.remove('active');
        });
        coinVisualPicker.classList.add('active');
        this.coinValue = 'method';
      });
    });
  }
}
