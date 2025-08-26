import { Component } from '@angular/core';
import { mainProductionUrl } from 'src/app/core/services';
@Component({
  selector: 'app-issues-with-topping-up',
  templateUrl: './issues-with-topping-up.component.html',
  styleUrls: [
    './issues-with-topping-up.component.scss',
    '../service.component.scss',
  ],
})
export class IssuesWithToppingUpComponent {
  mainUrl: string = mainProductionUrl;
}
