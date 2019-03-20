import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Constants } from '../_config/constants';
import { LogService } from './log.service';
import { Token } from '../_model/token.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:8080/web-services-authentication/authentication'
  readonly httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  isLoginError: Boolean = false;
  isManualLogout: Boolean = false;
  isAutoLogout: Boolean = false;
  isHackUrl: Boolean = false;

  constructor(private http: HttpClient, private router: Router, 
    private logService: LogService) { }

  userAuthentication(username: string, password: string): Observable<Token> {
    var data = '?username=' + username + '&password=' + password + '&checkPermissionList=true';
    var url = this.rootUrl + data;
    return this.http.get<Token>(url)
      .pipe(retry(1), 
        catchError(this.logService.handleError<Token>(this.logService.logMessage(url, "Can't access web-services-authentication")))
      );
  }

  signin(accessToken: string, sessionUser: string, sessionTimeOut: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('sessionUser', sessionUser);
    localStorage.setItem('sessionTimeOut', sessionTimeOut);
    console.log("AccessToken: " + accessToken + " - SessionUser: " + sessionUser + " - sessionTimeOut: "+ sessionTimeOut);
    this.router.navigate([Constants.HOME_URL]);
  }

  signout(source: String): void {
    if (source == 'manual') {
      this.isManualLogout = true;
    } else if (source == 'auto') {
      this.isAutoLogout = true;
    } else if (source == 'hack') {
      this.isHackUrl = true;
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('sessionUser');
    localStorage.removeItem('sessionTimeOut');
    this.router.navigate([Constants.SIGNIN_URL]);
  }

  initialiseVariables(): void {
    this.isLoginError = false;
    this.isManualLogout = false;
    this.isAutoLogout = false;
    this.isHackUrl = false;
  }
  
  getSessionUser(): string {
    return localStorage.getItem('sessionUser');
  }
}
