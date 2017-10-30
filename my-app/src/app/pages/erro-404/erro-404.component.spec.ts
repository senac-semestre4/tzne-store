import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro404Component } from './erro-404.component';

describe('Erro404Component', () => {
  let component: Erro404Component;
  let fixture: ComponentFixture<Erro404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Erro404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Erro404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
