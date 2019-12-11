import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/managers/product.service';
import {Store} from '../../../models/Store';

@Component({
  selector: 'app-product-addstore',
  templateUrl: './product.addstore.component.html',
  styleUrls: ['./product.addstore.component.scss']
})


export class ProductAddStoreComponent implements OnInit {


  storeForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
    telInput: new FormControl('', [Validators.required]),
    capacityInput: new FormControl('', [Validators.required]),
    addressInput: new FormControl('', [Validators.required]),
    dayInput: new FormControl('', [Validators.required]),
    openInput: new FormControl('', [Validators.required]),
    closeInput: new FormControl('', [Validators.required])
  });

  daySt;
  openSt;
  closeSt;
  hoursList = [];
  addressList;
  selectedAdr;
  store;
  hour;
  indexTT;
  str;
  hr;

  constructor(private productService: ProductService) {
  }


  get nameInput() {
    return this.storeForm.get('nameInput');
  }

  get telInput() {
    return this.storeForm.get('telInput');
  }

  get capacityInput() {
    return this.storeForm.get('capacityInput');
  }

  get addressInput() {
    return this.storeForm.get('addressInput');
  }
  get dayInput() {
    return this.storeForm.get('dayInput');
  }

  get openInput() {
    return this.storeForm.get('openInput');
  }

  get closeInput() {
    return this.storeForm.get('closeInput');
  }

  addHour() {
    this.hour = {
      day: this.dayInput.value,
      openAt: this.openInput.value,
      closeAt: this.closeInput.value,
      store: {}
    };
    this.daySt = '';
    this.openSt = '';
    this.closeSt = '';
    this.hoursList.push(this.hour);
  }

  editHour() {
    const hour = {
      day: this.dayInput.value,
      openAt: this.openInput.value,
      closeAt: this.closeInput.value,
      store: {}
    };
    this.hoursList[this.indexTT] = hour ;
  }

  showEditHour(t) {
    this.daySt = t.day;
    this.openSt = t.openAt;
    this.closeSt = t.closeAt;
    this.indexTT = this.hoursList.indexOf(t);
  }

  deleteHour(t) {
    this.indexTT = this.hoursList.indexOf(t);
    if (this.indexTT !== -1) {
      this.hoursList.splice(this.indexTT, 1);
    }
  }

  addStore() {

    this.productService.getAddressById(this.selectedAdr).subscribe(data => {
      this.store = {
        name : this.nameInput.value,
        telephone : this.telInput.value,
        capacity : this.capacityInput.value,
        address : data,
        storeHoursList: this.hoursList
      };
      this.productService.addStore(this.store).subscribe(val => {
        this.str = val ;
        this.hoursList.forEach(h => {
          this.productService.addHour(h).subscribe(e => {
            this.hr = e ;
            console.log(this.str.id + ' ' + this.hr.id);
            this.productService.assignTimeToStore(this.str.id, this.hr.id).subscribe(r => r);
          });
        });
      });
    });
  }


  ngOnInit(): void {
    this.productService.getAllAddress().subscribe(data => {
      this.addressList = data ;
    });
  }


}
