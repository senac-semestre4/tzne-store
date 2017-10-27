import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccessComponent } from './my-access.component';

describe('MyAccessComponent', () => {
  let component: MyAccessComponent;
  let fixture: ComponentFixture<MyAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
