import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MethodService, TopupService } from 'src/app/core/services';

@Component({
  selector: 'app-process-game',
  templateUrl: './process-game.component.html',
  styleUrls: ['./process-game.component.scss'],
})
export class ProcessGameComponent {
  process: string = '';
  coinPoint!: number;
  amount!: number;
  purchaseMethod!: string;

  transactionCreatedDate!: string;
  transactionOrder!: string;

  constructor(
    private methodService: MethodService,
    private topupService: TopupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscribeService();
  }

  subscribeService() {
    this.methodService.getProcess().subscribe((value) => {
      this.process = value;
    });
    this.topupService.getCoinPoint().subscribe((value) => {
      this.coinPoint = value;
    });
    this.topupService.getAmount().subscribe((value) => {
      this.amount = value;
    });
    this.topupService.getPurchaseMethod().subscribe((value) => {
      this.purchaseMethod = value;
    });

    this.topupService.getTransactionCreatedDate().subscribe((value) => {
      this.transactionCreatedDate = value;
    });

    this.topupService.getTransactionOrder().subscribe((value) => {
      this.transactionOrder = value;
    });
  }

  backToTopupPage() {
    this.router.navigate(['topup']);

    this.methodService.process.next('');
    this.methodService.isProcess.next(false);

    this.methodService.method.next('');
    this.methodService.isMethodDisplay.next(false);

    this.topupService.isWelcomeDisplay.next(true);
  }

  backToChooseMethodPage() {
    //this.location.back();
    this.methodService.isMethodDisplay.next(false);
    this.methodService.method.next('');

    this.topupService.coinPoint.next(0);
    this.topupService.purchaseMethod.next('');
  }

  handlePay() {
    this.methodService.process.next('success');
  }

}
