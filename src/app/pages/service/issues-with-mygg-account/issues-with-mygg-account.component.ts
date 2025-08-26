import { Component } from '@angular/core';
import { mainProductionUrl } from 'src/app/core/services';
@Component({
  selector: 'app-issues-with-mygg-account',
  templateUrl: './issues-with-mygg-account.component.html',
  styleUrls: [
    './issues-with-mygg-account.component.scss',
    '../service.component.scss',
  ],
})
export class IssuesWithMyggAccountComponent {
  mainUrl: string = mainProductionUrl;
}
