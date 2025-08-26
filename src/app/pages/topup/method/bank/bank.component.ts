import { Component, OnInit } from '@angular/core';
import { MethodService, TopupService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent implements OnInit {
  coinPoint!: number;
  amount!: number;

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
  }

  backToChooseMethodPage() {
    this.location.back();
    this.methodService.isMethodDisplay.next(false);
    this.methodService.method.next('');

    this.topupService.coinPoint.next(0);
    this.topupService.purchaseMethod.next('');
  }

  
  bankPay() {
    this.topupService.isWelcomeDisplay.next(false);
    this.methodService.method.next('process');
    this.methodService.process.next('wait');
    setTimeout(() => {
      this.methodService.process.next('success');
    }, 2000);
  }
}
