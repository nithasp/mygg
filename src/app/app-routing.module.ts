import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TopupComponent } from './pages/topup/topup.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
 
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileEditComponent } from './pages/profile/profile-edit/profile-edit.component';
import { PurchaseHistoryComponent } from './pages/profile/purchase-history/purchase-history.component';
import { TicketCategoriesComponent } from './pages/profile/ticket-categories/ticket-categories.component';
import { TicketDetailComponent } from './pages/profile/ticket-detail/ticket-detail.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { SelectTopicComponent } from './pages/ticket/select-topic/select-topic.component';
import { RecoveryMyAccountComponent } from './pages/ticket/recovery-my-account/recovery-my-account.component';
import { InGameQuestionComponent } from './pages/ticket/in-game-question/in-game-question.component';
import { TechnicalIssueComponent } from './pages/ticket/technical-issue/technical-issue.component';
import { ReportPlayerComponent } from './pages/ticket/report-player/report-player.component';
import { PaymentComponent } from './pages/ticket/payment/payment.component';
import { GeneralQuestionComponent } from './pages/ticket/general-question/general-question.component';
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
import { IssuesWithMyggAccountComponent } from './pages/service/issues-with-mygg-account/issues-with-mygg-account.component';
import { IssuesWithToppingUpComponent } from './pages/service/issues-with-topping-up/issues-with-topping-up.component';
import { FaqComponent } from './pages/service/faq/faq.component';
import { CareerInfoComponent } from './pages/career/career-info/career-info.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },

  {
    path: 'topup',
    component: TopupComponent,
  },
  {
    path: 'topup/coin',
    component: CoinComponent
  },
  {
    path: 'topup/game',
    component: GameTopupComponent,
    children: [
      {
        path: 'goi',
        component: GoiTopupComponent
      },
      {
        path: 'slashy-ninja',
        component: SlashyNinjaTopupComponent
      },
    ],
  },
  {
    path: 'topup/success',
    component: TopupSuccessComponent,
  },
  {
    path: 'topup/failed',
    component: TopupFailedComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
    children: [
      {
        path: '',
        redirectTo: 'issues-with-mygg-account',
        pathMatch: 'full',
      },
      { path: 'issues-with-mygg-account', component: IssuesWithMyggAccountComponent },
      { path: 'issues-with-topping-up', component: IssuesWithToppingUpComponent },
      { path: 'faq', component: FaqComponent },
    ],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-in-redirect',
    component: SignInRedirectComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'career/:id',
    component: CareerInfoComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'edit',
        pathMatch: 'full',
      },
      { path: 'edit', component: ProfileEditComponent },
      { path: 'redemption', component: RedemptionComponent },
      { path: 'purchase-history', component: PurchaseHistoryComponent },
      { path: 'ticket-categories', component: TicketCategoriesComponent },
      { path: 'ticket', component: TicketDetailComponent },
      { path: 'ticket/:number', component: TicketDetailComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'inbox/:id', component: InboxDetailComponent },
    ],
  },
  {
    path: 'ticket',
    component: TicketComponent,
    children: [
      {
        path: '',
        redirectTo: 'select-topic',
        pathMatch: 'full',
      },
      { path: 'select-topic', component: SelectTopicComponent },
      { path: 'recovery-my-account', component: RecoveryMyAccountComponent },
      { path: 'in-game-question', component: InGameQuestionComponent },
      { path: 'technical-issue', component: TechnicalIssueComponent },
      { path: 'report-player', component: ReportPlayerComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'general-question', component: GeneralQuestionComponent },
      { path: 'submit-success', component: SubmitSuccessComponent },
    ],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'cookie-policy',
    component: CookieComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'term-of-service',
    component: TermOfServiceComponent,
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
