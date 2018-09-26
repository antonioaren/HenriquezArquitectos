import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JorgeHenriquezComponent } from './jorge-henriquez.component';

describe('JorgeHenriquezComponent', () => {
  let component: JorgeHenriquezComponent;
  let fixture: ComponentFixture<JorgeHenriquezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JorgeHenriquezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JorgeHenriquezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
