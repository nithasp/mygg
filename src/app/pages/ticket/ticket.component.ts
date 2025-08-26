import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn();
  }
}
