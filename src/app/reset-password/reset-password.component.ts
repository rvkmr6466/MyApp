import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends AppComponent {

	/**
	 * @author Ravi Kumar
	 * @since 15-June-2021
	 * @desc Building reset form and and reset mail sent to his email
	 */

	public form!: FormGroup;
	public errorMessage: "";
	public isError: boolean = false;
	public isResetPasswordSent: boolean = false;
	public resetPasswordSent = "Reset Password has been sent on your email!!!";


	constructor(
		private fb: FormBuilder
	) {
		super();
	}


	ngOnInit(): void {
		this.form = this.fb.group({
			username: ['', Validators.required]
		});
	}


	/**
	 * @description Reset password will be sent to his email
	 */
	resetPassword() {
		let resetMessageSuccess = false;
		if (resetMessageSuccess)
			this.isResetPasswordSent = true;
	}

}
