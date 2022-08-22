import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightformComponent } from './rightform.component';

describe('RightformComponent', () => {
  let component: RightformComponent;
  let fixture: ComponentFixture<RightformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
