import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() src: string[] = [];

  currentSrc: string = '';
  showImg(src: string) {
    this.currentSrc = src;
  }

  hideImg() {
    this.currentSrc = '';
  }
}
