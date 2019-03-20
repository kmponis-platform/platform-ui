import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Mapping } from '../_config/mapping';
import { LogService } from './log.service';
import { Token } from '../_model/token.model';
import { Endpoint } from '../_config/endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoginError: Boolean = false;
  isManualLogout: Boolean = false;
  isAutoLogout: Boolean = false;
  isHackUrl: Boolean = false;

  constructor(private http: HttpClient, private router: Router, 
    private logService: LogService) { }

  userAuthentication(username: string, password: string): Observable<Token> {
    var data = '?username=' + username + '&password=' + password;
    var url = Endpoint.WEB_SERVICE_AUTHENTICATION  + "/authentication" + data;
    return this.http.get<Token>(url)
      .pipe(retry(1), 
        catchError(this.logService.handleError<Token>(this.logService.logMessage(url, "Can't access web-service-authentication")))
      );
  }

  signin(accessToken: string, sessionUser: string, sessionTimeOut: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('sessionUser', sessionUser);
    localStorage.setItem('sessionTimeOut', sessionTimeOut);
    console.log("AccessToken: " + accessToken + " - SessionUser: " + sessionUser + " - sessionTimeOut: "+ sessionTimeOut);
    this.router.navigate([Mapping.HOME_URL]);
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
    this.router.navigate([Mapping.SIGNIN_URL]);
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
