import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'newrxjs';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class MethodService {
  isMethodChanged = new BehaviorSubject<boolean>(false);
  isMethodDisplay = new BehaviorSubject<boolean>(false);
  
  method = new BehaviorSubject<string>('');

  isProcess = new BehaviorSubject<boolean>(false);
  process = new BehaviorSubject<string>('');

  constructor(private router: Router) {}

  getIsMethodChanged() {
    return this.isMethodChanged.asObservable();
  }
  getIsMethodDisplay() {
    return this.isMethodDisplay.asObservable();
  }

  getMethod() {
    return this.method.asObservable();
  }
  getIsProcess() {
    return this.isProcess.asObservable();
  }
  getProcess() {
    return this.process.asObservable();
  }

  backToMethodPage() {
    this.router.navigate(['topup/method']);
    this.method.next('');
    this.isMethodChanged.next(false);
    this.isMethodDisplay.next(false);

    this.process.next('');
    this.isProcess.next(false);

  }
}
