import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/core/services';
@Component({
  selector: 'app-submit-success',
  templateUrl: './submit-success.component.html',
  styleUrls: ['./submit-success.component.scss', '../ticket.component.scss'],
})
export class SubmitSuccessComponent implements OnInit {
  ticketId!: string;
  isTicketSubmitSuccess: boolean = false;

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    this.subscribeServices();

    // if (!this.isTicketSubmitSuccess) {
    //   this.router.navigate(['/ticket']);
    // }
  }
  subscribeServices() {
    this.ticketService.getIsTicketSubmitSuccess().subscribe((value) => {
      this.isTicketSubmitSuccess = value;
    });
    this.ticketService.getTicketId().subscribe((value) => {
      this.ticketId = value;
    });
  }

  backToSite() {
    this.ticketService.isTicketSubmitSuccess.next(false);
    this.router.navigate(['/ticket']);
  }
}
