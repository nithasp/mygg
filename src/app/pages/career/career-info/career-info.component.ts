import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, CareerService } from 'src/app/core/services';

@Component({
  selector: 'app-career-info',
  templateUrl: './career-info.component.html',
  styleUrls: ['./career-info.component.scss'],
})
export class CareerInfoComponent {
  career: any = [];
  matchedCareerItem: any = {};
  careerDetail: any;

  lang: string = 'en';
  get language(): string {
    return this.lang;
  }
  set language(value: string) {
    this.lang = value;
    if (value === 'en') {
      this.careerDetail = this.matchedCareerItem.en;
    }
    if (value === 'th') {
      this.careerDetail = this.matchedCareerItem.th;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private careerService: CareerService
  ) {}

  ngOnInit(): void {
    this.subscribeService();
    this.getCareerDetail();
  }

  subscribeService() {
    this.authService.getLanguage().subscribe((value) => {
      this.language = value;
    });
    this.careerService.getCareer().subscribe((value) => {
      this.career = value;
    });
  }

  getCareerDetail() {
    const itemId = this.route.snapshot.paramMap.get('id')!;
    const careerItem = this.career.find((i: any) => i.id === parseInt(itemId));

    if (careerItem) {
      this.matchedCareerItem = careerItem;
      this.careerDetail =
        this.language === 'en'
          ? careerItem.en
          : this.language === 'th'
          ? careerItem.th
          : careerItem.en;
    }
  }
}
