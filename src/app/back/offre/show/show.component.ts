import {Component, Input, OnInit} from '@angular/core';
import {OffreService} from '../../../services/managers/offre.service';
import {Offre} from '../../../models/Offre';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './modi.html'
})

// tslint:disable-next-line:component-class-suffix
export class NgbdModalContent {
  @Input() off;

  constructor(public activeModal: NgbActiveModal, private offreService: OffreService) {
  }

  OffreForm = new FormGroup({
    ds: new FormControl('', [Validators.required]),
    nameInput: new FormControl('', [Validators.required]),
    tr: new FormControl('', [Validators.required]),
    oft: new FormControl('', [Validators.required]),
    av: new FormControl('', [Validators.required]),
  });


  get nameInput() {
    return this.OffreForm.get('nameInput');
  }

  get ds() {
    return this.OffreForm.get('ds');
  }

  get oft() {
    return this.OffreForm.get('oft');
  }

  get av() {
    return this.OffreForm.get('av');
  }

  get tr() {
    return this.OffreForm.get('tr');
  }


  updateOff(id: number) {
    const obj: Offre = this.off;
    obj.name = this.OffreForm.value.nameInput === '' ? this.off.name : this.OffreForm.value.nameInput;
    obj.description = this.OffreForm.value.ds === '' ? obj.description : this.OffreForm.value.ds;
    obj.offtype = this.OffreForm.value.oft === '' ? obj.offtype : this.OffreForm.value.oft;
    obj.avantages = this.OffreForm.value.av === '' ? obj.avantages : this.OffreForm.value.av;
    obj.tarification = this.OffreForm.value.tr === '' ? obj.tarification : this.OffreForm.value.tr;

    this.offreService.modifier(obj).subscribe(data => data);
    this.activeModal.close('Close click');
    window.location.reload();
  }
}


/*
------------------------------------------------
*/


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  of: Offre[] = [];
  off;
  offre: Offre = new Offre();

  constructor(private offreService: OffreService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.offreService.getoffre().subscribe(data => this.of = data);

  }

  deleteoffre(id) {
    this.offreService.deleteoffre(id).subscribe((Data) => {
    });

    window.location.reload();

  }
  open(id: number) {
    const modalRef = this.modalService.open(NgbdModalContent);
    this.offreService.getOffreById(id).subscribe(data => {
      this.off = data;
      console.log('data= ');
      console.log(data);
      modalRef.componentInstance.off = data;
    });
  }
}
