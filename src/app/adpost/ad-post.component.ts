import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ad} from './../Ad';
import {Observable, Subject} from 'rxjs';
import {StorageService} from './Service/StorageService';
import {RemoteFile} from './models/RemoteFile';
import {AdService} from './Service/AdService';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';



@Component({
  selector: 'app-adpost',
  templateUrl: './ad-post.component.html',
  styleUrls: ['./ad-post.component.less'],
  providers: [HttpClient]
})
export class AdpostComponent implements OnInit {
  files: RemoteFile[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    })
  };
  searchQuery: string;
  queryChanged = new Subject<string>();

  constructor(private http: HttpClient, private storageService: StorageService, private adService: AdService) {
  }

  ngOnInit(): void {
    this.update_list();
    this.files = [];
    this.ads = [];
    this.files = [];
    this.storageService.getAll()
      .subscribe(data => {
        data.forEach(file => {
          this.addNewFile(file.adId, file.url, file.filename);
        });
      });
    this.queryChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(text => this.adService.search(text)
        .subscribe(val => {
          this.ads = val;
        }));
  }

  ads: Array<Ad> = [];
  receivedData: Ad;
  done = false;
  ad: Ad;
  topic: any;
  id: number;
  price: string;
  telnum: any;
  text: any;

  // tslint:disable-next-line:variable-name
  submit(id: number, topic: string, price: string, text: string, telnum: string, user_id: number) {
    console.log(id, topic, price, text, telnum, user_id);
    const ad = new Ad(id, topic, price, text, telnum, user_id);
    const data = JSON.stringify(ad);
    console.log(this.ad);
    this.http.post('http://localhost:8080/ad/', data, this.httpOptions).subscribe(tab => {
        this.update_list();
      }
    );
  }

  delete(id: number) {
    console.log(id);
    this.http.delete('http://localhost:8080/ad/' + id).subscribe(tab => {
      this.update_list();
    });
  }

  update(id: number, topic: string, price: string, text: string, telnum: string) {
    console.log(id);
    let ad = new Ad(id, topic, price, text, telnum, 1);
    this.http.put(`http://localhost:8080/ad/${id}`, ad).subscribe(tab => {
      this.update_list();
    });
  }

  update_list() {
    this.adService.getAll()
      .subscribe(data => {
        /*
        data.forEach(value => {
          this.submit(value.id, value.topic, value.price, value.text, value.telnum, value.user_id);
        });

         */
        this.ads = data;
      });
  }

  onFileChoose(fileInput: any, id: string | number) {
    const file = fileInput.target.files[0];
    console.log(file);
    this.storageService
      .postFile(file, id)
      .subscribe(remoteFile => {
        this.addNewFile(remoteFile.adId, remoteFile.url, remoteFile.filename);
      });
  }

  getFilesByAd(id: string | number) {
    return this.files.filter(value => value.adId === id);
  }

  private addNewFile(adId: string | number, url: string, filename: string) {
    this.files = [
      ...this.files,
      {
        url,
        filename,
        adId
      }
    ];
  }

  changed(query: string) {
    if (query.trim() === '') {
      this.ads = [];
      this.update_list();
      return;
    }
    this.queryChanged.next(query);
  }

  search(query: string): Observable<Ad[]> {
    console.log('s');
    return this.http.get<Ad[]>(`http://localhost:8080/search?title=${query.trim()}`, this.httpOptions);
  }

}

