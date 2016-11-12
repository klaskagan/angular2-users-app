import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationUtils} from "../../../validators/ValidationUtils";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
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

  ngOnInit() {
  }

}
