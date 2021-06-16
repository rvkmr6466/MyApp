import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CentralService {
	public _isSideNavOpen: boolean = false;
	constructor() { }


	get isSideNavOpen() {
		return !this._isSideNavOpen;
	}

	set isSideNavOpen(openSideNavbar) {
		this._isSideNavOpen = !!openSideNavbar;
	}
}
