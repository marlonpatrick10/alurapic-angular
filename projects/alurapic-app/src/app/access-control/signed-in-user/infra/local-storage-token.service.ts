import { Injectable } from '@angular/core';
import { TokenService } from '../domain/token.service';

const TOKEN_KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTokenService  extends TokenService {

  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string) {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}
