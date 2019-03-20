import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LogService } from './log.service';
import { Endpoint } from '../_config/endpoint';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  readonly httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient, private logService: LogService) { }

  openFile(filePath: string): Observable<any> {
    var url = Endpoint.WEB_SERVICE_FILE  + "/open";
    return this.http.post(url, filePath, this.httpOptions)
      .pipe(retry(1), 
        catchError(error => { 
          return this.logService.handleErrorThrowError(this.logService.logMessage(url, "Failed to post to web-service-file"), error)
        })
      );
  }

  setUserFilePath(userFilePath: string) {
    localStorage.setItem("userFilePath", userFilePath);
  }

  getUserFilePath(): string {
    return localStorage.getItem("userFilePath");
  }

  hasUserFilePath(): boolean {
    if (!this.getUserFilePath() || this.getUserFilePath() == 'undefined') {
      return false;
    } 
    return true;
  }

  removeUserFilePath(): void {
    localStorage.removeItem("userFilePath");
  }

}
