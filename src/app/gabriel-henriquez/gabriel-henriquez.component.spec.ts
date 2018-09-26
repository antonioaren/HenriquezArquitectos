import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabrielHenriquezComponent } from './gabriel-henriquez.component';

describe('GabrielHenriquezComponent', () => {
  let component: GabrielHenriquezComponent;
  let fixture: ComponentFixture<GabrielHenriquezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabrielHenriquezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabrielHenriquezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
