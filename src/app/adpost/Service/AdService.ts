import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiUrl} from '../../../environments/environment';
import {Ad} from '../../Ad';

@Injectable()
export class AdService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Ad[]> {
    return this.http.get<Ad[]>('http://localhost:8080/ad', this.httpOptions);
  }

  save(id: string | number, title: string, start: Date, end: Date): Observable<Response> {
    return this.http.post<Response>('http://localhost:8080/ad', {id, title, start, end}, this.httpOptions);
  }

  delete(id: string | number): Observable<Response> {
    return this.http.get<Response>(`http://localhost:8080/ad${id}`, this.httpOptions);
  }

  search(query: string): Observable<Ad[]> {
    return this.http.get<Ad[]>(`http://localhost:8080/search?text=${query.trim()}`, this.httpOptions);
  }

}
