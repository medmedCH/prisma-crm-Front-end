import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../services/managers/users.service';
import {StorageService} from '../../services/security/storage.service';
import {User} from '../../models/User';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  logged: User;
  selectedFile: File;

  constructor(private UserService: UsersService, private router: Router, public Toast: ToastrService) {

  }

  editForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),

  });

  ngOnInit() {
    this.UserService.GetLoggedUser(StorageService.get('currentUser').userId)
      .subscribe(
        response => {
          console.log(response);
          // tslint:disable-next-line:no-unused-expression
          this.logged = response;
        },
        error => {
          console.log(error);
        }
      );

  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.Toast.success('photo changed');
  }

  edit() {
    if (this.editForm.value.email) {
      this.logged.email = this.editForm.value.email;

    }
    if (this.editForm.value.firstName) {
      this.logged.firstName = this.editForm.value.firstName;
    }

    if (this.editForm.value.lastName) {
      this.logged.lastName = this.editForm.value.lastName;
    }

    if (this.editForm.value.phoneNumber) {
      this.logged.phoneNumber = this.editForm.value.phoneNumber;
    }
    this.logged.profileImage = this.selectedFile.name;
    console.log(this.logged);
    this.UserService.EditUser(this.logged).subscribe(
      response => {
        this.Toast.success('edit succes');
        console.log('edit sucessfullaaay');
      },
      error => {
        console.log(error);
      }
    );
  }
}

