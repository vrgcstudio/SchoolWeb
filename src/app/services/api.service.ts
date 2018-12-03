import { Injectable } from '@angular/core';
import { Item, User, Student } from '../classes/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { API_BASE } from '../api-base';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private userService: UserService) { }

  public addUser(user: User): Observable<null> {
    return this.http.post<null>(API_BASE + 'register.php', user);
  }

  public addStu(stuUser: Student): Observable<null> {
    return this.http.post<null>(API_BASE + 'register.php', stuUser);
  }

  public listItems(): Observable<Item[]> {
    return this.http.get<Item[]>(API_BASE + 'list.php', {
      headers: new HttpHeaders({
        token: this.userService.token
      })
    });
  }

  public addItem(item: Item): Observable<null> {
    return this.http.post<null>(API_BASE + 'add.php', item, {
      headers: new HttpHeaders({
        token: this.userService.token
      })
    });
  }

  public getItemInfo(id: number): Observable<Item> {
    return this.http.get<Item>(API_BASE + 'info.php?id=' + id, {
      headers: new HttpHeaders({
        token: this.userService.token
      })
    });
  }

  public updateItem(item: Item): Observable<null> {
    return this.http.post<null>(API_BASE + 'update.php', item, {
      headers: new HttpHeaders({
        token: this.userService.token
      })
    });
  }

  public deleteItem(id: number): Observable<null> {
    return this.http.get<null>(API_BASE + 'delete.php?id=' + id, {
      headers: new HttpHeaders({
        token: this.userService.token
      })
    });
  }
}
