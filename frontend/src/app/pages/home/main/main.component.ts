import { Component, Input, OnInit } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @Input() selectedSrc = '';

  @Input() header!: string;
  @Input() headerSpan!: string;
  @Input() desc!: string;

  @Input() img: string[] = [];

  NewImg(newSrc: string) {
    this.selectedSrc = newSrc;
  }
}
