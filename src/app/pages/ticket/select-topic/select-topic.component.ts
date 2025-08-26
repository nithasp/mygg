import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../../core/services/ticket.service';

@Component({
  selector: 'app-select-topitopicsc',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.scss', '../ticket.component.scss'],
})
export class SelectTopicComponent implements OnInit {
  currentTopic!: string;

  topics: any[] = [
    {
      name: 'Recovery my account',
      id: 'recovery_my_account',
    },
    {
      name: 'In-game question',
      id: 'in_game_question',
    },
    {
      name: 'Technical issue : Installation or bug report',
      id: 'technical_issue',
    },
    {
      name: 'Report player',
      id: 'report_player',
    },
    {
      name: 'Payment',
      id: 'payment',
    },
    {
      name: 'General question',
      id: 'general_question',
    },
  ];
  constructor(private router: Router, private ticketService: TicketService) {}

  ngOnInit(): void {}

  handleTopic(id: string) {
    this.currentTopic = id;
  }

  changePage() {
    if(this.currentTopic === "recovery_my_account") {
      this.router.navigate(['ticket/recovery-my-account'])
    }
    if(this.currentTopic === "in_game_question") {
      this.router.navigate(['ticket/in-game-question'])
    }
    if(this.currentTopic === "technical_issue") {
      this.router.navigate(['ticket/technical-issue'])
    }
    if(this.currentTopic === "report_player") {
      this.router.navigate(['ticket/report-player'])
    }
    if(this.currentTopic === "payment") {
      this.router.navigate(['ticket/payment'])
    }
    if(this.currentTopic === "general_question") {
      this.router.navigate(['ticket/general-question'])
    }
  }
}
