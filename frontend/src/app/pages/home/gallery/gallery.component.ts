import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  currentSrc = '';
  @Input() images: string[] = [];
  showImg(src: string) {
    this.currentSrc = src;
  }
  hideImg() {
    this.currentSrc = '';
  }
}
