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
import countries from '../../data/country_code.json';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  bsConfig = {
    containerClass: 'theme-default',
    isAnimated: true,
  };

  countries: any = [];
  countriesCode: any = [];

  isSubmitButtonDisabled: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpFormInit();
    this.getCountries();
  }

  signUpFormInit() {
    this.signUpForm = this.formBuilder.group(
      {
        username: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(60),
            Validators.pattern(/^(?![0-9]+$)[a-zA-Z0-9]+$/),
          ],
        ],
        email: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^[A-Za-z0-9]+(?:[.-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[.-][A-Za-z0-9]+)*\.[a-z]{2,}$/
            ),
          ],
        ],
        password1: [
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
        password2: [null, Validators.required],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        date_of_birth: [null, Validators.required],
        country: ['', Validators.required],
        mobile_country: ['', Validators.required],
        mobile_number: [
          null,
          [Validators.required, Validators.pattern(/^[0-9]+$/)],
        ],
        gender: [null, Validators.required],
        policy: [false, Validators.requiredTrue],
      },
      {
        validators: [this.mustMatch],
      }
    );
  }

  changeCountry(value: string) {
    this.country.setValue(value, {
      onlySelf: true,
    });
  }
  changeCountryCode(value: string) {
    this.mobile_country.setValue(value, {
      onlySelf: true,
    });
  }

  signUp() {
    const bodySignUp = {
      agent_type: 'string',
      username: this.signUpForm.value['username'],
      password: this.signUpForm.value['password1'],
      email: this.signUpForm.value['email'],
      firstname: this.signUpForm.value['firstname'],
      lastname: this.signUpForm.value['lastname'],
      mobile_country: this.signUpForm.value['mobile_country'],
      mobile: this.signUpForm.value['mobile_number'],

      nationality: '',
      country: this.signUpForm.value['country'],
      date_of_birth: this.signUpForm.value['date_of_birth']
        ? dayjs(this.signUpForm.value['date_of_birth']).toISOString()
        : '',
      gender: this.signUpForm.value['gender'],
    };

    const bodySignIn = {
      username: this.signUpForm.value['username']?.replace(/\s/g, ''),
      password: this.signUpForm.value['password1']?.replace(/\s/g, ''),
    };

    if (this.signUpForm.valid) {
      this.isSubmitButtonDisabled = true;
      const signUpFunction = this.authService.signUp(bodySignUp).subscribe(
        (value: any) => {
          this.authService.signIn(bodySignIn).subscribe(
            (value: any) => {
              if (value.success) {
                localStorage.setItem('accessToken', value.token.access);
                this.authService.userInfo.next(value.data);
                this.authService.isLogin.next(true);
                this.router.navigate(['/profile']);
              } else {
                Swal.fire({
                  title: `Error`,
                  text: `Something went wrong. Please try again.`,
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
                title: `Error`,
                text: `Something went wrong. Please try again.`,
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
        },
        (err: any) => {
          if (err.error?.msg.includes('duplicated')) {
            Swal.fire({
              title: `Error`,
              text: `The username or email is already taken. Please choose another one.`,
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
            return;
          }

          Swal.fire({
            title: `Error`,
            text: `Something went wrong. Please try again.`,
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
      signUpFunction.add(() => {
        this.isSubmitButtonDisabled = false;
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    this.signUpForm.markAllAsTouched();
  }

  handleTopic(value: string, formName: string) {
    this.country.setValue(value, {
      onlySelf: true,
    });
  }

  get username() {
    return this.signUpForm.get('username')!;
  }
  get email() {
    return this.signUpForm.get('email')!;
  }
  get password1() {
    return this.signUpForm.get('password1')!;
  }
  get password2() {
    return this.signUpForm.get('password2')!;
  }
  get firstname() {
    return this.signUpForm.get('firstname')!;
  }
  get lastname() {
    return this.signUpForm.get('lastname')!;
  }
  get country() {
    return this.signUpForm.get('country')!;
  }
  get mobile_country() {
    return this.signUpForm.get('mobile_country')!;
  }
  get mobile_number() {
    return this.signUpForm.get('mobile_number')!;
  }
  get gender() {
    return this.signUpForm.get('gender')!;
  }
  get policy() {
    return this.signUpForm.get('policy')!;
  }
  get date_of_birth() {
    return this.signUpForm.get('date_of_birth')!;
  }

  mustMatch: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | any => {
    const pass1 = control.get('password1')!;
    const pass2 = control.get('password2')!;

    if (pass2.errors && !pass2.errors?.['MustMatch']) {
      return null;
    }

    if (pass1.value !== pass2.value) {
      pass2.setErrors({ MustMatch: true });
    } else {
      pass2.setErrors(null);
    }
  };

  getCountries() {
    this.countries = countries.map((country) => {
      return {
        id: country.country,
        name: country.country,
      };
    });

    this.countriesCode = countries.map((country) => {
      return {
        id: country.country_code,
        name: country.country_code,
      };
    });
  }
}
