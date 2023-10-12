import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExArticleComponent } from './ex-article.component';

describe('ExArticleComponent', () => {
  let component: ExArticleComponent;
  let fixture: ComponentFixture<ExArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExArticleComponent]
    });
    fixture = TestBed.createComponent(ExArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
