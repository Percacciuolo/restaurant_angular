import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProjComponent } from './details-proj.component';

describe('DetailsProjComponent', () => {
  let component: DetailsProjComponent;
  let fixture: ComponentFixture<DetailsProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
