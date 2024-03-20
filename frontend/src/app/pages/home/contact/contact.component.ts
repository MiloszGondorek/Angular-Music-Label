import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input() header!: string;
  @Input() data: MapData[] = [];
  @Input() mapSrc!: string;
  mapLink!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mapSrc']) {
      this.mapLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapSrc);
    }
  }
}

export class MapData {
  img!: string;
  header!: string;
  desc!: string;
  constructor(img: string, header: string, desc: string) {
    this.img = img;
    this.header = header;
    this.desc = desc;
  }
}
