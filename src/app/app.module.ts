import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerFirstComponent } from './banner-first/banner-first.component';
import { BannerSecondComponent } from './banner-second/banner-second.component';
import { BannerDirective } from './banner.directive';
import { CustomComponent } from './custom/custom.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerFirstComponent,
    BannerSecondComponent,
    BannerDirective,
    CustomComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
