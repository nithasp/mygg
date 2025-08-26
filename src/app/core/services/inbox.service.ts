import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'newrxjs';
@Injectable({
  providedIn: 'root',
})
export class InboxService {
  inboxMessages = new BehaviorSubject<any>([]);
  inboxMessagesFilter = new BehaviorSubject<any>([]);
  isInboxMessagesInit = new BehaviorSubject<boolean>(false);

  constructor() {}

  getInboxMessages() {
    return this.inboxMessages.asObservable();
  }
  getInboxMessagesFilter() {
    return this.inboxMessagesFilter.asObservable();
  }
  getIsInboxMessagesInit() {
    return this.isInboxMessagesInit.asObservable();
  }
}
