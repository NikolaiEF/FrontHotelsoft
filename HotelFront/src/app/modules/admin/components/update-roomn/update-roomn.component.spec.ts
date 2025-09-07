import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomnComponent } from './update-roomn.component';

describe('UpdateRoomnComponent', () => {
  let component: UpdateRoomnComponent;
  let fixture: ComponentFixture<UpdateRoomnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRoomnComponent]
    });
    fixture = TestBed.createComponent(UpdateRoomnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
