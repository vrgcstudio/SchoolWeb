import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/item';
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
    this.clear();
    this.success = false;
    this.curPageStu = true;
    this.curPagePar = false;
    this.curPageDri = false;
    this.newUser.status = 'student';
  }
  
  public clear(): void {
    this.check_password = '';
    this.newUser = new User();
    this.newUser.id= 0;
    this.newUser.email = '';
    this.newUser.password ='';
    this.newUser.status = '';
    this.newUser.id_stu= 0;
    this.newUser.first_name_stu = '';
    this.newUser.last_name_stu = '';
    this.newUser.gender_stu = '';
    this.newUser.bd_stu = '';
    this.newUser.address = '';
    this.newUser.lat = 0;
    this.newUser.lon = 0;
    this.newUser.sick_stu = '';
    this.newUser.school = '';
    this.newUser.tel_stu = 0;
  }
  
  
  public setPageStu(){
    this.curPageStu = true;
    this.curPagePar = false;
    this.curPageDri = false;
    this.newUser.status = 'student';
  }
  public setPagePar(){
    this.curPageStu = false;
    this.curPagePar = true;
    this.curPageDri = false;
    this.newUser.status = 'parent';
  }
  public setPageDri(){
    this.curPageStu = false;
    this.curPagePar = false;
    this.curPageDri = true;
    this.newUser.status = 'driver';
  }

  public addUser(): void {
    if (this.validate()) {
      this.errorMessage = '';
      this.loading = true;
      this.apiService.addUser(this.newUser).subscribe(() => {
        this.loading = false;                        /*something worng here*/
        this.success = true;                         /*something worng here*/
      }, (error: HttpErrorResponse) => {             /*something worng here*/
        this.loading = false;                        /*something worng here*/
        this.errorMessage = error.statusText;        /*something worng here*/
        this.success = true;                         /*something worng here*/
      });
    }
  }
  
  public validate(): boolean {
        if (!this.newUser.email || !this.newUser.password || !this.check_password ) {
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
