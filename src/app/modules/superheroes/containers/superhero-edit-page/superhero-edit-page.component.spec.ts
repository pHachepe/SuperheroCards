import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroEditPageComponent } from './superhero-edit-page.component';

describe('SuperheroEditPageComponent', () => {
  let component: SuperheroEditPageComponent;
  let fixture: ComponentFixture<SuperheroEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroEditPageComponent]
    });
    fixture = TestBed.createComponent(SuperheroEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
