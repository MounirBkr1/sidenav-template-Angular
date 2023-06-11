import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products.LevelThreeTwoComponent } from './products.level-three-two.component';

describe('Products.LevelThreeTwoComponent', () => {
  let component: Products.LevelThreeTwoComponent;
  let fixture: ComponentFixture<Products.LevelThreeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Products.LevelThreeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Products.LevelThreeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
