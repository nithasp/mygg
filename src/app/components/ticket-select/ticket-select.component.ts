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
  selector: 'app-ticket-select',
  templateUrl: './ticket-select.component.html',
  styleUrls: ['./ticket-select.component.scss'],
})
export class TicketSelectComponent implements OnInit {
  @ViewChild('ticketSelect') ticketSelect!: ElementRef;

  @Input() optionPlaceholder!: string;
  @Input() optionItems: any = [];

  @Output() changeTopic = new EventEmitter<string>();

  isOptionsContainerActive: boolean = false;
  optionValue!: string;

  constructor() {}

  ngOnInit(): void {
    this.handleCloseSearchInit();
  }

  handleSelect(item: MainIssue) {
    this.optionPlaceholder = item.name;
    this.isOptionsContainerActive = false;
    this.changeTopic.emit(item.id);
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
