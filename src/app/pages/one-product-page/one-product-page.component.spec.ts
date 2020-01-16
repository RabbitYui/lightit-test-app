import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProductPageComponent } from './one-product-page.component';

describe('OneProductPageComponent', () => {
  let component: OneProductPageComponent;
  let fixture: ComponentFixture<OneProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
