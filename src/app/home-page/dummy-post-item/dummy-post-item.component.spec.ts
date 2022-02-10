import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPostItemComponent } from './dummy-post-item.component';

describe('DummyPostItemComponent', () => {
  let component: DummyPostItemComponent;
  let fixture: ComponentFixture<DummyPostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
