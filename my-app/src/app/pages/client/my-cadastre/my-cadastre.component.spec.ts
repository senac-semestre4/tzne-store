import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCadastreComponent } from './my-cadastre.component';

describe('MyCadatreComponent', () => {
  let component: MyCadastreComponent;
  let fixture: ComponentFixture<MyCadastreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCadastreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCadastreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
