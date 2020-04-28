import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  onMobile = false;
  constructor() { }

  ngOnInit() {
  }

  onResize(event) {
    if (event.target.innerWidth < 750) {
      if (!this.onMobile) {
        document.getElementById('links').style.display = 'none';
      }
      this.onMobile = true;
    } else {
      this.onMobile = false;
    }
  }

  toggleIcon(status?) {
    if (status && status === 'close') {
      document.getElementById('links').style.display = 'none';
    } else {
      const element = document.getElementById('links');
      element.style.display = element.style.display === 'block' ? 'none' : 'block';
    }
  }

}
