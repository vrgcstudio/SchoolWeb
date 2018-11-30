import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuard } from './classes/route-guard';
import { MenuStudentComponent } from './components/menu-student/menu-student.component';
import { SearchcarStudentComponent } from './components/searchcar-student/searchcar-student.component';

const routes: Routes = [
  { path: 'auth', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: MenuStudentComponent, canActivate: [RouteGuard] },
  { path: 'item/:id', component: ItemComponent, canActivate: [RouteGuard] },
  { path: 'searchcar', component: SearchcarStudentComponent, canActivate: [RouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
