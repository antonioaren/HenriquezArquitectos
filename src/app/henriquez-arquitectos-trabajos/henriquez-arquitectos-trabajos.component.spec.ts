import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenriquezArquitectosTrabajosComponent } from './henriquez-arquitectos-trabajos.component';

describe('HenriquezArquitectosTrabajosComponent', () => {
  let component: HenriquezArquitectosTrabajosComponent;
  let fixture: ComponentFixture<HenriquezArquitectosTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenriquezArquitectosTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenriquezArquitectosTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
