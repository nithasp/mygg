import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService, AuthService } from 'src/app/core/services';
import { User } from '../../../core/models/index';
import Swal from "sweetalert2";

@Component({
  selector: 'app-general-question',
  templateUrl: './general-question.component.html',
  styleUrls: ['./general-question.component.scss', '../ticket.component.scss'],
})
export class GeneralQuestionComponent implements OnInit {
  mainIssueId!: string;
  subIssueId!: string;
  userInfo!: User;
  generalQuestionForm!: FormGroup;
  files: File[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.mainIssueId = '58c3b4ff-35f1-4ce5-9e29-0164ca40dc5c';
    this.subIssueId = 'b923c0e3-3e62-48d8-8fda-2c7ece37b032';
    this.generalQuestionFormInit();
    this.getUserInfo();
  }

  generalQuestionFormInit() {
    this.generalQuestionForm = this.formBuilder.group({
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }



  handleGetFiles(files: File[]) {
    this.files = files;
  }

  getUserInfo() {
    this.authService.getUserInfo().subscribe(value => {
      this.userInfo = value;
    })
  }

  handleSubmit() {
    if (this.generalQuestionForm.valid) {
      const body = {
        assigned: "string",
        country: this.userInfo?.country,
        description: this.description.value,
        email: this.userInfo?.email,
        game: "string",
        ip: "string",
        location: {
          lat: "string",
          lng: "string"
        },
        main_issue: this.mainIssueId,
        platform: "string",
        priority: 0,
        status: "string",
        steam_id: "string",
        steam_link: "string",
        sub_issue: this.subIssueId,
        ticket_number: "string",
        type: "string",
        subject: this.subject.value,
        remark: "string",
        // attached: {
        //   doc_type: "string",
        //   id: "string",
        //   owner_type: "string",
        //   path: "string",
        //   ticket_id: "string",
        //   upload_by: "string"
        // }
      }

      this.ticketService.createTicket(body).subscribe((value) => {
        this.ticketService.ticketId.next(value.data.id);
        this.ticketService.toSubmitSuccessTicketPage();
      }, (err) => {
        Swal.fire({
          title: 'Error',
          text: "An Error Occurred, Please Try Again",
          icon: 'error',
          confirmButtonText: 'Close'
        })
      })
    }

    this.generalQuestionForm.markAllAsTouched();
  }

  get subject() {
    return this.generalQuestionForm.get('subject')!;
  }
  get description() {
    return this.generalQuestionForm.get('description')!;
  }
}
