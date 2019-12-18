import {Component, Input, OnInit} from '@angular/core';
import {PromotionService} from '../../../services/managers/promotion.service';
import {Promotion} from '../../../models/Promotion';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-show',
  templateUrl: './modifier.html'
})

// tslint:disable-next-line:component-class-suffix
export class NgbdModalContent {
  @Input() promo;

  constructor(public activeModal: NgbActiveModal, private promotionservice: PromotionService) {
  }

  promotionForm = new FormGroup({
    dd: new FormControl('', [Validators.required]),
    nameInput: new FormControl('', [Validators.required]),
    perio: new FormControl('', [Validators.required]),
    pourcent: new FormControl('', [Validators.required]),
    df: new FormControl('', [Validators.required]),
  });


  get nameInput() {
    return this.promotionForm.get('nameInput');
  }

  get dd() {
    return this.promotionForm.get('dd');
  }

  get perio() {
    return this.promotionForm.get('perio');
  }

  get pourcent() {
    return this.promotionForm.get('pourcent');
  }

  get df() {
    return this.promotionForm.get('df');
  }


  updatePromo(id: number) {
    const obj: Promotion = this.promo;
    obj.s_date = this.promotionForm.value.dd ===                   '' ? this.promo.s_date : this.promotionForm.value.dd;
    obj.name = this.promotionForm.value.nameInput ===              '' ? obj.name : this.promotionForm.value.nameInput;
    obj.period = this.promotionForm.value.perio ===              '' ? obj.period : this.promotionForm.value.perio;
    obj.percentage = this.promotionForm.value.pourcent ===          '' ? obj.percentage : this.promotionForm.value.pourcent;
    obj.e_date = this.promotionForm.value.df ===                  '' ? obj.e_date : this.promotionForm.value.df;

    this.promotionservice.modifier(obj).subscribe(data => data);
    this.activeModal.close('Close click');
    window.location.reload();
  }
}
/*/----------------------------/*/

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  pr: Promotion[] = [];
  promotion: Promotion = new Promotion();
  promo;

  constructor(private promotionservice: PromotionService, private modalService: NgbModal) {
  }

  ngOnInit() {

    this.promotionservice.getpromotion().subscribe(data => this.pr = data);
  }
  open(id: number) {
    const modalRef = this.modalService.open(NgbdModalContent);
    this.promotionservice.getPromotionById(id).subscribe(data => {
      this.promo = data;
      console.log('data= ');
      console.log(data);
      modalRef.componentInstance.promo = data;
    });
  }
}
