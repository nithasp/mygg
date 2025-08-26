import { Component, OnInit } from '@angular/core';
import { QaService } from 'src/app/core/services';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss'],
})
export class QaComponent implements OnInit {
  qaList: any = [];


  constructor(private qaService: QaService) {}

  ngOnInit(): void {
    this.getQaList();
  }

  getQaList() {
    this.qaService.getQaList().subscribe((value) => {
      this.qaList = value;
    });
  }
}
