import { Component, Input } from '@angular/core';
import { AddComponent } from '../add.component';

@Component({
  selector: 'app-banner-second',
  templateUrl: './banner-second.component.html',
  styleUrls: ['./banner-second.component.css'],
})
export class BannerSecondComponent implements AddComponent {
  @Input() data: any;
}
