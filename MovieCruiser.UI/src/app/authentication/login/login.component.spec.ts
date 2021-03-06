// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {LoginComponent} from './login.component';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Injectable()
class MockAuthenticationService { }
      
@Injectable()
class MockRouter {  }
      
describe('LoginComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        {provide: AuthenticationService, useClass: MockAuthenticationService},
        {provide: Router, useClass: MockRouter},
        MatSnackBar,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });
  
    
  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });
        
  it('should run #loginUser()', async () => {
    // const result = component.loginUser();
  });
        
});
