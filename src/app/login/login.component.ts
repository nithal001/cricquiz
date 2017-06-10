import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  constructor(
  	public activeModal: NgbActiveModal,
    private route: ActivatedRoute,
  	private router: Router,
  	private authenticationService: AuthenticationService,
    private alertService: AlertService
  	) {
    // Do stuff
  }

  ngOnInit() {
	// reset login status
	this.authenticationService.logout();

	// get return url from route parameters or default to '/'
	this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
        //this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.activeModal.dismiss();
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    //this.loading = false;
                });
    }

}
