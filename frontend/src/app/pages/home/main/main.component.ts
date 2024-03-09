import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  selectedSrc = 'assets/images/img1.jpg';

  NewImg(newSrc: string) {
    this.selectedSrc = newSrc;
  }
}
