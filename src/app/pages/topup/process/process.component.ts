import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MethodService, TopupService } from 'src/app/core/services';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnInit {
  process: string = '';
  coinPoint!: number;
  amount!: number;
  purchaseMethod!: string;

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
  }

  backToTopupPage() {
    this.router.navigate(['topup']);

    this.methodService.process.next('');
    this.methodService.isProcess.next(false);

    this.methodService.method.next('');
    this.methodService.isMethodDisplay.next(false);

    this.topupService.coinPoint.next(0);
    this.topupService.purchaseMethod.next('');

    this.topupService.isWelcomeDisplay.next(true);
  }
}
