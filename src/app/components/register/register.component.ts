import { Component, OnInit } from '@angular/core';
import { Item, User } from 'src/app/classes/item';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public newUser: User;
  public check_password: string;
  public errorMessage: string;
  public loading: boolean;
  public success: boolean;
  public curPageStu: boolean;
  public curPagePar: boolean;
  public curPageDri: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.clearNewUser();
    this.success = false;
    this.curPageStu = true;
    this.curPagePar = false;
    this.curPageDri = false;
  }

  public clearNewUser(): void {
    this.newUser = new User();
    this.newUser.username = '';
    this.newUser.password = '';
    this.newUser.name = '';
    this.check_password = '';
  }

  public addUser(): void {
    if (this.validate()) {
      this.errorMessage = '';
      this.loading = true;
      this.apiService.addUser(this.newUser).subscribe(() => {
        this.loading = false;
        this.success = true;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.errorMessage = error.statusText;
      });
    }
  }

  public setPageStu(){
    this.curPageStu = true;
    this.curPagePar = false;
    this.curPageDri = false;
  }
  public setPagePar(){
    this.curPageStu = false;
    this.curPagePar = true;
    this.curPageDri = false;
  }
  public setPageDri(){
    this.curPageStu = false;
    this.curPagePar = false;
    this.curPageDri = true;
  }
 
  public validate(): boolean {
    if (!this.newUser.username || !this.newUser.password || !this.newUser.name || !this.check_password) {
      return false;
    }
    if (this.newUser.password !== this.check_password) {
      return false;
    }
    if (this.loading) {
      return false;
    }

    return true;
  }

}
