import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

  en_message = {
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
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscribeService();
    this.signInFormInit();
    this.getModalMessages();
  }
 
  subscribeService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
  }
  signInFormInit() {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get username() {
    return this.signInForm.get('username')!;
  }
  get password() {
    return this.signInForm.get('password')!;
  }

  signIn() {
    const body = {
      username: this.signInForm.value['username'].replace(/\s/g, ''),
      password: this.signInForm.value['password'].replace(/\s/g, ''),
    };
    if (this.signInForm.valid) {
      this.authService.signIn(body).subscribe(
        (value: any) => {
          if (value.success) {
            localStorage.setItem('accessToken', value.token.access);
            this.router.navigate(['/']);
            this.authService.userInfo.next(value.data);
            this.authService.isLogin.next(true);
          } else {
            Swal.fire({
              title: this.modalMessages?.incorrect.title,
              text: this.modalMessages?.incorrect.text,
              iconHtml: `'<img src="assets/images/modal/exclamation.png" alt="exclamation">'
              `,

              confirmButtonText: 'Done',
              confirmButtonColor: '#AC2028',

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
        },
        (err: any) => {
          console.log(err);
          Swal.fire({
            title: this.modalMessages?.server.title,
            text: this.modalMessages?.server.text,
            iconHtml: `'<img src="assets/images/modal/exclamation.png" alt="exclamation">'
            `,

            confirmButtonText: 'Done',
            confirmButtonColor: '#AC2028',

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
      );
    }

    this.signInForm.markAllAsTouched();
  }

  getModalMessages() {
    const en_message = {
      server: {
        title: 'Error',
        text: 'Something went wrong. Please try again.',
      },
      incorrect: {
        title: 'Error',
        text: 'The username or password is incorrect. Please try again.',
      },
    };
    const th_message = {
      server: {
        title: 'มีข้อผิดพลาดเกิดขึ้น',
        text: 'มีบางอย่างผิดพลาด. โปรดลองอีกครั้ง.',
      },
      incorrect: {
        title: 'มีข้อผิดพลาดเกิดขึ้น',
        text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง',
      },
    };

    if (this.language === 'en') {
      this.modalMessages = en_message;
    }
    if (this.language === 'th') {
      this.modalMessages = th_message;
    }
  }
}
