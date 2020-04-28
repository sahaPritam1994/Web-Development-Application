import { Component, OnInit } from '@angular/core';
import { AppConstant } from '../../shared/app-constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  appConstant = AppConstant.FOOTER_INFO;

  constructor() { }

  ngOnInit() {
  }

}
