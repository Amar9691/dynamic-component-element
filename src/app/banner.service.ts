import {
  Injectable,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';
import { Item } from './item';
import { BannerFirstComponent } from './banner-first/banner-first.component';
import { BannerSecondComponent } from './banner-second/banner-second.component';
import { NgElement } from '@angular/elements';
import { CustomComponent } from './custom/custom.component';
import { WithProperties } from '@angular/elements';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor() {}

  getItems() {
    return [
      new Item(BannerFirstComponent, {
        message: 'Banner first component loaded',
      }),
      new Item(BannerSecondComponent, {
        message: 'Banner first component loaded',
      }),
    ];
  }

  createCustElement() {
    const pE: NgElement & WithProperties<CustomComponent> =
      document.createElement('my-component') as any;
    pE.data = {
      name: 'Amar',
      result: 'password',
      address: 'Antri, Madhya Pradesh',
      cell: 123456789,
    };
    document.body.appendChild(pE);
  }
}
