import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationUtils} from "../../../validators/ValidationUtils";
import {UsersService} from "../../../services/users/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UsersService]
})
export class AddUserComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder, private usersService: UsersService, private router: Router) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose(
        [
          Validators.required,
          ValidationUtils.emailValidator
        ]
      )],
      phone: [],
      street: [],
      suite: [],
      city: [],
      zipCode: []
    });
  }

  save() {
    this.usersService.saveUser(this.form.value);
    this.router.navigate(['/users']);
  }


  ngOnInit() {
  }

}
