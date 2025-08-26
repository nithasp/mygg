import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'newrxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {baseUrl} from './index';
import {TransactionInfo} from '../models/index'
import { getAccessToken } from './config';

@Injectable({
  providedIn: 'root',
})
export class TopupService {

  isProcess = new BehaviorSubject<boolean>(false);

  transactionCreatedDate = new BehaviorSubject<string>('');
  transactionOrder = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient) {}

  getIsProcess() {
    return this.isProcess.asObservable();
  }

  getTransactionCreatedDate() {
    return this.transactionCreatedDate.asObservable();
  }

  getTransactionOrder() {
    return this.transactionOrder.asObservable();
  }

  getTopupProduct() {
    return this.http.get<any>(`${baseUrl}/product/readall`);
  }

  createTransaction(body: TransactionInfo) {
    return this.http.post<any>(`${baseUrl}/transaction/create`, body, getAccessToken());
  }
}
