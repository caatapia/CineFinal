import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Director } from '../clases/director';
import { DataServiceService} from './data-service.service';
import { PageableRequest } from '../clases/pageable-request';

@Injectable({
  providedIn: 'root'
})
export class DirectorServiceService extends DataServiceService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = 'http://localhost:8080/api/peliculas'; // URL específica para la entidad "Director"
  }
}
