import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../shared-services/authentication.service';
import { CentralService } from '../shared-services/central.service';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent extends AppComponent {

	/**
	 * @author Ravi Kumar
	 * @since 15-June-2021
	 * @description Create register form and register and save data on firebase
	 */
	
	public form!: FormGroup;
	public isRegister: boolean = false;
	public isError: boolean = false;
	public errorMessage: string = ''


	constructor(
		private fb: FormBuilder,
		public authService: AuthenticationService,
		public centralService: CentralService
	) {
		super();
	}


	ngOnInit(): void {
		this.form = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		});
	}


	/**
	 * @description Register using google REST API
	 * @returns 
	 */
	public register() {
		try {
			if (this.f.password.value !== this.f.confirmPassword.value) {
				this.isError = true;
				this.errorMessage = "Password mismatch! Try again";
				this.form.reset();
				return;
			}
			this.authService.register(this.f.username.value, this.f.password.value, this.f.confirmPassword.value)
				.subscribe((response) => {
					this.processRegisterFormResponse(response);
				},
					(error) => {
						this.processRegisterFormError(error);
					});
		} catch (e) {
			console.log("Error:", e);
		}
	}


	/**
	 * @description Process response and perform some action like reset form after successfully registered 
	 * 				and also show success message on the screen
	 * @param response 
	 */
	processRegisterFormResponse(response) {
		if (response && response.idToken && response.localId) {
			this.isRegister = true;
		}
		this.form.reset();
	}


	/**
	 * @description Process error if got any. Show error message
	 * @param error 
	 */
	processRegisterFormError(error) {
		if (error && error.error) {
			this.isError = true;
			if (error.error.error.errors[0].message === 'EMAIL_EXISTS') {
				this.errorMessage = 'The email address is already in use by another account.';
			}
		}
		this.form.reset();
	}


	/**
	 * @description Create a getter for form control
	 */
	get f() {
		return this.form.controls;
	}

}
