import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }


  getRepos(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
 
}
