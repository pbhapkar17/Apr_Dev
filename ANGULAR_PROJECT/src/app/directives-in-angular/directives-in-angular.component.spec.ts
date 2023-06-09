import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesInAngularComponent } from './directives-in-angular.component';

describe('DirectivesInAngularComponent', () => {
  let component: DirectivesInAngularComponent;
  let fixture: ComponentFixture<DirectivesInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesInAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
