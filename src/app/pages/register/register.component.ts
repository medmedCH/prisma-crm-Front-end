import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PasswordValidation} from './PasswordValidation';
import {StorageService} from '../../services/security/storage.service';
import {AlertService} from '../../services/common/AlerteService';
import {User} from '../../models/User';
import {RegisterService} from '../../services/managers/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ErrorMsg = '';
  imageURL = '/assets/img/profile.jpg';
  fileToUpload: File = null;
  var = false;

  constructor(private registerService: RegisterService,
              private storageService: StorageService,
              private alertService: AlertService,
              private router: Router) {
  }

  passwordType = 'password';
  passwordSeen = false;
  confirmType = 'password';
  confirmSeen = false;
  icone = 'icon-eye';
  iconeC = 'icon-eye';
  model: any = {};

  u: User;
  addClaimFrom = new FormGroup({
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('',),
    phoneNumber: new FormControl('', [Validators.required]),

  });

  ngOnInit() {
    this.imageURL = '/assets/images/user.png';
  }

  addUser() {
    this.u = new User(this.addClaimFrom.value.email, this.addClaimFrom.value.firstName,
      this.addClaimFrom.value.lastName, this.addClaimFrom.value.password,
      this.addClaimFrom.value.phoneNumber, this.imageURL);
    this.registerService.addUser(this.u)
      .subscribe(
        response => {
        },
        error => {
          console.log(error);
        }
      );
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageURL = event.target.result;
      console.log('imageeeeeeeeeeeeeeeee' + event.target.result);

    };
    reader.readAsDataURL(this.fileToUpload);
    console.log('fileeeeeeeee' + this.fileToUpload);
  }

}

