import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'mygg-back-button',
  templateUrl: './mygg-back-button.component.html',
  styleUrls: ['./mygg-back-button.component.scss'],
})
export class MyggBackButtonComponent {
  constructor(private router: Router) {}
}
