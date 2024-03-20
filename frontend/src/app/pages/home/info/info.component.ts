import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TitleComponent } from '../../../reusable/title/title.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent implements OnChanges {
  @Input() header: string = '';
  @Input() info!: string[];

  videoSrc!: SafeResourceUrl;
  @Input() vSrc!: string;

  @Input() videoFirst: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vSrc']) {
      this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.vSrc);
    }
  }
}
