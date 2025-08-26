import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService, AuthService } from 'src/app/core/services';
import { User } from '../../../core/models/index';
import Swal from "sweetalert2";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss', '../ticket.component.scss'],
})
export class PaymentComponent implements OnInit {
  mainIssueId!: string;
  subIssueId!: string;
  userInfo!: User;
  paymentForm!: FormGroup;
  files: File[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.mainIssueId = '0b5c2e46-427e-45f8-878a-e534c784a46d';
    this.subIssueId = '0c8ede20-8789-4f3b-b104-27bdda6b5670';
    this.generalQuestionFormInit();
    this.getUserInfo();
  }

  generalQuestionFormInit() {
    this.paymentForm = this.formBuilder.group({
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  getUserInfo() {
    this.authService.getUserInfo().subscribe(value => {
      this.userInfo = value;
    })
  }

  handleSubmit() {
    if (this.paymentForm.valid) {

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

      this.ticketService.createTicket(body).subscribe((value: any) => {
        this.ticketService.ticketId.next(value.data.id);
        this.ticketService.toSubmitSuccessTicketPage();
      }, (err: any) => {
        Swal.fire({
          title: 'Error',
          text: "An Error Occurred, Please Try Again",
          icon: 'error',
          confirmButtonText: 'Close'
        })
      })

    }
    this.paymentForm.markAllAsTouched();
  }

  handleGetFiles(files: File[]) {
    this.files = files;
  }

  get subject() {
    return this.paymentForm.get('subject')!;
  }
  get description() {
    return this.paymentForm.get('description')!;
  }
}
