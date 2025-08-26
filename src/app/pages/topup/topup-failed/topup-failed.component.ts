import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-topup-failed',
  templateUrl: './topup-failed.component.html',
  styleUrls: ['./topup-failed.component.scss'],
})
export class TopupFailedComponent implements OnInit {
  language!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscribeService();
  }

  subscribeService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
  }
}
