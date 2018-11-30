import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_BASE } from '../api-base';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token: string = null;

  constructor(public http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(API_BASE + '/login.php', {email: username, password: password})
      .pipe(map(user => {
        this.token = user.token;
        return user;
      }));
  }
}
