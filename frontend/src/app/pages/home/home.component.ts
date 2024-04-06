import { Component, OnInit } from '@angular/core';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TitleComponent } from '../../reusable/title/title.component';
import { InfoComponent } from './info/info.component';
import { JamAndYtComponent } from './jam-and-yt/jam-and-yt.component';
import { ContactComponent, MapData } from './contact/contact.component';
import { http } from '../../../httpConnection';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    GalleryComponent,
    TitleComponent,
    InfoComponent,
    JamAndYtComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  helloText!: string;
  helloSrc: string[] = [];
  helloFirst!: string;

  aboutDesc: string[] = [];

  galleryImg: string[] = [];

  lessonDesc: string[] = [];

  lessonButtonText!: string;
  lessonButtonLink!: string;

  jamHeader!: string;
  jamLink!: string;
  jamDesc: string[] = [];

  ytHeader!: string;
  ytLink!: string;
  ytDesc: string[] = [];

  ytButtonText!: string;
  ytButtonLink!: string;

  mapHeader!: string;
  mapData: MapData[] = [];
  mapSrc!: string;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // const req = `home-page?populate=*`;
    // let data: any = await http.getAttributes(req);
    this.helloText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque quis velit tempor, commodo vehicula turpis tincidunt';

    this.helloFirst = '/assets/images/img1.jpg';
    this.helloSrc.push('/assets/images/img1.jpg');
    this.helloSrc.push('/assets/images/img2.jpg');
    this.helloSrc.push('/assets/images/img3.jpg');
    this.helloSrc.push('/assets/images/img4.jpg');

    this.aboutDesc = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque quis velit tempor, commodo vehicula turpis tincidunt. Integer eros enim, lobortis quis posuere mattis, accumsan vel nisl. Praesent eleifend velit maximus, eleifend mauris et, ullamcorper urna. Sed mauris tellus, lacinia id sem at, convallis eleifend libero. Mauris rutrum sed leo et vestibulum. Aliquam molestie sed eros at faucibus. Phasellus sed ex magna.',
      'Ut sem augue, auctor nec accumsan non, feugiat nec lacus. In non leo eget mi sagittis lacinia a ac tellus. Suspendisse quis urna eu tortor interdum hendrerit. Aenean velit enim, suscipit eu varius sed, aliquet ut enim. Morbi sollicitudin faucibus ex. Proin convallis quis felis eget condimentum. Phasellus et est eget est vestibulum tempus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan lacus in mauris fringilla, eu pharetra felis sollicitudin. Curabitur et nibh interdum, malesuada urna non, lobortis ex.',
    ];
    this.galleryImg.push('/assets/images/img1.jpg');
    this.galleryImg.push('/assets/images/img2.jpg');
    this.galleryImg.push('/assets/images/img3.jpg');
    this.galleryImg.push('/assets/images/img4.jpg');
    this.galleryImg.push('/assets/images/img5.jpg');
    this.galleryImg.push('/assets/images/img2.jpg');

    this.lessonDesc = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque quis velit tempor, commodo vehicula turpis tincidunt. Integer eros enim, lobortis quis posuere mattis, accumsan vel nisl. Praesent eleifend velit maximus, eleifend mauris et, ullamcorper urna. Sed mauris tellus, lacinia id sem at, convallis eleifend libero. Mauris rutrum sed leo et vestibulum. Aliquam molestie sed eros at faucibus. Phasellus sed ex magna.',
      'Ut sem augue, auctor nec accumsan non, feugiat nec lacus. In non leo eget mi sagittis lacinia a ac tellus. Suspendisse quis urna eu tortor interdum hendrerit. Aenean velit enim, suscipit eu varius sed, aliquet ut enim. Morbi sollicitudin faucibus ex. Proin convallis quis felis eget condimentum. Phasellus et est eget est vestibulum tempus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan lacus in mauris fringilla, eu pharetra felis sollicitudin. Curabitur et nibh interdum, malesuada urna non, lobortis ex.',
    ];

    this.jamDesc = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque quis velit tempor, commodo vehicula turpis tincidunt. Integer eros enim, lobortis quis posuere mattis, accumsan vel nisl. Praesent eleifend velit maximus, eleifend mauris et, ullamcorper urna. Sed mauris tellus, lacinia id sem at, convallis eleifend libero. Mauris rutrum sed leo et vestibulum. Aliquam molestie sed eros at faucibus. Phasellus sed ex magna.',
      'Ut sem augue, auctor nec accumsan non, feugiat nec lacus. In non leo eget mi sagittis lacinia a ac tellus. Suspendisse quis urna eu tortor interdum hendrerit. Aenean velit enim, suscipit eu varius sed, aliquet ut enim. Morbi sollicitudin faucibus ex. Proin convallis quis felis eget condimentum. Phasellus et est eget est vestibulum tempus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan lacus in mauris fringilla, eu pharetra felis sollicitudin. Curabitur et nibh interdum, malesuada urna non, lobortis ex.',
    ];

    this.ytDesc = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque quis velit tempor, commodo vehicula turpis tincidunt. Integer eros enim, lobortis quis posuere mattis, accumsan vel nisl. Praesent eleifend velit maximus, eleifend mauris et, ullamcorper urna. Sed mauris tellus, lacinia id sem at, convallis eleifend libero. Mauris rutrum sed leo et vestibulum. Aliquam molestie sed eros at faucibus. Phasellus sed ex magna.',
      'Ut sem augue, auctor nec accumsan non, feugiat nec lacus. In non leo eget mi sagittis lacinia a ac tellus. Suspendisse quis urna eu tortor interdum hendrerit. Aenean velit enim, suscipit eu varius sed, aliquet ut enim. Morbi sollicitudin faucibus ex. Proin convallis quis felis eget condimentum. Phasellus et est eget est vestibulum tempus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ];

    this.mapData.push(
      new MapData('/assets/icons/place.svg', 'Sosnowiec', 'Tuwima 20/29 41-208')
    );
    this.mapData.push(
      new MapData(
        '/assets/icons/mail.svg',
        'E-mail',
        'm.gondorek.kontakt@gmail.com'
      )
    );
    this.mapData.push(
      new MapData('/assets/icons/telephone.svg', 'Telephone', '607 761 708')
    );
    // const req2 = `home-page?populate=MapBox.Image`;
    // data = await http.getAttributes(req2);

    // this.mapHeader = data.Map_header;
    // this.mapSrc = data.MapLink;
    // const mapElementsData = data.MapBox;
    // mapElementsData.forEach((el: any) => {
    //
    // });
  }
}
