import { Component } from '@angular/core';
import { TitleComponent } from '../../reusable/title/title.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [TitleComponent, GalleryComponent],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.scss'
})
export class StudioComponent {

}
