import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users;

  constructor(private usersService: UsersService) { }

  findUsers() {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit() {
    this.findUsers();
  }

}
