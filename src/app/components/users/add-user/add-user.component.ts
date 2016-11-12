import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationUtils} from "../../../validators/ValidationUtils";
import {UsersService} from "../../../services/users/users.service";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "./User";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UsersService]
})
export class AddUserComponent implements OnInit {

  title: string;
  form: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router, private route: ActivatedRoute) {
  }

  save() {
    var result;

    if (this.user.id) {
      result = this.usersService.updateUser(this.user);
    } else {
      result = this.usersService.addUser(this.user);
    }

    result.subscribe(x => {
      // Ideally, here we'd want:
      // this.form.markAsPristine();
      this.router.navigate(['/users']);
    });
  }

  ngOnInit() {
    this.initForm();
    this.user = new User();

    this.route.params.subscribe(params => {
      var id = params['id'];
      this.title = id ? 'Edit User' : 'Add a User';

      if (!id) {
        return;
      }

      this.usersService.getUser(id).subscribe(
        user => this.user = user,
        response => {
          if (response.status == 404) {
            this.router.navigate(['/not-found']);
          }
        });
    });
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose(
        [
          Validators.required,
          ValidationUtils.emailValidator
        ]
      )],
      phone: [],
      address: this.fb.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    });
  }

}
