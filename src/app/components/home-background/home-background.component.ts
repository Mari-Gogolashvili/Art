import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-background',
  templateUrl: './home-background.component.html',
  styleUrls: ['./home-background.component.css'],
})
export class HomeBackgroundComponent implements OnInit {
  bgVariable: boolean = false;
  ngOnInit(): void {}
  @HostListener('document:scroll')
  OnScroll() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop >60
    ) {
      this.bgVariable = true;
    } else {
      this.bgVariable = false;
    }
  }
}
