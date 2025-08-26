import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/core/services';
import {TicketBody} from '../../../core/models/index';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  ticketDetail!: TicketBody;
  ticketNumber!: string;
  ticketStatus!: string;

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.route.snapshot.paramMap.get('number')) {
      this.router.navigate(['/profile/ticket-categories']);
    }
    this.ticketNumber = this.route.snapshot.paramMap.get('number')!;
    this.getTicketDetail();
  }

  getTicketDetail() {
    this.ticketService.getSingleTicketDetail(this.ticketNumber).subscribe((value) => {
      if (value) {
        this.ticketDetail = value.data;
        this.ticketStatus = this.ticketDetail?.status!.toLowerCase();
      } else {
        this.router.navigate(['/profile/ticket-categories']);
      }
    });
  }
}
