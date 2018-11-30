import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class RouteGuard implements CanActivate {

    constructor(public userService: UserService, public router: Router) {}

    canActivate(): boolean {
        if (this.userService.token) {
            return true;
        }

        this.router.navigate(['auth']);
        return false;
    }
}
