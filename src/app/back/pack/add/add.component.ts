import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PackService} from '../../../services/managers/pack.service';
import {Pack} from '../../../models/Pack';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  packajout: FormGroup;
  submitted = false;
pack : Pack = new Pack();
  constructor(private formBuilder: FormBuilder, private packservice: PackService, private router: Router) {
  }

  ngOnInit() {
    this.packajout = this.formBuilder.group({

        pr: ['', Validators.required],
        nm: ['', Validators.required],
        ds: ['', Validators.required]
      },
    );
  }
  addPack(p) {
    this.packservice.addPack(p).subscribe(data => 'ok');
  }
  get f() {
    return this.packajout.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.packajout.invalid) {
      return;
    }

    // display form values on success
    this.router.navigateByUrl('/pack/affiche');

  }

  onReset() {
    this.submitted = false;
    this.packajout.reset();
  }
}
