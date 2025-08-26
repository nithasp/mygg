import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnInit {
  purchaseHistory: any = [];
  purchaseFilter: any = [];

  currentPage = 1;
  itemPerPage = 15;
  pageNumber: number[] = [];
  indexOfLastPost = this.currentPage * this.itemPerPage;
  indexOfFirstPost = this.indexOfLastPost - this.itemPerPage;

  constructor() {}

  ngOnInit(): void {
    this.getPurchaseHistoryMockup();

    this.getPagination();
  }

  getPurchaseHistoryMockup() {
    for (let x = 1; x <= 70; x++) {
      this.purchaseHistory.push({
        no: `${x < 10 ? `0${x}` : x}`,
        date: '17/04/2023 8:30 PM',
        detail: '625 Diamonds',
        payment_method: 'Credit Card - Visa',
        amount: '250',
      });
    }
  }

  pageChange(value: any) {
    this.currentPage = value;

    this.itemPerPage = 15;
    this.indexOfLastPost = this.currentPage * this.itemPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.itemPerPage;
    this.purchaseFilter = this.purchaseHistory.slice(
      this.indexOfFirstPost,
      this.indexOfLastPost
    );
  }

  getPagination() {
    this.purchaseFilter = this.purchaseHistory.slice(
      this.indexOfFirstPost,
      this.indexOfLastPost
    );
    for (
      let i = 1;
      i <= Math.ceil(this.purchaseHistory.length / this.itemPerPage);
      i++
    ) {
      this.pageNumber.push(i);
    }
  }

  handlePageNumberValue(event: any) {
    const pageNumberValue = Number(event.target.value);

    if (event.keyCode === 13) {
      if (pageNumberValue > this.pageNumber.length) {
        this.currentPage = this.pageNumber.length;
        this.pageChange(this.currentPage);
      } else {
        this.pageChange(this.currentPage);
      }
    } else {
      this.currentPage = pageNumberValue;
    }
  }
}
