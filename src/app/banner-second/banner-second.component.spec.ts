import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSecondComponent } from './banner-second.component';

describe('BannerSecondComponent', () => {
  let component: BannerSecondComponent;
  let fixture: ComponentFixture<BannerSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerSecondComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
