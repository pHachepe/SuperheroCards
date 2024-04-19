import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroFormComponent } from './superhero-form.component';

describe('SuperheroFormComponent', () => {
  let component: SuperheroFormComponent;
  let fixture: ComponentFixture<SuperheroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroFormComponent]
    });
    fixture = TestBed.createComponent(SuperheroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
