import { Component, OnInit } from '@angular/core';
import { AuthService, InboxService } from 'src/app/core/services';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inbox-detail',
  templateUrl: './inbox-detail.component.html',
  styleUrls: ['./inbox-detail.component.scss'],
})
export class InboxDetailComponent implements OnInit {
  selectedItem: any;
  itemDetail: any;
  isInboxMessagesInit: boolean = false;

  en_message = {
    confirm: {
      title: 'Confirm delete ',
      text: 'Are you sure you want to delete this message?',
      cancel: 'Cancel',
      confirm: 'Delete',
    },
  };
  th_message = {
    confirm: {
      title: 'ยืนยันการลบ',
      text: 'คุณแน่ใจหรือไม่ว่าต้องการจะลบข้อความนี้?',
      cancel: 'ยกเลิก',
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
      this.itemDetail = this.selectedItem?.en;
      this.modalMessages = this.en_message;
    }
    if (value === 'th') {
      this.itemDetail = this.selectedItem?.th;
      this.modalMessages = this.th_message;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private inboxService: InboxService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscribeService();

    if(!this.isInboxMessagesInit) {
      this.router.navigate(['profile/inbox'])
    }
  }

  subscribeService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
    this.inboxService.getInboxMessages().subscribe((inboxMessages) => {
      const itemId = this.route.snapshot.paramMap.get('id')!;
      const inboxItem = inboxMessages.find((i: any) =>
        this.language === 'en' ? i.en.id : i.th.id === parseInt(itemId)
      );
      if (inboxItem) {
        this.selectedItem = inboxItem;
        this.itemDetail = this.language === 'en' ? inboxItem.en : inboxItem.th;
      }
    });

    this.inboxService.getIsInboxMessagesInit().subscribe((value) => {
      this.isInboxMessagesInit = value;
    });
  }

  deleteItem() {
    Swal.fire({
      title: this.modalMessages?.confirm.title,
      text: this.modalMessages?.confirm.text,
      iconHtml: `'<img src="assets/images/modal/exclamation.png" alt="exclamation">'
      `,

      confirmButtonColor: '#AC2028',
      confirmButtonText: this.modalMessages?.confirm.confirm,

      showCancelButton: true,
      cancelButtonText: this.modalMessages?.confirm.cancel,

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
    }).then((result) => {
      if (result.isConfirmed) {
        const inboxMessages = this.inboxService.inboxMessages.getValue();
        const fileIndex = inboxMessages.findIndex((item: any) => {
          return item.id === this.itemDetail.id;
        });
        const inboxMessagesFilter = inboxMessages.filter(
          (item: any, index: number) => {
            return index !== fileIndex;
          }
        );
        this.inboxService.inboxMessages.next(inboxMessagesFilter);
        this.router.navigate(['profile/inbox']);
      }
    });
  }
}
