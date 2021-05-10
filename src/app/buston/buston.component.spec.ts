import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BustonComponent } from './buston.component';

describe('BustonComponent', () => {
  let component: BustonComponent;
  let fixture: ComponentFixture<BustonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BustonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
