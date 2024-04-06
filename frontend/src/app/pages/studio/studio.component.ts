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

  getData() {
    this.header = 'STUDIO';
    this.text = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis enim nec augue tincidunt, ut volutpat turpis pharetra. Pellentesque non cursus velit, id suscipit elit. Nullam facilisis mauris purus, vitae volutpat lacus blandit eu. Nunc ac massa eget est mollis tempus fringilla nec leo. Curabitur tempus nisl non nulla cursus, a finibus ante interdum. Sed convallis, massa nec elementum lacinia, nibh nunc pulvinar nisi, tincidunt lobortis magna libero non leo. Nullam dapibus volutpat dolor ut ultrices. Etiam eget metus a dolor ultrices consequat. Sed non diam nibh. Pellentesque maximus et erat non auctor. Integer sagittis maximus neque, at pellentesque nulla consequat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam interdum auctor sapien et elementum.',
      'Integer tincidunt enim sit amet leo tincidunt, et sodales ligula fermentum. Etiam sed lectus et ligula porttitor condimentum sed a neque. Donec et lorem commodo, dapibus nisl id, ultrices nibh. Cras eget volutpat nisi. Suspendisse potenti. Aenean elementum ornare mi, vel maximus quam rutrum nec. In eleifend varius nisl id consectetur. In vehicula lectus vitae erat porttitor semper. Quisque bibendum, metus in dignissim pretium, est nulla ornare magna, in dictum nulla mi sed lorem. Nulla suscipit aliquet tellus, eget rutrum ante euismod non. Nullam eget odio ante. Curabitur vitae rutrum diam. Donec vel libero ultrices, cursus ex quis, vestibulum dolor. Quisque pellentesque eros velit, non consequat sem aliquet a.',
      'Curabitur et malesuada nunc. Fusce convallis, quam at sagittis ultrices, libero nulla viverra orci, nec sodales velit nibh lacinia erat. Vivamus odio ante, aliquam vitae tincidunt sed, tincidunt at augue. Vivamus consectetur pulvinar faucibus. Curabitur fermentum, ante ut dapibus viverra, nunc lacus commodo purus, ac ornare quam sapien at leo. Nunc quis commodo mi. Curabitur at vulputate lorem. Duis est massa, porttitor non lorem quis, cursus eleifend est. Aenean sollicitudin egestas dapibus.',
    ];

    this.images.push('/assets/images/img1.jpg');
    this.images.push('/assets/images/img1.jpg');
    this.images.push('/assets/images/img1.jpg');
    this.images.push('/assets/images/img1.jpg');
    this.images.push('/assets/images/img1.jpg');
  }
}
