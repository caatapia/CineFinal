import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageableRequest } from '../clases/pageable-request';
import { PagedResponseDto } from '../clases/paged-response.dto';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService<T> {

  protected apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public getData(pageable: PageableRequest): Observable<PagedResponseDto<T>> {
    let params = new HttpParams();
    params = params.set('page', pageable.page.toString());
    params = params.set('size', pageable.size.toString());
    params = params.set('sort', pageable.sort);

    return this.http.get<PagedResponseDto<T>>(`${this.apiUrl}`, { params });
  }
}
