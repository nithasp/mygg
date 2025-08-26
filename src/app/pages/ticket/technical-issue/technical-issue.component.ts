import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService, AuthService } from 'src/app/core/services';
import { User } from '../../../core/models/index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-technical-issue',
  templateUrl: './technical-issue.component.html',
  styleUrls: ['./technical-issue.component.scss', '../ticket.component.scss'],
})
export class TechnicalIssueComponent implements OnInit {
  mainIssueId!: string;
  subIssueId!: string;
  gameId!: string;

  userInfo!: User;
  technicalIssueForm!: FormGroup;
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
    this.mainIssueId = 'c9ba0164-5ce9-46a4-b2f5-c410faa14f8e';
    this.technicalIssueFormInit();
    this.subscribeServices();
  }

  technicalIssueFormInit() {
    this.technicalIssueForm = this.formBuilder.group({
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
      technical_issue: ['', [Validators.required]],
      //game_name: ['', [Validators.required]],
    });
  }

  subscribeServices() {
    this.authService.getUserInfo().subscribe((value) => {
      this.userInfo = value;
    });
    this.ticketService.getGameList().subscribe((value) => {
      this.gameList = value.data;
    });
    this.ticketService.getSubIssue().subscribe((value) => {
      const filterSubIssue = value.data.filter((x: any) => {
        return x.main_issue_id === this.ticketService.mainIssueId.getValue();
      });
      this.topics = filterSubIssue;
    });
  }

  handleSubmit() {
    // if (this.technicalIssueForm.valid) {
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
    //     subject: this.subject.value,
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
    this.technicalIssueForm.markAllAsTouched();
  }

  handleGetFiles(files: File[]) {
    this.files = files;
  }

  handleTopic(value: string) {
    this.subIssueId = value;
    this.technical_issue.setValue(value, {
      onlySelf: true,
    });
  }

  handleGameName(value: string) {
    this.gameId = value;
    this.game_name.setValue(value, {
      onlySelf: true,
    });
  }

  get subject() {
    return this.technicalIssueForm.get('subject')!;
  }
  get description() {
    return this.technicalIssueForm.get('description')!;
  }
  get technical_issue() {
    return this.technicalIssueForm.get('technical_issue')!;
  }
  get game_name() {
    return this.technicalIssueForm.get('game_name')!;
  }
}
