import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MainIssue } from 'src/app/core/models';

@Component({
  selector: 'app-mygg-select',
  templateUrl: './mygg-select.component.html',
  styleUrls: ['./mygg-select.component.scss'],
})
export class MyggSelectComponent implements OnInit {
  @ViewChild('ticketSelect') ticketSelect!: ElementRef;

  @Input() optionPlaceholder!: string;
  @Input() optionItems: any = [];

  @Output() changeTopic = new EventEmitter<string>();

  isOptionsContainerActive: boolean = false;
  optionValue!: string;
  isOptionDirty: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.handleCloseSearchInit();
  }
  ngAfterViewInit() {
    const selected = document.querySelectorAll(
      '#profile-edit .selected .placeholder-text'
    );
    selected.forEach((AllSelected) => {
      if (AllSelected.innerHTML !== 'Select') {
        const item = AllSelected.parentElement?.parentElement;
        item?.classList.add('dirty');
      }
    });
    this.optionValue = this.optionPlaceholder;
  }

  handleSelect(item: MainIssue) {
    if (!this.isOptionDirty) {
      this.isOptionDirty = true;
    }

    this.optionPlaceholder = item.name;
    this.isOptionsContainerActive = false;
    this.changeTopic.emit(item.id);

    setTimeout(() => {
      this.optionValue = item.name;
    }, 400);
  }

  handleCloseSearchInit() {
    document.addEventListener('mousedown', (event: any) => {
      const elem = this.ticketSelect.nativeElement;
      if (elem && !elem.contains(event.target)) {
        this.isOptionsContainerActive = false;
      }
    });
  }
}
