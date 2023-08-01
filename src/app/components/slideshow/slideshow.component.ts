import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit {
  @Input() searchText = ''
  @Output() search= new EventEmitter<string>();
  slides = [
    { image: '../../../assets/images/s1.jpg' , alt: ''},
    { image: '../../../assets/images/s2.jpg', alt: ''},
    { image: '../../../assets/images/s3.jpg' , alt: ''},
    { image: '../../../assets/images/s5.jpg' , alt: ''},
    { image: '../../../assets/images/s10.jpg', alt: ''},
    { image: '../../../assets/images/s6.jpg' , alt: ''},
    { image: '../../../assets/images/s11.jpg' , alt: ''},
    { image: '../../../assets/images/s7.jpg' , alt: ''},
  ];

  private currentSlide: number = 0;

  ngOnInit() {
    this.showSlides();
  }

  plusSlides(n: number) {
    this.currentSlide += n;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    } else if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
  }

  showSlides() {
    setInterval(() => {
      this.plusSlides(1);
    }, 5000);
  }

  public get currentSlideIndex(): number {
    return this.currentSlide;
  }
  log(){
    console.log("hello")
  }
}
