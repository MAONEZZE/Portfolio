import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent {
  @Input() img: String = '';

  currentIndex = 0;
  slides = document.querySelectorAll('.carousel-slide') as NodeListOf<HTMLDivElement>;
  container = document.querySelector('.carousel-container') as HTMLDivElement;
  totalSlides = this.slides.length;

  goToSlide(index: number) {
    this.currentIndex = index;
    const offset = -this.currentIndex * 100;
    this.container.style.transform = `translateX(${offset}%)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.goToSlide(this.currentIndex);
  }

  prevSlide(){
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(this.currentIndex);
  }
}

