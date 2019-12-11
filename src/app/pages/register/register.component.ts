import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from './MustMatch';
import {User} from '../../models/User';
import {RegisterService} from '../../services/managers/register.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  imageURL = 'user.png';
  u: User;
  myRecaptcha: boolean;

  constructor(private registerService: RegisterService,
              private formBuilder: FormBuilder,
              private router: Router, private toast: ToastrService) {
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.max(99999999), Validators]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }


  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.toast.success('Success');

    this.u = new User(this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.password,
      this.registerForm.value.email,
      this.registerForm.value.phoneNumber,
      this.imageURL);
    this.registerService.addUser(this.u)
      .subscribe(
        response => {
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        }
      );

  }
}
