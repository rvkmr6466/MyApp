export class User {
    constructor(
        public id: string,
        public email: string,
        private _token: string,
        private _tokenExpirationData: Date
    ) { }

    get token(){
        if(new Date() > this._tokenExpirationData || !this._tokenExpirationData) {
            return null;
        }
        return this._token;
    }
}