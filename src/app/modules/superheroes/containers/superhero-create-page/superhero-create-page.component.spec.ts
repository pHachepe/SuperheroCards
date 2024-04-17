import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroCreatePageComponent } from './superhero-create-page.component';

describe('SuperheroCreatePageComponent', () => {
  let component: SuperheroCreatePageComponent;
  let fixture: ComponentFixture<SuperheroCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroCreatePageComponent]
    });
    fixture = TestBed.createComponent(SuperheroCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
