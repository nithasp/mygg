import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-slashy-ninja-topup',
  templateUrl: './slashy-ninja-topup.component.html',
  styleUrls: [
    './slashy-ninja-topup.component.scss',
    '../../topup.component.scss',
  ],
})
export class SlashyNinjaTopupComponent implements OnInit {
  language!: string;

  purchaseMethodValue: string = '';
  coinValue: string = '';

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
    {
      name: 'MYGG Coins',
      name_th: 'เหรียญ MYGG',
      image: 'assets/images/topup/purchase-method/mygg-coins.png',
    },
  ];

  diamond: any = [
    { currency: 'THB', currency_th: 'บาท',  value: 100, diamond_value: 250 },
    { currency: 'THB', currency_th: 'บาท',  value: 250, diamond_value: 625 },
    { currency: 'THB', currency_th: 'บาท',  value: 500, diamond_value: 1250 },
    { currency: 'THB', currency_th: 'บาท',  value: 800, diamond_value: 2000 },
    { currency: 'THB', currency_th: 'บาท',  value: 1000, diamond_value: 2500 },
    { currency: 'THB', currency_th: 'บาท',  value: 2500, diamond_value: 6250 },
    { currency: 'THB', currency_th: 'บาท',  value: 5000, diamond_value: 12500 },
    { currency: 'THB', currency_th: 'บาท',  value: 10000, diamond_value: 25000 },
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

    const diamondVisualPickers = document.querySelectorAll(
      '.diamond.visual-picker'
    );
    diamondVisualPickers.forEach((diamondVisualPicker) => {
      diamondVisualPicker.addEventListener('click', () => {
        diamondVisualPickers.forEach((AllDiamondVisualPickers) => {
          AllDiamondVisualPickers.classList.remove('active');
        });
        diamondVisualPicker.classList.add('active');
        this.coinValue = 'method';
      });
    });
  }
}
