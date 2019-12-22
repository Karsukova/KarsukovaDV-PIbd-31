import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [HttpClient]

})
export class RegistrationComponent implements OnInit {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    })
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.update_list();
  }
  users: Array<User> = [];
  done = false;
  user: User;
  username: any;
  password: string;
  telnum: any;
  surname: any;

  // tslint:disable-next-line:variable-name
  submit(username: string, surname: string, telnum: string, password: string) {
    console.log(username, surname, telnum, password);
    const user = new User(username, surname, telnum, password);
    const data = JSON.stringify(user);
    console.log(this.user);
    this.http.post('http://localhost:8080/registration', data, this.httpOptions).subscribe(tab => {
      }
    );
  }
  update_list() {
    this.http.get('http://localhost:8080/registration', this.httpOptions).subscribe((response: any) => {
      console.log('response', response);
      this.users = [];
      response.forEach(element => {
        this.users.push(element);
      });
    });
    console.log('debug', this.users);
  }

}
