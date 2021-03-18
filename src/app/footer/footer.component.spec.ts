import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.repo="https://github.com/MSoleti/AngularApp";
    fixture.detectChanges();
  });

  it('Component create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Github title', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a[href]').textContent).toContain('GitHub Repository');
  });

  it('should render Github link', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a[href="https://github.com/MSoleti/AngularApp"]')).toBeTruthy();
  });
});