import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/core/services';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  career: any = [];

  constructor(private careerService: CareerService) {}

  ngOnInit(): void {
    this.subscribeService();
  }

  subscribeService() {
    this.careerService.getCareer().subscribe((value) => {
      this.career = value;
    });
  }
}
