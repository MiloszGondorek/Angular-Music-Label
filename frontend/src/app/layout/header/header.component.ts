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

  async getData() {
    const req = `header?populate=Links`;
    let data: any = await http.getAttributes(req);

    this.FirstLine = data.FirstLine;
    this.SecondLine = data.SecondLine;

    data.Links.forEach((el: any) => {
      this.links.push(new Link(el.Name, el.Link));
    });
  }
}
