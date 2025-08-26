import { Component, OnInit } from '@angular/core';
import { mainProductionUrl } from 'src/app/core/services';
@Component({
  selector: 'app-how-to-reset-mygg-password',
  templateUrl: './how-to-reset-mygg-password.component.html',
  styleUrls: ['./how-to-reset-mygg-password.component.scss'],
})
export class HowToResetMyggPasswordComponent implements OnInit {
  productionUrl!: string;

  ngOnInit(): void {
    this.productionUrl = mainProductionUrl;
  }
}
