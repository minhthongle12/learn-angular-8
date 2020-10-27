import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap1Component } from './bai-tap1.component';

describe('BaiTap1Component', () => {
  let component: BaiTap1Component;
  let fixture: ComponentFixture<BaiTap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
