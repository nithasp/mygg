import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'newrxjs';

@Injectable({
  providedIn: 'root',
})
export class QaService {
  qaList = new BehaviorSubject<any>([
    {
      id: '1',
      title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?',
      description: 'description',
    },
    {
      id: '2',
      title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?',
      description: 'description',
    },
    {
      id: '3',
      title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?',
      description: 'description',
    },
    {
      id: '4',
      title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?',
      description: 'description',
    },
    {
      id: '5',
      title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?',
      description: 'description',
    },
    {
      id: '6',
      title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?',
      description: 'description',
    },
    {
      id: '7',
      title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?',
      description: 'description',
    },
  ]);
  constructor() {}

  getQaList() {
    return this.qaList.asObservable();
  }
}
