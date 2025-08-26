import { Component, OnInit } from '@angular/core';
import { MethodService, TopupService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-linepay',
  templateUrl: './linepay.component.html',
  styleUrls: ['./linepay.component.scss'],
})
export class LinepayComponent implements OnInit {
  topupType: string = '';
  coinPoint!: number;
  amount!: number;
  linepayStep2: boolean = false;

  constructor(
    private methodService: MethodService,
    private topupService: TopupService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subscribeService();

    if (!this.methodService.isMethodDisplay.getValue()) {
      this.router.navigateByUrl('topup');
    }
  }
  subscribeService() {
    this.topupService.getCoinPoint().subscribe((value) => {
      this.coinPoint = value;
    });
    this.topupService.getAmount().subscribe((value) => {
      this.amount = value;
    });
    this.topupService.getTopupType().subscribe((value) => {
      this.topupType = value;
    });
  }

  changeMethod(linepayStep2: boolean, method: string) {
    this.topupService.isWelcomeDisplay.next(false);
    this.linepayStep2 = linepayStep2;
    this.methodService.method.next(method);
  }

  backToMethodPage() {
    this.methodService.backToMethodPage();
  }

  backToChooseMethodPage() {
    this.location.back();
    this.methodService.isMethodDisplay.next(false);
    this.methodService.method.next('');

    this.topupService.coinPoint.next(0);
    this.topupService.purchaseMethod.next('');
  }

  linePay() {
    if (this.topupType === 'coin') {
      this.topupService.isWelcomeDisplay.next(false);
      this.methodService.method.next('process');
      this.methodService.process.next('wait');
      setTimeout(() => {
        this.methodService.process.next('success');
      }, 2000);
    }

    if (this.topupType === 'goi') {
      this.topupService.isWelcomeDisplay.next(true);
      this.methodService.method.next('process');
      this.methodService.process.next('wait');
    }
  }
}
