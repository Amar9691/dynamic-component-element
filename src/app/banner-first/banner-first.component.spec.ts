import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFirstComponent } from './banner-first.component';

describe('BannerFirstComponent', () => {
  let component: BannerFirstComponent;
  let fixture: ComponentFixture<BannerFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
