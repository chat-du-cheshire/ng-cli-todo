import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoListHeaderComponent} from './todo-list-header/todo-list-header.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {TodoListFooterComponent} from './todo-list-footer/todo-list-footer.component';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {SessionService} from './session.service';
import {AuthService} from './auth.service';
import { SignInComponent } from './sign-in/sign-in.component';
import {httpInterceptorProviders} from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent,
    PageNotFoundComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ApiService, SessionService, AuthService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
