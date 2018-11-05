import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
export const TOKEN_NAME:string = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authSvcEndpoint: string;
  token: string;

  constructor(private httpClient: HttpClient) { 
    this.authSvcEndpoint = 'http://localhost:8081/api/auth'
  }

  registerUser(user: User) {
    return this.httpClient.post(this.authSvcEndpoint+"/registeruser", user);
  }

  loginUser(user: User) {
    return this.httpClient.post<string>(this.authSvcEndpoint+"/login", user);
  }

  setToken(token: string) {
    return localStorage.setItem(TOKEN_NAME, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  removeToken() {
    return localStorage.removeItem(TOKEN_NAME);
  }

  isTokenExpired(token?: string) {
    if(!token) token = this.getToken();
    if(!token) return true;
    const date = this.getTokenExpirationDate(token);
    if(date === undefined || date === null) return false;
    return !(date.valueOf() > new Date().valueOf())
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if(decoded.exp === undefined) return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
}
