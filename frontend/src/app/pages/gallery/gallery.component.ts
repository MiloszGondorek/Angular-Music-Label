import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../reusable/title/title.component';
import { CommonModule } from '@angular/common';

import { http } from '../../../httpConnection';

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

  async getData() {
    const req = `gallery?populate=Images`;
    let data: any = await http.getAttributes(req);

    this.header = data.Header;

    data.Images.data.forEach((el: any) => {
      this.images.push(http.getURL() + el.attributes.url);
    });
  }

  showImg(src: string) {
    this.currentSrc = src;
  }

  hideImg() {
    this.currentSrc = '';
  }
}
