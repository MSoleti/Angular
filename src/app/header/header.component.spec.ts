import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.username="Madhu Soleti..!";
    component.twitterUrl="https://twitter.com/PostiiveViibes";
    fixture.detectChanges();
  });

  it('create component ', () => {
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').innerHTML).toBe(' Welcome Madhu Soleti..!');
  });
  it('should render Twitter link', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.twitterlink a[href="https://twitter.com/PostiiveViibes"]')).toBeTruthy();
  });
});
