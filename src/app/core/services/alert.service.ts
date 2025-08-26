import { Injectable } from '@angular/core';
import { InboxService } from './inbox.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private inboxService: InboxService) {}

  alertMessage(type: string, title: string, text: string) {
    Swal.fire({
      title: `${title}`,
      text: `${text}`,
      iconHtml: `${
        type === 'success'
          ? '<img src="assets/images/modal/check-circle.png" alt="check-circle">'
          : type === 'error'
          ? '<img src="assets/images/modal/exclamation.png" alt="exclamation">'
          : ''
      } `,
      confirmButtonText: 'Done',
      confirmButtonColor: `${
        type === 'success' ? '#43936C' : type === 'error' ? '#AC2028' : ''
      } `,
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

  alertMessageCallback(type: string, title: string, text: string, item: any) {
    Swal.fire({
      title: `${title}`,
      text: `${text}`,
      iconHtml: `${
        type === 'success'
          ? '<img src="assets/images/modal/check-circle.png" alt="check-circle">'
          : type === 'error'
          ? '<img src="assets/images/modal/exclamation.png" alt="exclamation">'
          : ''
      } `,
      confirmButtonText: 'Done',
      confirmButtonColor: `${
        type === 'success' ? '#43936C' : type === 'error' ? '#AC2028' : ''
      } `,
      customClass: {
        container: 'mygg-swal-container',
        title: 'mygg-swal-title',
        popup: 'mygg-swal-popup',
        icon: 'mygg-swal-icon',
        htmlContainer: 'mygg-swal-text',
        actions: 'mygg-swal-btn-wrapper',
        confirmButton: 'mygg-swal-confirm-btn',
      },
    }).then(() => {
      console.log(item);
      this.inboxService.inboxMessages.next(item);
    });
  }
}
