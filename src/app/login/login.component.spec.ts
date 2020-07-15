/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from '../_services/auth.service';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService : AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ FormsModule ],
      providers:[
        authService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('form invalid when empty', () => {
    let emailValidationError: DebugElement;

    fixture.detectChanges(); // run change detection
    emailValidationError = fixture.debugElement.query(By.css('.validation-error'));

    // the validation error should be found:
    expect(emailValidationError).toBeTruthy();
    //expect(component.form.valid).toBeFalsy();
  });
});
