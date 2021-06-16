import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../shared-services/authentication.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends AppComponent {

	/**
	 * @author Ravi Kumar
	 * @since 15-June-2021
	 * @description Create login form and login successfully and authoris from firebase
	 */

	public returnUrl: any;
	public form!: FormGroup;
	public isLoginError: boolean = false;
	public LoginErrorMessage: string = '';

	constructor(
		private route: ActivatedRoute,
		private fb: FormBuilder,
		public authService: AuthenticationService,
		private _route: Router
	) {
		super();
	}

	ngOnInit(): void {
		this.form = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			check: ['']
		});
		// get return url from route parameters or default to '/'
		// this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home-page';
	}


	/**
	 * @description Login check
	 */
	public login() {
		this.authService.login(this.f.username.value, this.f.password.value, this.f.check.value)
			.subscribe(
				(response) => this.processLoginResponse(response),
				(error) => this.processLoginError(error));
	}


	/**
	 * @description Process login response and navigate to either homepage or lastUrl and hide 
	 * 				register and login button and show logout button
	 * @param response 
	 */
	processLoginResponse(response) {
		if (!!response && !!response.registered) {
			this.isLogin = true;
			this._route.navigate(['/home-page']);
			this.form.reset();
		}
	}


	/**
	 * @description Process login error while login and display error
	 * @param error 
	 */
	processLoginError(error) {
		if (error && error.error) {
			this.isLoginError = true;
			switch (error.error.error.errors[0].message) {
				case 'EMAIL_NOT_FOUND':
					this.LoginErrorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
					break;
				case 'INVALID_PASSWORD':
					this.LoginErrorMessage = 'The password is invalid or the user does not have a password.';
					break;
				case 'USER_DISABLED':
					this.LoginErrorMessage = 'The user account has been disabled by an administrator.'
					break;
				default:
					this.LoginErrorMessage = 'An unknown error occurred.'
			}
			this.form.reset();
		}
	}


	/**
	 * @description Form control getter
	 */
	get f() { return this.form.controls; }

}
