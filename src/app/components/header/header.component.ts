import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router, private lserv: LoginServicesService) {}
  currentUser: string;
  ngOnInit(): void {
    this.greetings();
    this.currentUser = sessionStorage.getItem('UserType');
  }

  greetingText: string;
  greetings() {
    this.greetingText =
      new Date().getHours() >= 12 ? 'Good Afternoon' : 'Good Morning';
  }
}
