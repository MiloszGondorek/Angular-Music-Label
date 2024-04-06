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
  helloHeader!: string;
  helloText!: string;
  helloTextColor!: string;
  helloSrc: string[] = [];
  helloFirst!: string;

  aboutHeader!: string;
  aboutLink!: string;
  aboutDesc: string[] = [];

  galleryImg: string[] = [];

  lessonHeader!: string;
  lessonLink!: string;
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

  async getData() {
    const req = `home-page?populate=*`;
    let data: any = await http.getAttributes(req);
    this.helloHeader = data.HelloHeader;
    this.helloTextColor = data.HelloTextColor;
    this.helloText = data.HelloText;

    data.MainImages.data.forEach((el: any) => {
      if (this.helloSrc.length == 0)
        this.helloFirst = http.getURL() + el.attributes.url;
      if (this.helloSrc.length < 4)
        this.helloSrc.push(http.getURL() + el.attributes.url);
    });

    const about = data.AboutUs;
    this.aboutHeader = about.Header;
    this.aboutDesc = about.Description.split('\n');
    this.aboutLink = about.YT_link;

    const gallery = data.Gallery.data;

    gallery.forEach((el: any) => {
      if (this.galleryImg.length < 6) {
        this.galleryImg.push(http.getURL() + el.attributes.url);
      }
    });

    const lessons = data.Lessons;

    this.lessonHeader = lessons.Header;
    this.lessonDesc = lessons.Description.split('\n');
    this.lessonLink = lessons.YT_link;

    const lessonButton = data.Lesson_button;
    this.lessonButtonText = lessonButton.Text;
    this.lessonButtonLink = lessonButton.Link;

    const jam = data.Jam;
    this.jamHeader = jam.Header;
    this.jamDesc = jam.Description.split('\n');
    this.jamLink = jam.YT_link;

    const yt = data.Youtube;
    this.ytHeader = yt.Header;
    this.ytDesc = yt.Description.split('\n');
    this.ytLink = yt.YT_link;

    const ytButton = data.Youtube_button;

    this.ytButtonText = ytButton.Text;
    this.ytButtonLink = ytButton.Link;

    const req2 = `home-page?populate=MapBox.Image`;
    data = await http.getAttributes(req2);

    this.mapHeader = data.Map_header;
    this.mapSrc = data.MapLink;
    const mapElementsData = data.MapBox;
    mapElementsData.forEach((el: any) => {
      this.mapData.push(
        new MapData(
          http.getURL() + el.Image.data.attributes.url,
          el.Header,
          el.Description
        )
      );
    });
  }
}
