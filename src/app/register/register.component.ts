import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, UserService } from '../_services/index';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	model: any = {};
	constructor(public activeModal: NgbActiveModal, 
		private userService: UserService,
		private alertService: AlertService,
		private modalService: NgbModal
		) {}

	ngOnInit() {

	}

	register() {
		this.userService.create(this.model)
			.subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                     setTimeout(() => {
                     	this.activeModal.dismiss();
                     	this.modalService.open(LoginComponent);
                     }, 1500);
                },
                error => {
                    this.alertService.error(error);
                    //this.loading = false;
                });
	}

}
