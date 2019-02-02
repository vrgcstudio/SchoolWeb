import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuard } from './classes/route-guard';
import { MenuStudentComponent } from './components/menu-student/menu-student.component';
import { SearchcarStudentComponent } from './components/searchcar-student/searchcar-student.component';
import { TestComponent } from './test/test.component';
import { Teacher1Component } from './components/teacher1/teacher1.component';
import { Tab401Component } from './components/tab401/tab401.component';
import { Test1Component } from './components/test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    LoginComponent,
    RegisterComponent,
    MenuStudentComponent,
    SearchcarStudentComponent,
    TestComponent,
    Teacher1Component,
    Tab401Component,
    Test1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
