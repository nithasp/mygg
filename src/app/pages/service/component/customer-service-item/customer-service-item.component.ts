import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-service-item',
  templateUrl: './customer-service-item.component.html',
  styleUrls: ['./customer-service-item.component.scss'],
})
export class CustomerServiceItemComponent {
  services: any = [
    {
      image: 'assets/images/service/qa/UI_MYGGPB.png',
      service_name: 'ปัญหาเกี่ยวกับ MYGG account',
      link: "/service/mygg-account-problem"
    },
    {
      image: 'assets/images/service/qa/UI_TOPUPPB.png',
      service_name: 'ปัญหาเกี่ยวกับการเติมเงิน',
      link: "/service/topup-problem"
    },
    {
      image: 'assets/images/service/qa/UI_OtherPB.png',
      service_name: 'ปัญหาอื่น ๆ',
      link: "/service/other-problem"
    },
    {
      image: 'assets/images/service/qa/writting-letter2.png',
      service_name: 'Help Ticket',
      link: "/ticket"
    },
  ];
}
