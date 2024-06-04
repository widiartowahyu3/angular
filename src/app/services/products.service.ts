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
}
