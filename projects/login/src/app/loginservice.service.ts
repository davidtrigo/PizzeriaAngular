import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login } from './login.model'
import { User } from '@pizzeria/user'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpClient: HttpClient) { }

  login(data: Login) : Observable<User> {
    const url = `${environment.urlApi}/login`
    return this.httpClient.post<User>(url, data)
  }
}
