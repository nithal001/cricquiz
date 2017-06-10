import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAbout: boolean;
  url = 'https://github.com/nithalqb/cricquiz';
  title: string;
  currentUrl: string;
  

  constructor(
    private api: ApiService, 
    private _router: Router,
    private modalService: NgbModal
    ) {
    this.title = this.api.title;
  }

  openLoginModal() {
    this.modalService.open(LoginComponent);
  }

  openRegisterModal() {
    this.modalService.open(RegisterComponent);
  }

  ngOnInit() {
  	
 }
    
}
