import { HttpHeaders } from '@angular/common/http';

export class Endpoint {
  public static get HTTP_OPTIONS_JSON(): {} { 
    var headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return {headers: headers}; 
  };
  public static get WEB_SERVICE_AUTHENTICATION(): string { return 'http://localhost:8081'; };
  public static get WEB_SERVICE_FILE(): string { return 'http://localhost:8080/web-service-file'; };
}
