import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QaService } from 'src/app/core/services';

@Component({
  selector: 'app-qa-detail',
  templateUrl: './qa-detail.component.html',
  styleUrls: ['./qa-detail.component.scss'],
})
export class QaDetailComponent implements OnInit {
  qa: any = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private qaService: QaService
  ) {}

  ngOnInit(): void {
    this.getQa();
  }

  getQa() {
    this.qaService.getQaList().subscribe((QaList) => {
      const qa = QaList.find(
        (i: any) => i.id === this.route.snapshot.paramMap.get('id')
      );
      if (qa) {
        this.qa = qa;
      } else {
        this.router.navigate(['/service/qa']);
      }
    });
  }

  problems: any = [
    { image: '', problem_name: 'Problem' },
    { image: '', problem_name: 'Problem' },
    { image: '', problem_name: 'Problem' },
    {
      image: 'assets/images/service/qa/writting-letter2.png',
      problem_name: 'Help Ticket',
    },
  ];
}
