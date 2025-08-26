import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import countries from '../../../data/country_code.json';
import { AuthService } from 'src/app/core/services';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  userInfo: any;
  profileEditForm!: FormGroup;
  bsConfig = {
    containerClass: 'theme-default',
    isAnimated: true,
  };

  countries: any = [];
  countriesCode: any = [];
  countrySelectDefaultValue: string = '';
  countryCodeSelectDefaultValue: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe((value: any) => {
      this.userInfo = value;
    });
    this.profileEditFormInit();
    this.getCountries();
  }

  profileEditFormInit() {
    this.profileEditForm = this.formBuilder.group({
      username: [this.userInfo?.username, Validators.required],
      email: [
        this.userInfo?.email,
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      firstname: [this.userInfo?.firstname, Validators.required],
      lastname: [this.userInfo?.lastname, Validators.required],
      date_of_birth: [
        new Date(this.userInfo?.date_of_birth),
        Validators.required,
      ],
      gender: [this.userInfo?.gender, Validators.required],
      country: [this.userInfo?.country, Validators.required],
      mobile_country: [this.userInfo?.mobile_country, Validators.required],
      mobile_number: [
        this.userInfo?.mobile,
        [Validators.required, Validators.pattern(/^[0-9]+$/)],
      ],
    });
  }

 

  changeCountry(value: string) {
    this.country.setValue(value);
  }
  changeCountryCode(value: string) { 
    this.mobile_country.setValue(value);
  }

  getDefaultUserInfoValue() {
    this.username.setValue(this.userInfo?.username);
    this.email.setValue(this.userInfo?.email);
    this.firstname.setValue(this.userInfo?.firstname);
    this.lastname.setValue(this.userInfo?.lastname);
    this.date_of_birth.setValue(new Date(this.userInfo?.date_of_birth));
    this.gender.setValue(this.userInfo?.gender);
    this.country.setValue(this.userInfo?.country);
    this.mobile_country.setValue(this.userInfo?.mobile_country);
    this.mobile_number.setValue(this.userInfo?.mobile);
  }

  getSelectDefaultValue() {
    const defaultCountry = this.countries.find((x: any) => {
      return x.country === this.userInfo?.country;
    });
    if (defaultCountry) {
      this.countrySelectDefaultValue = defaultCountry.country;
    }

    const defaultCountryCode = this.countries.find((x: any) => {
      return x.mobile_country === this.userInfo?.mobile_country;
    });
    if (defaultCountryCode) {
      this.countryCodeSelectDefaultValue = defaultCountryCode.mobile_country;
    }

    this.mobile_number.setValue(this.userInfo?.mobile, {
      onlySelf: true,
    });

    this.gender.setValue(this.userInfo?.gender, {
      onlySelf: true,
    });
  }

  updateUser() {
    const body = {
      country: this.profileEditForm.value['country'],
      date_of_birth: this.profileEditForm.value['date_of_birth']
        ? dayjs(this.profileEditForm.value['date_of_birth']).toISOString()
        : '',
      email: this.profileEditForm.value['email'],
      firstname: this.profileEditForm.value['firstname'],
      gender: this.profileEditForm.value['gender'],
      lastname: this.profileEditForm.value['lastname'],
      mobile: this.profileEditForm.value['mobile_number'],
      mobile_country: this.profileEditForm.value['mobile_country'],
    };

    if (this.profileEditForm.valid) {
      this.authService.updateUser(body).subscribe(
        (value: any) => {
          this.authService.userInfo.next({username: this.userInfo?.username, ...value.data});
          Swal.fire({
            title: `Success`,
            text: `Your profile has been updated.`,
            iconHtml: `'<img src="assets/images/modal/check-circle.png" alt="check-circle">'
            `,

            confirmButtonText: 'Done',
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
          })
        },
        (err: any) => {
          console.log(err);

          Swal.fire({
            title: `Error`,
            text: `An error occurred while updating your profile. Please try again later or contact support for assistance.`,
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


    console.log(body);
    console.log(this.profileEditForm);
    

    this.profileEditForm.markAllAsTouched();
  }

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

  get username() {
    return this.profileEditForm.get('username')!;
  }
  get email() {
    return this.profileEditForm.get('email')!;
  }
  get firstname() {
    return this.profileEditForm.get('firstname')!;
  }
  get lastname() {
    return this.profileEditForm.get('lastname')!;
  }
  get country() {
    return this.profileEditForm.get('country')!;
  }
  get mobile_country() {
    return this.profileEditForm.get('mobile_country')!;
  }
  get mobile_number() {
    return this.profileEditForm.get('mobile_number')!;
  }
  get gender() {
    return this.profileEditForm.get('gender')!;
  }
  get date_of_birth() {
    return this.profileEditForm.get('date_of_birth')!;
  }
}
