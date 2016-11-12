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
import {UrlRepository} from "./utils/url-repository";
import { AddUserComponent } from './components/users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    AddUserComponent
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
      {path: 'users/add', component: AddUserComponent},
      {path: '**', redirectTo: '/home'}
    ])
  ],
  providers: [UrlRepository],
  bootstrap: [AppComponent]
})
export class AppModule {
}
