import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { PaginationnParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getProducts = (
    url: string,
    params: PaginationnParams
  ): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  addProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteProduct = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
