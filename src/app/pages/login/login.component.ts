import { LoginServicesService } from './../../services/login-services.service';
import { UserDet } from './../../models/userdet';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userv: LoginServicesService, private _router: Router) {}
  hideHeader: number = 0;
  ngOnInit(): void {
    this.init();
    this.hideHeader = 1;
  }

  init() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  }

  login: UserDet = new UserDet();
  user: string;
  loginUser() {
    console.log(this.login);
    if (this.login.username == null || this.login.password == null) {
      alert('User Nameand Password is Required!');
      return;
    }
    this.user = this.userv.loginService(
      this.login.username,
      this.login.password
    );
    if (this.user == 'admin') {
      this._router.navigateByUrl('dashboard');
    } else if (this.user == 'customer') {
      this._router.navigateByUrl('home');
    }
  }
}
