import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuard } from './classes/route-guard';
import { MenuStudentComponent } from './components/menu-student/menu-student.component';
import { SearchcarStudentComponent } from './components/searchcar-student/searchcar-student.component';
import { Teacher1Component } from './components/teacher1/teacher1.component';
import { Tab401Component } from './components/tab401/tab401.component';
import { Test1Component } from './components/test1/test1.component';

const routes: Routes = [
  { path: 'auth', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: MenuStudentComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'searchcar', component: SearchcarStudentComponent},
  { path: 'teacher1', component: Teacher1Component},
  { path: 'tab401', component: Tab401Component},
  { path: 'test1', component: Test1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
