
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app component', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('should have all the button', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.innerHTML).toContain('Button with no theme');
    expect(element.innerHTML).toContain('Button with the primary theme');
    expect(element.innerHTML).toContain('Button with accent theme');
    expect(element.innerHTML).toContain('Button with alert theme');
  });

  it('should have a message with `warn`', () => {
  //  expect(component.buttonClicked).toHaveBeenCalled('');
  });

  it('should be on location "app"', () => {
   // expect(location.pathname()).toEqual("");
  });
});
