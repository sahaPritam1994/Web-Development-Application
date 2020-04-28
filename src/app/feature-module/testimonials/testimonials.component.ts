import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials: Array<object>;

  constructor() { }

  ngOnInit() {
    this.testimonials = [
      {
        feedback: `Axelerant is a very good company. The resources of Axelerant are great at work.
        It is good that we are working together with Axelerant.`,
        name: 'Client Name1',
        position: 'CEO',
        company: 'XYZ'
      },
      {
        feedback: 'The resources of Axelerant are great at work.',
        name: 'Client Name2',
        position: 'CTO',
        company: 'PQR'
      },
      {
        feedback: 'It is good that we are working together with Axelerant.',
        name: 'Client Name3',
        position: 'Product Owner',
        company: 'ABC'
      },
      {
        feedback: 'Axelerant is a very good company.',
        name: 'Client Name4',
        position: 'Director',
        company: 'QWE'
      },
      {
        feedback: `Axelerant is a very good company. The resources of Axelerant are great at work.
        It is good that we are working together with Axelerant.`,
        name: 'Client Name5',
        position: 'CEO',
        company: 'POI'
      },
    ];
  }

}
