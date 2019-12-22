import {Injectable} from '@angular/core';
import {apiUrl} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RemoteFile} from '../models/RemoteFile';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private apiUrl = `http://localhost:8080/storage`;
  private fileKey = 'file';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    })
  };

  constructor(private http: HttpClient) {
  }

  postFile(file: File, id: string | number): Observable<RemoteFile> {
    const formData = new FormData();
    formData.append(this.fileKey, file, file.name);

    return this.http
      .post<RemoteFile>(`http://localhost:8080/storage/save/${id}`, formData, this.httpOptions);
  }

  getAll() {
    return this.http.get<RemoteFile[]>(`http://localhost:8080`, this.httpOptions);
  }
}
