import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignInProcessorGateway } from '../domain/sign-in.processor.gateway';

const API_BASE_URL = 'http://localhost:3000';

@Injectable()
export class RestSignInProcessor extends SignInProcessorGateway {

  constructor(private http: HttpClient) {
    super();
  }

  execute(userName: string, password: string): Observable<string> {
    return this.http
      .post(`${API_BASE_URL}/user/login`,
        { userName: userName, password: password },
        { observe: 'response' })
      .pipe(map(res => res.headers.get('x-access-token')));
  }
}
