import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenriquezArquitectosContactoComponent } from './henriquez-arquitectos-contacto.component';

describe('HenriquezArquitectosContactoComponent', () => {
  let component: HenriquezArquitectosContactoComponent;
  let fixture: ComponentFixture<HenriquezArquitectosContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenriquezArquitectosContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenriquezArquitectosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
