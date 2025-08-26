import { Component, Input } from '@angular/core';

@Component({
  selector: 'barcode-button',
  templateUrl: './barcode-button.component.html',
  styleUrls: ['./barcode-button.component.scss'],
})
export class BarcodeButtonComponent {
  @Input() textValue: string = '';
  @Input() status: string = '';
  @Input() paddingValue: string = '0 15px';
}
