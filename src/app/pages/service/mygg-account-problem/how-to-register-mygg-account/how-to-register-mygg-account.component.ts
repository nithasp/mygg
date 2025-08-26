import { Component, OnInit } from '@angular/core';
import { mainProductionUrl } from 'src/app/core/services';
@Component({
  selector: 'app-how-to-register-mygg-account',
  templateUrl: './how-to-register-mygg-account.component.html',
  styleUrls: ['./how-to-register-mygg-account.component.scss'],
})
export class HowToRegisterMyggAccountComponent implements OnInit {
  productionUrl!: string;

  ngOnInit(): void {
    this.productionUrl = mainProductionUrl;
  }
}
