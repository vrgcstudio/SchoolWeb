import { Component, OnInit } from '@angular/core';
import { Item, User, Student, Parent, Driver } from 'src/app/classes/item';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public newUser: User;
  public newStu: Student;
  // public newPar: Parent;
  // public newDri: Driver;

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
    this.clearNewStu();
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
    this.newUser.status = '';
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
  // student 
  public clearNewStu(): void {
    this.newStu = new Student();
    this.newStu.id_stu= 0;
    this.newStu.first_name_stu = '';
    this.newStu.last_name_stu = '';
    this.newStu.gender_stu = '';
    this.newStu.bd_stu = '';
    this.newStu.address = '';
    this.newStu.lat = 0;
    this.newStu.lon = 0;
    this.newStu.sick_stu = '';
    this.newStu.school = '';
    this.newStu.tel_stu = 0;
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
        // this.errorMessage = error.statusText;
      });
    }
    if (this.newUser.status == 'student'){
      this.apiService.addStu(this.newStu).subscribe(() => {
        alert ('you are student');
      }, (error: HttpErrorResponse) => {
        this.errorMessage = error.statusText;
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
  //  parent
}
