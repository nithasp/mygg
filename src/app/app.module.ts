// Main
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {
  HttpClientModule,
  HttpClient,
  HttpBackend,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Plugin
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CookieService } from 'ngx-cookie-service';

// Component
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TopupComponent } from './pages/topup/topup.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';

import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

import { ServiceComponent } from './pages/service/service.component';

import { WelcomeComponent } from './components/welcome/welcome.component';

import { MyggBackButtonComponent } from './components/mygg-back-button/mygg-back-button.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileEditComponent } from './pages/profile/profile-edit/profile-edit.component';
import { PurchaseHistoryComponent } from './pages/profile/purchase-history/purchase-history.component';
import { TicketCategoriesComponent } from './pages/profile/ticket-categories/ticket-categories.component';
import { TicketDetailComponent } from './pages/profile/ticket-detail/ticket-detail.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { SelectTopicComponent } from './pages/ticket/select-topic/select-topic.component';
import { GeneralQuestionComponent } from './pages/ticket/general-question/general-question.component';
import { PaymentComponent } from './pages/ticket/payment/payment.component';
import { ReportPlayerComponent } from './pages/ticket/report-player/report-player.component';
import { TechnicalIssueComponent } from './pages/ticket/technical-issue/technical-issue.component';
import { InGameQuestionComponent } from './pages/ticket/in-game-question/in-game-question.component';
import { RecoveryMyAccountComponent } from './pages/ticket/recovery-my-account/recovery-my-account.component';
import { TicketSelectComponent } from './components/ticket-select/ticket-select.component';
import { MyggDropzoneComponent } from './components/mygg-dropzone/mygg-dropzone.component';
import { SubmitSuccessComponent } from './pages/ticket/submit-success/submit-success.component';
import { SignInRedirectComponent } from './pages/sign-in-redirect/sign-in-redirect.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RedemptionComponent } from './pages/profile/redemption/redemption.component';
import { InboxComponent } from './pages/profile/inbox/inbox.component';
import { InboxDetailComponent } from './pages/profile/inbox-detail/inbox-detail.component';
import { CookieComponent } from './pages/cookie/cookie.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermOfServiceComponent } from './pages/term-of-service/term-of-service.component';
import { CoinComponent } from './pages/topup/coin/coin.component';
import { GoiTopupComponent } from './pages/topup/game-topup/goi-topup/goi-topup.component';
import { GameTopupComponent } from './pages/topup/game-topup/game-topup.component';

import { SlashyNinjaTopupComponent } from './pages/topup/game-topup/slashy-ninja-topup/slashy-ninja-topup.component';

import { TopupSuccessComponent } from './pages/topup/topup-success/topup-success.component';
import { TopupFailedComponent } from './pages/topup/topup-failed/topup-failed.component';
import { SupportComponent } from './pages/support/support.component';
import { CookiePopupComponent } from './components/cookie-popup/cookie-popup.component';
import { MyggSelectComponent } from './components/mygg-select/mygg-select.component';
import { IssuesWithMyggAccountComponent } from './pages/service/issues-with-mygg-account/issues-with-mygg-account.component';
import { IssuesWithToppingUpComponent } from './pages/service/issues-with-topping-up/issues-with-topping-up.component';
import { FaqComponent } from './pages/service/faq/faq.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { CareerInfoComponent } from './pages/career/career-info/career-info.component';

import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    './assets/i18n/welcome/',
    './assets/i18n/topbar/',
    './assets/i18n/footer/',
    './assets/i18n/home/',
    './assets/i18n/contact/',
    './assets/i18n/about/',
    './assets/i18n/support-email/',
    './assets/i18n/topup/',
    './assets/i18n/sign-up/',
    './assets/i18n/sign-in/',
    './assets/i18n/cookie-popup/',
    './assets/i18n/reset-password/',
    './assets/i18n/career/',
    './assets/i18n/profile/',
    './assets/i18n/inbox/',
    './assets/i18n/redeem/',
    './assets/i18n/purchase-history/',
    './assets/i18n/ticket-categories/',
    './assets/i18n/privacy-policy/',
    './assets/i18n/term-of-service/',
    './assets/i18n/cookie-policy/',
    './assets/i18n/ticket/',
    './assets/i18n/service/',

    './assets/i18n/404-page-not-found/',
  ]);
}

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
};

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    FooterComponent,
    TopbarComponent,
    HomeComponent,
    TopupComponent,
    SocialIconComponent,

    SignUpComponent,
    SignInComponent,
    CareerComponent,
    ContactUsComponent,

    ServiceComponent,
    WelcomeComponent,

    MyggBackButtonComponent,

    ProfileComponent,
    ProfileEditComponent,
    PurchaseHistoryComponent,
    TicketCategoriesComponent,
    TicketDetailComponent,
    TicketComponent,
    SelectTopicComponent,
    GeneralQuestionComponent,
    PaymentComponent,
    ReportPlayerComponent,
    TechnicalIssueComponent,
    InGameQuestionComponent,
    RecoveryMyAccountComponent,
    TicketSelectComponent,
    MyggDropzoneComponent,
    SubmitSuccessComponent,
    SignInRedirectComponent,
    PageNotFoundComponent,
    ResetPasswordComponent,
    RedemptionComponent,
    InboxComponent,
    InboxDetailComponent,
    CookieComponent,
    PrivacyPolicyComponent,
    TermOfServiceComponent,
    CoinComponent,
    GoiTopupComponent,
    GameTopupComponent,

    SlashyNinjaTopupComponent,

    TopupSuccessComponent,
    TopupFailedComponent,
    SupportComponent,
    CookiePopupComponent,
    MyggSelectComponent,
    IssuesWithMyggAccountComponent,
    IssuesWithToppingUpComponent,
    FaqComponent,
    AboutUsComponent,
    CareerInfoComponent,
  ],
  imports: [
    DropzoneModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  providers: [
    CookieService,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
