import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-topup-success',
  templateUrl: './topup-success.component.html',
  styleUrls: ['./topup-success.component.scss'],
})

export class TopupSuccessComponent implements OnInit {
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
