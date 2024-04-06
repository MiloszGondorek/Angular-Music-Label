import { Component, OnInit } from '@angular/core';
import { http } from '../../../httpConnection';
import { Link } from '../../reusable/Link';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  name!: string;
  links: Link[] = [];

  ngOnInit(): void {
    // this.getData();
  }

  async getData() {
    const req = `footer?populate=Links.Image`;
    let data: any = await http.getAttributes(req);

    this.name = data.Name;

    data.Links.forEach((el: any) => {
      this.links.push(
        new Link(http.getURL() + el.Image.data.attributes.url, el.Link)
      );
    });
  }
}
