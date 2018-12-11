import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  public error: boolean;

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.error = false;
  }

  public submit(): void {
    this.error = false;
    this.userService.login(this.username, this.password)
      .subscribe(() => {
        this.router.navigate(['/']);
      }, () => {
        this.error = true;
      });
  }

}
