import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OffreService} from '../../../services/managers/offre.service';
import {Offre} from '../../../models/Offre';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  offreajout: FormGroup;
  submitted = false;
  offre: Offre = new Offre();
  constructor(private formBuilder: FormBuilder, private offreService: OffreService, private router: Router) {
  }

  ngOnInit() {
    this.offreajout = this.formBuilder.group({

      av: ['', Validators.required],
      tr: ['', Validators.required],
      nm: ['', Validators.required],
      ds: ['', Validators.required],
      ot: ['', Validators.required],
    },
  );
  }
  addOffre(o) {
    this.offreService.addOffre(o).subscribe(data => 'ok');
  }
  get f() {
    return this.offreajout.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.offreajout.invalid) {
      return;
    }

    // display form values on success
    this.router.navigateByUrl('/offre/show');
    this.offreService.getoffre().subscribe(data => ' ok');
  }

  onReset() {
    this.submitted = false;
    this.offreajout.reset();
  }
}
