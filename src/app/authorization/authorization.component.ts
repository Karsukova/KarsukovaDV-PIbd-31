import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {CanActivate, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent implements OnInit {


  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }
  ngOnInit() {
  }
  signIn() {

    const val = this.form.value;

    if (val.password && val.username) {
      this.authService.signIn(val.username, val.password)
        .subscribe(
          () => {
            this.router.navigateByUrl(`/ad`);
          }
        );
    }
  }
}
