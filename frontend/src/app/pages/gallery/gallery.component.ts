import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../reusable/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  currentSrc: string = '';

  images: string[] = [];
  header!: string;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.images.push('/assets/images/fb.png');
    this.header = 'Gallery';
  }

  showImg(src: string) {
    this.currentSrc = src;
  }

  hideImg() {
    this.currentSrc = '';
  }
}
