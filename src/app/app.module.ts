import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {UsersComponent} from "./components/users/users.component";
import {PostsComponent} from "./components/posts/posts.component";
import {HomeComponent} from "./components/home/home.component";
import {RouterModule} from "@angular/router";
import { AddUserComponent } from './components/users/add-user/add-user.component';
import {NotFoundComponent} from "./components/not-found.component";
import {PreventUnsavedChangesGuard} from "./prevent-unsaved-changes-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    AddUserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'users', component: UsersComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'users/add', component: AddUserComponent, canDeactivate: [ PreventUnsavedChangesGuard ]},
      {path: 'users/:id', component: AddUserComponent, canDeactivate: [ PreventUnsavedChangesGuard ]},
      {path: 'not-found', component: NotFoundComponent},
      {path: '**', redirectTo: '/home'}
    ])
  ],
  providers: [PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}