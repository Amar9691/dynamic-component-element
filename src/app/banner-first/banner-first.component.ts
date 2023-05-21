import { Component, Input } from '@angular/core';
import { AddComponent } from '../add.component';

@Component({
  selector: 'app-banner-first',
  templateUrl: './banner-first.component.html',
  styleUrls: ['./banner-first.component.css'],
})
export class BannerFirstComponent implements AddComponent {
  @Input() data: any;
}
