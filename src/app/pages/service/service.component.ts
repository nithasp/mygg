import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  

  ngOnInit(): void {
    this.serviceActive();
  }

  serviceActive() {
    const services = document.querySelectorAll('.service-routing .service');
    services.forEach((service) => {
      service.addEventListener('click', () => {
        services.forEach((AllService) => {
          AllService.classList.remove('active');
        });
        service.classList.add('active');
      });
    });
  }
}
