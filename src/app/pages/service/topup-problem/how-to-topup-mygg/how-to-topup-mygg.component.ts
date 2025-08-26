import { Component, OnInit } from '@angular/core';
import { mainProductionUrl } from 'src/app/core/services';
@Component({
  selector: 'app-how-to-topup-mygg',
  templateUrl: './how-to-topup-mygg.component.html',
  styleUrls: ['./how-to-topup-mygg.component.scss'],
})
export class HowToTopupMyggComponent implements OnInit {
  productionUrl!: string;

  ngOnInit(): void {
    this.productionUrl = mainProductionUrl;
  }
}
