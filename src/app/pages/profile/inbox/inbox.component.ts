import { Component, OnInit } from '@angular/core';
import { AuthService, InboxService } from 'src/app/core/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  isLoading: boolean = true;

  inboxMessages: any = [];
  inboxMessagesFilter: any = [];
  inboxMessagesTrueFilter: any = [];
  inboxMessagesFalseFilter: any = [];

  isInboxMessagesInit: boolean = false;

  currentPage = 1;
  itemPerPage = 15;
  pageNumber: number[] = [];
  indexOfLastPost = this.currentPage * this.itemPerPage;
  indexOfFirstPost = this.indexOfLastPost - this.itemPerPage;

  selectedItemNumber: number = 0;

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
      this.modalMessages = this.en_message;
    }
    if (value === 'th') {
      this.modalMessages = this.th_message;
    }
  }

  constructor(
    private inboxService: InboxService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscribeInboxService();
    this.getInboxMessages();
    this.getPagination();
    this.inboxService.isInboxMessagesInit.next(true);
  }

  subscribeInboxService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
    this.inboxService.getInboxMessages().subscribe((value) => {
      this.inboxMessages = value;
    });
    this.inboxService.getInboxMessagesFilter().subscribe((value) => {
      this.inboxMessagesFilter = value;
    });
    this.inboxService.getIsInboxMessagesInit().subscribe((value) => {
      this.isInboxMessagesInit = value;
    });
  }

  getInboxMessages() {
    if (!this.isInboxMessagesInit) {
      for (let x = 1; x <= 70; x++) {
        this.inboxMessages.push({
          en: {
            id: x,
            image:
              x % 2 == 1
                ? '../../../../assets/images/inbox/mockup-image.webp'
                : '',
            title: `Title ${x}`,
            date: '17/04/2023 8:30 PM',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit vitae velit vitae interdum. In hac habitasse platea dictumst. Vivamus lectus dui, gravida vel leo pharetra, porttitor consectetur purus. Ut placerat justo vel ligula fringilla commodo. <br/><br/> Morbi mi nisi, semper eget, finibus ut nisi. Nullam nec est quis neque fringilla vehicula...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit vitae velit vitae interdum. In hac habitasse platea dictumst. Vivamus lectus dui, gravida vel leo pharetra,<br/><br/> porttitor consectetur purus. Ut placerat justo vel ligula fringilla commodo. Morbi mi nisi, semper eget, finibus ut nisi. Nullam nec est quis neque fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit vitae velit vitae interdum. In hac habitasse platea dictumst. Vivamus lectus dui, gravida vel leo pharetra, porttitor consectetur purus. Ut placerat justo vel ligula fringilla commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit vitae velit vitae interdum. In hac habitasse platea dictumst. Vivamus lectus dui, gravida vel leo pharetra, porttitor consectetur purus. Ut placerat justo vel ligula fringilla commodo. ',
            selected: false,
          },
          th: {
            id: x,
            image:
              x % 2 == 1
                ? '../../../../assets/images/inbox/mockup-image.webp'
                : '',
            title: `หัวข้อ ${x}`,
            date: '17/04/2023 8:30 PM',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit vitae velit vitae interdum. In hac habitasse platea dictumst. Vivamus lectus dui, gravida vel leo pharetra, porttitor consectetur purus. Ut placerat justo vel ligula fringilla commodo. <br/><br/> Morbi mi nisi, semper eget, finibus ut nisi. Nullam nec est quis neque fringilla vehicula...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit vitae velit vitae interdum. In hac habitasse platea dictumst. Vivamus lectus dui, gravida vel leo pharetra,<br/><br/> porttitor consectetur purus. Ut placerat justo vel ligula fringilla commodo. Morbi mi nisi, semper eget, finibus ut nisi. Nullam nec est quis neque fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit vitae velit vitae interdum. In hac habitasse platea dictumst. Vivamus lectus dui, gravida vel leo pharetra, porttitor consectetur purus. Ut placerat justo vel ligula fringilla commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit vitae velit vitae interdum. In hac habitasse platea dictumst. Vivamus lectus dui, gravida vel leo pharetra, porttitor consectetur purus. Ut placerat justo vel ligula fringilla commodo. ',
            selected: false,
          },
        });
      }
    }
  }

  pageChange(value: any) {
    this.currentPage = value;

    this.itemPerPage = 15;
    this.indexOfLastPost = this.currentPage * this.itemPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.itemPerPage;
    this.inboxMessagesFilter = this.inboxMessages.slice(
      this.indexOfFirstPost,
      this.indexOfLastPost
    );
  }

  getPagination() {
    // Get Item Per Page
    this.inboxService.inboxMessagesFilter.next(
      this.inboxMessages.slice(this.indexOfFirstPost, this.indexOfLastPost)
    );

    // Get Pagination Max Page
    for (
      let i = 1;
      i <= Math.ceil(this.inboxMessages.length / this.itemPerPage);
      i++
    ) {
      this.pageNumber.push(i);
    }
  }

  handlePageNumberValue(event: any) {
    const pageNumberValue = Number(event.target.value);

    if (event.keyCode === 13) {
      if (pageNumberValue > this.pageNumber.length) {
        this.currentPage = this.pageNumber.length;
        this.pageChange(this.currentPage);
      } else {
        this.pageChange(this.currentPage);
      }
    } else {
      this.currentPage = pageNumberValue;
    }
  }

  checkSelected(item: any) {
    item.selected = !item.selected;
    const selectedItemTrue = this.inboxMessages.filter((x: any) => {
      return x.selected === true;
    });
    const selectedItemFalse = this.inboxMessages.filter((x: any) => {
      return x.selected === false;
    });

    this.inboxMessagesTrueFilter = selectedItemTrue;
    this.inboxMessagesFalseFilter = selectedItemFalse;

    if (selectedItemTrue.length > 0) {
      this.selectedItemNumber = selectedItemTrue.length;
    } else {
      this.selectedItemNumber = 0;
    }
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
        this.inboxService.inboxMessages.next(this.inboxMessagesFalseFilter);
        this.selectedItemNumber = 0;
        this.pageNumber = [];
        this.getPagination();
      }
    });
  }
}
