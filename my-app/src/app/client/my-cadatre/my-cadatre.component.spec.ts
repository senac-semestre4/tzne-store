import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCadatreComponent } from './my-cadatre.component';

describe('MyCadatreComponent', () => {
  let component: MyCadatreComponent;
  let fixture: ComponentFixture<MyCadatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCadatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCadatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
