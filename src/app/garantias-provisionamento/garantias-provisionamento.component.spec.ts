import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiasProvisionamentoComponent } from './garantias-provisionamento.component';

describe('GarantiasProvisionamentoComponent', () => {
  let component: GarantiasProvisionamentoComponent;
  let fixture: ComponentFixture<GarantiasProvisionamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiasProvisionamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiasProvisionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
