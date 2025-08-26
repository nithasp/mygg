import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-redemption',
  templateUrl: './redemption.component.html',
  styleUrls: ['./redemption.component.scss'],
})
export class RedemptionComponent implements OnInit {
  redemptionForm!: FormGroup;
  gameName: any = [
    {
      id: 'name1',
      name: 'name1',
    },
    {
      id: 'name2',
      name: 'name2',
    },
    {
      id: 'name3',
      name: 'name3',
    },
  ];

  en_message = {
    success: {
      title: 'Redeem Success',
      text: 'Successfully redeemed. Enjoy the game!',
      confirm: 'Done',
    },
  };
  th_message = {
    success: {
      title: 'แลกรับสำเร็จแล้ว',
      text: 'คุณกรอกรหัสแลกรับสำเร็จแล้ว ขอให้สนุกกับเกม',
      confirm: 'ตกลง',
    },
  };
  modalMessages: any;

  lang: string = 'en';
  get language(): string {
    return this.lang;
  }
  set language(value: string) {
    this.lang = value;
    if (value === 'en') {
      this.modalMessages = this.en_message;
    }
    if (value === 'th') {
      this.modalMessages = this.th_message;
    }
  }

  constructor(
    private formBuilder: FormBuilder,

    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscribeInboxService();
    this.redemptionFormInit();
  }

  subscribeInboxService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
  }

  redemptionFormInit() {
    this.redemptionForm = this.formBuilder.group({
      game_name: ['', [Validators.required]],
      game_id: ['', [Validators.required]],
      redemption_code: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    if (this.redemptionForm.valid) {
      Swal.fire({
        title: this.modalMessages?.success.title,
        text: this.modalMessages?.success.text,
        iconHtml: `'<img src="assets/images/modal/check-circle.png" alt="check-circle">'
        `,

        confirmButtonText: this.modalMessages?.success.confirm,
        confirmButtonColor: '#43936C',

        reverseButtons: true,
        customClass: {
          container: 'mygg-swal-container',
          title: 'mygg-swal-title',
          popup: 'mygg-swal-popup',
          icon: 'mygg-swal-icon',
          htmlContainer: 'mygg-swal-text',
          actions: 'mygg-swal-btn-wrapper',
          confirmButton: 'mygg-swal-confirm-btn',
        },
      });
    }
    this.redemptionForm.markAllAsTouched();
  }

  handleTopic(value: string) {
    this.game_name.setValue(value, {
      onlySelf: true,
    });
  }

  get game_name() {
    return this.redemptionForm.get('game_name')!;
  }
  get game_id() {
    return this.redemptionForm.get('game_id')!;
  }
  get redemption_code() {
    return this.redemptionForm.get('redemption_code')!;
  }
}
