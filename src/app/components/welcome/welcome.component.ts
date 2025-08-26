import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  @Input() maxWidthValue: string = '100%';

  userInfo: any;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.subscribeAuthService()
  }

  subscribeAuthService() {
    this.authService.getUserInfo().subscribe((value: any) => {
      this.userInfo = value;
    })
  }
}
