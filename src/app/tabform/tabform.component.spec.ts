import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabformComponent } from './tabform.component';

describe('TabformComponent', () => {
  let component: TabformComponent;
  let fixture: ComponentFixture<TabformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
