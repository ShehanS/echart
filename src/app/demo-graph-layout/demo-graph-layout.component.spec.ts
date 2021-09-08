import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGraphLayoutComponent } from './demo-graph-layout.component';

describe('DemoGraphLayoutComponent', () => {
  let component: DemoGraphLayoutComponent;
  let fixture: ComponentFixture<DemoGraphLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoGraphLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGraphLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
