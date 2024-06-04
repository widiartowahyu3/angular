import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {} // making rest api from specific url
  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get(url, options) as Observable<T>;
  }
}
