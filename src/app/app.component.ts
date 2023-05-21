import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { Item } from './item';
import { BannerService } from './banner.service';
import { BannerDirective } from './banner.directive';
import { AddComponent } from './add.component';
import { createCustomElement } from '@angular/elements';
import { CustomComponent } from './custom/custom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public bannerService: BannerService, injector: Injector) {
    const myComponent = createCustomElement(CustomComponent, { injector });
    customElements.define('my-component', myComponent);
  }
  itemsList: Item[] = [];
  intervalId = 0;
  currentIndex = -1;
  @ViewChild(BannerDirective, { static: true }) content!: BannerDirective;
  ngOnInit(): void {
    this.itemsList = this.bannerService.getItems();
    this.startLoadingComponent();
  }

  private startLoadingComponent() {
    const interval = setInterval(() => {
      this.loadComponent();
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
    }, this.itemsList.length * 2000);
  }

  private loadComponent() {
    this.currentIndex++;
    const currentItem = this.itemsList[this.currentIndex];
    const viewContainer = this.content.ViewContainerRef;
    viewContainer.clear;
    const componentContainer = viewContainer.createComponent<AddComponent>(
      currentItem.component
    );
    componentContainer.instance.data = currentItem.data;
  }
}
