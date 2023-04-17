import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConceptsPracticeComponent } from './angular-concepts-practice.component';

describe('AngularConceptsPracticeComponent', () => {
  let component: AngularConceptsPracticeComponent;
  let fixture: ComponentFixture<AngularConceptsPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularConceptsPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConceptsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
