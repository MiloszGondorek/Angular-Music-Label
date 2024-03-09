import { Component } from '@angular/core';
import { TitleComponent } from '../../reusable/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  currentSrc: string = '';

  images: string[] = [
    'assets/images/img1.jpg',
    'assets/images/img2.jpg',
    'assets/images/img3.jpg',
    'assets/images/img4.jpg',

    'assets/images/img4.jpg',
    'assets/images/img3.jpg',
    'assets/images/img2.jpg',
    'assets/images/img1.jpg',

    'assets/images/img1.jpg',
    'assets/images/img2.jpg',
    'assets/images/img3.jpg',
    'assets/images/img4.jpg',

    'assets/images/img4.jpg',
    'assets/images/img3.jpg',
    'assets/images/img2.jpg',
    'assets/images/img1.jpg',

    'assets/images/img1.jpg',
    'assets/images/img2.jpg',
    'assets/images/img3.jpg',
    'assets/images/img4.jpg',

    'assets/images/img4.jpg',
    'assets/images/img3.jpg',
    'assets/images/img2.jpg',
    'assets/images/img1.jpg',

    'assets/images/img1.jpg',
    'assets/images/img2.jpg',
    'assets/images/img3.jpg',
    'assets/images/img4.jpg',

    'assets/images/img4.jpg',
    'assets/images/img3.jpg',
    'assets/images/img2.jpg',
    'assets/images/img1.jpg',
  ];

  showImg(src: string) {
    this.currentSrc = src;
  }
  hideImg() {
    this.currentSrc = '';
  }
}
