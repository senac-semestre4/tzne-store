import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdressesComponent } from './my-adresses.component';

describe('MyAdressesComponent', () => {
  let component: MyAdressesComponent;
  let fixture: ComponentFixture<MyAdressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
