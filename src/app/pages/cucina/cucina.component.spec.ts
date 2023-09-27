import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucinaComponent } from './cucina.component';

describe('CucinaComponent', () => {
  let component: CucinaComponent;
  let fixture: ComponentFixture<CucinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CucinaComponent]
    });
    fixture = TestBed.createComponent(CucinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
