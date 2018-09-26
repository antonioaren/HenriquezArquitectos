import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenriquezArquitectosComponent } from './henriquez-arquitectos.component';

describe('HenriquezArquitectosComponent', () => {
  let component: HenriquezArquitectosComponent;
  let fixture: ComponentFixture<HenriquezArquitectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenriquezArquitectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenriquezArquitectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
