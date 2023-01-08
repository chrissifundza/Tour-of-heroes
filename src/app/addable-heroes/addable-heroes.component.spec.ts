import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddableHeroesComponent } from './addable-heroes.component';

describe('AddableHeroesComponent', () => {
  let component: AddableHeroesComponent;
  let fixture: ComponentFixture<AddableHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddableHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddableHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
