import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TitleComponent } from '../../reusable/title/title.component';
import { InfoComponent } from './info/info.component';
import { JamAndYtComponent } from './jam-and-yt/jam-and-yt.component';
import { ContactComponent } from './contact/contact.component';

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
export class HomeComponent {}
