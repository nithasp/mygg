import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { AuthService } from 'src/app/core/services';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mygg-dropzone',
  templateUrl: './mygg-dropzone.component.html',
  styleUrls: ['./mygg-dropzone.component.scss'],
})
export class MyggDropzoneComponent implements OnInit {
  @ViewChild('myggDropzone') myggDropzone!: ElementRef;
  @Output() getFiles = new EventEmitter<any>();
  files: File[] = [];

  calcNumber: number = 15;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    uploadMultiple: false,
    addRemoveLinks: true,
    dictRemoveFile: 'X',
    dictCancelUpload: 'X',
  };

  en_message = {
    dropzoneBox: {
      text: 'Drag & Drop files here or click to upload (Maximum 5 files)',
      button: 'Choose file',
    },
  };
  th_message = {
    dropzoneBox: {
      text: 'ลากและวางไฟล์ที่นี่หรือ คลิกเพื่ออัปโหลด (สูงสุด 5 ไฟล์)',
      button: 'เลือกไฟล์',
    },
  };
  dropzoneMessages: any;

  lang: string = 'en';
  get language(): string {
    return this.lang;
  }
  set language(value: string) {
    this.lang = value;
    if (value === 'en') {
      this.dropzoneMessages = this.en_message;
    }
    if (value === 'th') {
      this.dropzoneMessages = this.th_message;
    }

    let dzButton: HTMLElement | null =
      document.querySelector('.dz-border-button');
    if (dzButton) {
      dzButton.innerHTML = this.dropzoneMessages?.dropzoneBox.button;
    }
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscribeInboxService();
  }

  ngAfterViewInit() {
    const node = document.createElement('div');
    const textnode = document.createTextNode(
      this.dropzoneMessages?.dropzoneBox.button
    );
    node.appendChild(textnode);
    node.classList.add('dz-border-button');

    const dzMessage = document.querySelector('.dz-message');
    dzMessage?.appendChild(node);
  }

  subscribeInboxService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
  }

  public onUploadError(args: any): void {
    //console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    //console.log('onUploadSuccess:', args);
  }

  handleDrop(event: any) {
    if (this.files.length < 5) {
      this.files.push(event);

      let dzUploads: any = document.querySelectorAll('.dz-upload');
      dzUploads.forEach((dzUpload: any) => {
        let dzSize: any = dzUpload.parentElement.parentElement.querySelector(
          '.dz-size span:nth-of-type(1)'
        );
        dzSize.style.marginLeft = '-7px';
      });

      const node = document.createElement('span');
      const textnode = document.createTextNode('Size: ');
      node.appendChild(textnode);
      const dzSize = document.querySelectorAll('.dz-preview .dz-size');
      dzSize[dzSize.length - 1]?.appendChild(node);

      const dzProgress = document.querySelectorAll('.dz-preview .dz-progress');
      const span = document.createElement('span');
      const textnode2 = document.createTextNode('0%');
      span.classList.add('percent');
      span.appendChild(textnode2);
      dzProgress[dzProgress.length - 1]?.appendChild(span);

      this.calcDropzoneHeight('drop');
    } else {
      let dzPreview: any = document.querySelectorAll('.dz-preview');
      dzPreview[dzPreview.length - 1].remove();
      Swal.fire({
        title: `Error`,
        text: `You can not upload any more files (Maximum 5 files).`,
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

    return;
  }

  handleSending() {}

  calcDropzoneHeight(type: string) {
    let dropzoneElem: any = document.querySelector('dropzone');
    let dzPreview: any = document.querySelectorAll('.dz-preview');
    let dropzoneHeight = (dzPreview.length + 1) * 144;
    this.calcNumber =
      dzPreview.length <= 1 ? (this.calcNumber = 15) : this.calcNumber + 30;
    let calc = dropzoneHeight - this.calcNumber;

    if (type === 'drop') {
      dropzoneElem.style.height = `${calc}px`;
    }
    if (type === 'remove') {
      dropzoneElem.style.height = `${
        dzPreview.length === 4
          ? 615
          : dzPreview.length === 3
          ? 501
          : dzPreview.length === 2
          ? 387
          : dzPreview.length === 1
          ? 271
          : 144
      }px`;
    }
  }

  handleTotalUploadProgress() {
    let dzUploads: any = document.querySelectorAll('.dz-upload');
    dzUploads.forEach((dzUpload: any) => {
      let width: any = dzUpload?.getAttribute('style');
      let percent: any = dzUpload.parentElement.childNodes[3];
      let percentValue = width
        ? Number(width?.split(' ')[1].split('%')[0]).toFixed(0)
        : 0;
      percent.innerHTML = `${percentValue}%`;
    });
  }

  handleRemove(event: any) {
    this.calcDropzoneHeight('remove');
    this.files.splice(this.files.indexOf(event), 1);
  }
}
