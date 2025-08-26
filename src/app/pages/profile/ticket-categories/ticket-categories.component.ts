import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-categories',
  templateUrl: './ticket-categories.component.html',
  styleUrls: ['./ticket-categories.component.scss'],
})
export class TicketCategoriesComponent implements OnInit {
  ticketCategories: any = [];
  ticketCategoriesFilter: any = [];

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
      this.ticketCategories.push({
        no: `${x < 10 ? `0${x}` : x}`,
        ticket_no: `GA000000${x < 10 ? `0${x}` : x}`,
        create_date: '17/04/2023 8:30 PM',
        subject: "Subject about game function",
        status: "Completed"
      });
    }
  }

  pageChange(value: any) {
    this.currentPage = value;

    this.itemPerPage = 15;
    this.indexOfLastPost = this.currentPage * this.itemPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.itemPerPage;
    this.ticketCategoriesFilter = this.ticketCategories.slice(
      this.indexOfFirstPost,
      this.indexOfLastPost
    );
  }

  getPagination() {
    this.ticketCategoriesFilter = this.ticketCategories.slice(
      this.indexOfFirstPost,
      this.indexOfLastPost
    );
    for (
      let i = 1;
      i <= Math.ceil(this.ticketCategories.length / this.itemPerPage);
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
