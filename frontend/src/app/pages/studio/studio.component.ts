import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../reusable/title/title.component';
import { GalleryComponent } from './gallery/gallery.component';
import { http } from '../../../httpConnection';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [TitleComponent, GalleryComponent, CommonModule],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.scss',
})
export class StudioComponent implements OnInit {
  header!: string;
  text: string[] = [];
  images: string[] = [];

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    const req = `studio?populate=Gallery`;
    let data: any = await http.getAttributes(req);

    this.header = data.Header;
    this.text = data.Description.split('\n');
    data.Gallery.data.forEach((el: any) => {
      this.images.push(http.getURL() + el.attributes.url);
    });
  }
}
