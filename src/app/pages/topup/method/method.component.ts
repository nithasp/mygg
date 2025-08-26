import { Component, OnInit } from '@angular/core';
import { MethodService } from 'src/app/core/services';
import { Location } from '@angular/common';
@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss'],
})
export class MethodComponent implements OnInit {
  isProcess: boolean = false;
  isMethodDisplay: boolean = false;
  method: string = '';

  containerWidth: string = 'max-w-[1600px]';

  paymentMethods = [
    {
      name: 'visa',
      image: '/assets/images/method/transparent-logo-visa.png',
    },
    {
      name: 'bualuang',
      image: '/assets/images/method/bualuang.png',
    },
    {
      name: 'truemoney',
      image:
        '/assets/images/method/truemoney-wallet-logo-9CCDDD6CB0-seeklogo.com.png',
    },
    {
      name: 'linepay',
      image: '/assets/images/method/linepay_logo_238x78_v4_th-1024x293.png',
    },
  ];
  myggCoins = [
    { points: '50' },
    { points: '90' },
    { points: '150' },
    { points: '300' },
    { points: '500' },
    { points: '1000' },
    { points: '2000' },
    { points: '3000' },
  ];

  constructor(
    private methodService: MethodService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subscribeMethodService();

    // Run when click go back via browser
    this.location.subscribe((event) => {
      this.methodService.method.next('');
      this.methodService.isMethodDisplay.next(false);

      this.methodService.process.next('');
      this.methodService.isProcess.next(false);

      this.containerWidth = 'max-w-[1320px]';
    });

    if (this.methodService.isMethodChanged.getValue() === false) {
      this.methodService.backToMethodPage();
    }
  }

  subscribeMethodService() {
    this.methodService.getIsMethodDisplay().subscribe((value) => {
      this.isMethodDisplay = value;
    });

    this.methodService.getMethod().subscribe((value) => {
      this.method = value;
    });

    this.methodService.getIsProcess().subscribe((value) => {
      this.isProcess = value;
    });
  }

  handleMethod(methodValue: string) {
    this.methodService.isMethodChanged.next(true);
    this.methodService.isMethodDisplay.next(true);
    this.methodService.method.next(methodValue);
  }
}
