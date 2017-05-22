import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoViewComponent } from './processo-view.component';

describe('ProcessoViewComponent', () => {
  let component: ProcessoViewComponent;
  let fixture: ComponentFixture<ProcessoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
