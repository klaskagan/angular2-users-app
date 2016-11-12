import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {User} from "./add-user/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.findUsers();
  }

  findUsers() {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(user: User) {
    if(confirm('Are you sure you want to delete this user?')) {
      var index = this.users.indexOf(user, 0);
      if (index > -1) {
        this.users.splice(index, 1);
        this.usersService.deleteUser(user.id)
          .subscribe(null,
            err => {
              alert("Could not delete user.");
              this.users.splice(index, 0, user);
            });
      }
    }
  }

}
