import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Register } from './register';

import {User} from '@pizzeria/user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(data: Register) : Observable<User> {
    const url = `${environment.urlApi}/register`
    return this.httpClient.post<User>(url, data)
  }
}
