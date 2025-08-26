import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService, AuthService } from 'src/app/core/services';
import { User } from '../../../core/models/index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recovery-my-account',
  templateUrl: './recovery-my-account.component.html',
  styleUrls: [
    './recovery-my-account.component.scss',
    '../ticket.component.scss',
  ],
})
export class RecoveryMyAccountComponent implements OnInit {
  mainIssueId!: string;
  subIssueId!: string;
  gameId!: string;

  userInfo!: User;
  recoveryMyAccountForm!: FormGroup;
  files: File[] = [];
  topics: any[] = [];
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
  gameList: any = [];

  topic!: string;
  banTopic!: string;
  isBanTopicRequired: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.mainIssueId = '55b18226-c81d-4317-90a5-53d41d248bd0';
    this.subscribeServices();
    this.recoveryMyAccountFormInit();
  }

  recoveryMyAccountFormInit() {
    this.recoveryMyAccountForm = this.formBuilder.group({
      email: [this.userInfo?.email, []],
      //type_of_report: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
      //game_name: ['', [Validators.required]],
      remark: [''],
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
    // if (this.topic === '78b970e7-bb6d-4861-b356-502cafe24060') {
    //   if (!this.banTopic) {
    //     this.isBanTopicRequired = true;
    //   } else {
    //     this.isBanTopicRequired = false;
    //   }
    // }
    // if (this.recoveryMyAccountForm.valid) {
    //   if (this.isBanTopicRequired && !this.banTopic) {
    //     return;
    //   }
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
    //     remark: this.remark.value,
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
    this.recoveryMyAccountForm.markAllAsTouched();
  }

  handleGetFiles(files: File[]) {
    this.files = files;
  }

  handleTopic(value: string) {
    this.topic = value;
    this.subIssueId = value;
    //this.type_of_report.setValue(value);

    this.subject.setValue(value, {
      onlySelf: true,
    });

    console.log(value);
    console.log(this.recoveryMyAccountForm);

    if (this.topic !== '78b970e7-bb6d-4861-b356-502cafe24060') {
      this.banTopic = '';
      this.remark.setValue('', {
        onlySelf: true,
      });
    }
  }
  handleBanTopic(value: string) {
    this.isBanTopicRequired = false;

    this.remark.setValue(value, {
      onlySelf: true,
    });
    this.banTopic = value;
  }
  // handleGameName(value: string) {
  //   this.gameId = value;
  //   this.game_name.setValue(value, {
  //     onlySelf: true,
  //   });
  // }

  get email() {
    return this.recoveryMyAccountForm.get('email')!;
  }
  // get type_of_report() {
  //   return this.recoveryMyAccountForm.get('type_of_report')!;
  // }
  get subject() {
    return this.recoveryMyAccountForm.get('subject')!;
  }
  get description() {
    return this.recoveryMyAccountForm.get('description')!;
  }
  // get game_name() {
  //   return this.recoveryMyAccountForm.get('game_name')!;
  // }
  get remark() {
    return this.recoveryMyAccountForm.get('remark')!;
  }
}
