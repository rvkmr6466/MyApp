import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/authResponse';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class AuthenticationService {
	public user = new BehaviorSubject<User>(null);

	constructor(
		private _http: HttpClient
	) { }

	public login(username: string, password: string, check: string) {
		let url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXpqnsUJ_1MPMieVlsJWcp6uNlGsKcMAg';
		return this._http.post<AuthResponse>(url, { email: username, password: password, returnSecureToken: true })
			.pipe(tap(resData => {
				this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
			}));
	}

	private handleAuthentication(email: string, localId: string, idToken: string, expiresIn: number) {
		const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
		const user = new User(email, localId, idToken, expirationDate);
		this.user.next(user);
	}

	public register(username: string, password: string, confirmPassword: string) {
		let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXpqnsUJ_1MPMieVlsJWcp6uNlGsKcMAg';
		return this._http.post<AuthResponse>(url, { email: username, password: password, returnSecureToken: true })
			.pipe(tap((resData) => {
				this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
			}));
	}

}
