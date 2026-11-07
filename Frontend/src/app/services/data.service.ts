import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable, retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(url: string) {
    return this.http.get(`${this.API_URI}` + url);
  }

  getOne(id: string | number, url: string) {
    return this.http.get<any>(`${this.API_URI}` + url + `/${id}`);
  }

  delete(id: number, url: string) {
    return this.http.delete(`${this.API_URI}` + url + `/${id}`);
  }

  update(id: string | number, updated: any, url: string): Observable<any> {
    return this.http.post<any>(`${this.API_URI}` + url + `/${id}`, this.cleanData(updated));
  }

  save(data: any, url: string) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.API_URI}` + url, JSON.stringify(this.cleanData(data)), { headers: headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error?.sqlMessage || error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }

  // Los campos que quedan vacíos en el formulario se envían como null
  // (MySQL rechaza '' en columnas de fecha o numéricas)
  private cleanData(data: any) {
    const clean: any = {};
    for (const key of Object.keys(data)) {
      clean[key] = data[key] === '' ? null : data[key];
    }
    return clean;
  }

}
