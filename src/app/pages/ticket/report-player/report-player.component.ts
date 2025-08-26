import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService, AuthService } from 'src/app/core/services';
import {User} from '../../../core/models/index';
import Swal from "sweetalert2";

@Component({
  selector: 'app-report-player',
  templateUrl: './report-player.component.html',
  styleUrls: ['./report-player.component.scss', '../ticket.component.scss'],
})
export class ReportPlayerComponent implements OnInit {
  mainIssueId!: string;
  subIssueId!: string;
  gameId!: string;

  userInfo!: User;
  reportPlayerForm!: FormGroup;
  files: File[] = [];
  topics: any[] = [];
  gameList: any = [];


  banTopics: any[] = [
    {
      id: 'Username',
      name: 'Username',
      value: 'username',
    },
    {
      id: 'Last time you had access to the account',
      name: 'Last time you had access to the account',
      value: 'last_time_access',
    },
  ];
  

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.mainIssueId = 'a9aa7d98-304a-4c4a-aa00-b4134d9d1824';
    this.reportPlayerFormInit();
    this.subscribeServices();
  }

  reportPlayerFormInit() {
    this.reportPlayerForm = this.formBuilder.group({
      type_of_report: ['', [Validators.required]],
      description: ['', [Validators.required]],
      //game_name: ['', [Validators.required]],
    });
  }

  subscribeServices() {
    this.authService.getUserInfo().subscribe(value => {
      this.userInfo = value;
    })
    this.ticketService.getGameList().subscribe((value) => {
      this.gameList = value.data;  
    });
    this.ticketService.getSubIssue().subscribe((value) => {
      const filterSubIssue = value.data.filter((x:any) => {
        return x.main_issue_id === this.ticketService.mainIssueId.getValue();
      })
      this.topics = filterSubIssue;
    });
  }

  handleSubmit() {
    // if (this.reportPlayerForm.valid) {
    //   const body = {
    //     assigned: "string",
    //     country: this.userInfo?.country,
    //     description: this.description.value,
    //     email: this.userInfo?.email,
    //     game: this.gameId,
    //     ip: "string",
    //     location: {
    //       lat: "string",
    //       lng: "string"
    //     },
    //     main_issue: this.mainIssueId,
    //     platform: "string",
    //     priority: 0,
    //     status: "string",
    //     steam_id: "string",
    //     steam_link: "string",
    //     sub_issue: this.subIssueId,
    //     ticket_number: "string",
    //     type: "string",
    //     subject: "string",
    //     remark: "string",
    //     // attached: {
    //     //   doc_type: "string",
    //     //   id: "string",
    //     //   owner_type: "string",
    //     //   path: "string",
    //     //   ticket_id: "string",
    //     //   upload_by: "string"
    //     // }
    //   }

    //   this.ticketService.createTicket(body).subscribe((value: any) => {
    //     this.ticketService.ticketId.next(value.data.id);
    //     this.ticketService.toSubmitSuccessTicketPage();
    //   }, (err: any) => {
    //     Swal.fire({
    //       title: 'Error',
    //       text: "An Error Occurred, Please Try Again",
    //       icon: 'error',
    //       confirmButtonText: 'Close'
    //     })
    //   })
    // }
    this.reportPlayerForm.markAllAsTouched();
  }

  handleGetFiles(files: File[]) {
    this.files = files;
  }

  handleTopic(value: string) {
    this.subIssueId = value;
    this.type_of_report.setValue(value, {
      onlySelf: true,
    });
  }

  handleGameName(value: string) {
    this.gameId = value;
    this.game_name.setValue(value, {
      onlySelf: true,
    });  
  }

  get type_of_report() {
    return this.reportPlayerForm.get('type_of_report')!;
  }
  get description() {
    return this.reportPlayerForm.get('description')!;
  }
  get game_name() {
    return this.reportPlayerForm.get('game_name')!;
  }
}
