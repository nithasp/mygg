import { Component, OnInit } from '@angular/core';
import { MethodService, TopupService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coin-to-game',
  templateUrl: './coin-to-game.component.html',
  styleUrls: ['./coin-to-game.component.scss'],
})
export class CoinToGameComponent implements OnInit {
  constructor(
    private methodService: MethodService,
    private topupService: TopupService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (!this.methodService.isMethodDisplay.getValue()) {
      this.router.navigateByUrl('topup');
    }
    this.topupService.isWelcomeDisplay.next(false);
  }
  backToChooseMethodPage() {
    this.location.back();
    this.methodService.isMethodDisplay.next(false);
    this.methodService.method.next('');
  }
}
