import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() src: string[] = [];

  selectedSrc = 'assets/images/img1.jpg';
  currentId = 0;

  @Output() srcEmit = new EventEmitter<any>();

  changeImg(newSrc: string) {
    this.selectedSrc = newSrc;
    this.srcEmit.emit(newSrc);
  }

  moveRight() {
    this.currentId++;
    if (this.currentId >= this.src.length) {
      this.currentId = 0;
    }
    this.changeImg(this.src[this.currentId]);
  }

  moveLeft() {
    this.currentId--;
    if (this.currentId < 0) {
      this.currentId = this.src.length - 1;
    }
    this.changeImg(this.src[this.currentId]);
  }

  clickSelect(newSrc: string) {
    this.currentId = this.getSrcId(newSrc);
    this.changeImg(newSrc);
  }

  getSrcId(src: string) {
    return this.src.findIndex((a) => a == src);
  }
}
