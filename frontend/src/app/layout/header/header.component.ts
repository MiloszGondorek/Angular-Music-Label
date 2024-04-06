import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { http } from '../../../httpConnection';
import { Link } from '../../reusable/Link';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showHeader = false;

  FirstLine: string = '';
  SecondLine: string = '';

  links: Link[] = [];

  ngOnInit(): void {
    this.getData();
  }

  changeVisability() {
    this.showHeader = !this.showHeader;
  }

  getData() {
    this.FirstLine = 'GUITAR';
    this.SecondLine = 'STUDIO';

    this.links.push(new Link('HOME', ''));
    this.links.push(new Link('GALLERY', 'galeria'));
    this.links.push(new Link('STUDIO', 'studio'));
  }
}
