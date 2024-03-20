import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-jam-and-yt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jam-and-yt.component.html',
  styleUrl: './jam-and-yt.component.scss',
})
export class JamAndYtComponent implements OnChanges {
  @Input() jamHeader!: string;
  @Input() jamDesc: string[] = [];
  @Input() jamSrc!: string;
  jamLink!: SafeResourceUrl;

  @Input() ytHeader!: string;
  @Input() ytDesc: string[] = [];
  @Input() ytSrc!: string;
  ytLink!: SafeResourceUrl;

  @Input() buttonText!: string;
  @Input() buttonLink!: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['jamSrc']) {
      this.jamLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.jamSrc);
    }
    if (changes['ytSrc']) {
      this.ytLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.ytSrc);
    }
  }
}
