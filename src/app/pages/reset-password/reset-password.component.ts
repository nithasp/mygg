import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  emailForm!: FormGroup;
  codeForm!: FormGroup;
  resetPasswordStep: string = 'step1';

  en_message = {
    success: {
      title: 'Success',
      text: 'Your password has been changed successfully',
    },
    server: {
      title: 'Error',
      text: 'Something went wrong. Please try again.',
    },
    incorrect: {
      title: 'Error',
      text: 'The username or password is incorrect. Please try again.',
    },
  };
  th_message = {
    success: {
      title: 'สำเร็จ',
      text: 'รหัสผ่านของคุณถูกเปลี่ยนเรียบร้อยแล้ว',
    },
    server: {
      title: 'มีข้อผิดพลาดเกิดขึ้น',
      text: 'มีบางอย่างผิดพลาด. โปรดลองอีกครั้ง.',
    },
    incorrect: {
      title: 'มีข้อผิดพลาดเกิดขึ้น',
      text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง',
    },
  };
  modalMessages: any;

  set language(value: string) {
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
    this.subscribeService();
    this.emailFormInit();
    this.codeFormInit();
  }

  subscribeService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
  }

  emailFormInit() {
    this.emailForm = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
    });
  }

  codeFormInit() {
    this.codeForm = this.formBuilder.group(
      {
        code: [null, Validators.required],
        new_password: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(16),
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$/
            ),
          ],
        ],
        confirm_password: [null, Validators.required],
      },
      {
        validators: [this.mustMatch],
      }
    );
  }

  get email() {
    return this.emailForm.get('email')!;
  }
  get code() {
    return this.codeForm.get('code')!;
  }

  get new_password() {
    return this.codeForm.get('new_password')!;
  }

  get confirm_password() {
    return this.codeForm.get('confirm_password')!;
  }

  mustMatch: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | any => {
    const pass1 = control.get('new_password')!;
    const pass2 = control.get('confirm_password')!;

    if (pass2.errors && !pass2.errors?.['MustMatch']) {
      return null;
    }

    if (pass1.value !== pass2.value) {
      pass2.setErrors({ MustMatch: true });
    } else {
      pass2.setErrors(null);
    }
  };

  handleEmailSubmit() {
    if (this.emailForm.valid) {
      this.resetPasswordStep = 'step2';
    }
    this.emailForm.markAllAsTouched();
  }

  handleCodeSubmit() {
    this.codeForm.markAllAsTouched();

    if (this.codeForm.valid) {
      Swal.fire({
        title: this.modalMessages?.success.title,
        text: this.modalMessages?.success.text,
        iconHtml:
          '<img src="assets/images/modal/check-circle.png" alt="check-circle">',
        confirmButtonText: 'Done',
        confirmButtonColor: '#43936C',
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
  }
}
