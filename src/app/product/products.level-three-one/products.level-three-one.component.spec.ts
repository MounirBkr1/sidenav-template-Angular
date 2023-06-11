import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products.LevelThreeOneComponent } from './products.level-three-one.component';

describe('Products.LevelThreeOneComponent', () => {
  let component: Products.LevelThreeOneComponent;
  let fixture: ComponentFixture<Products.LevelThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Products.LevelThreeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Products.LevelThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
