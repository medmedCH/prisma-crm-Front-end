import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-addstore',
  templateUrl: './product.addstore.component.html',
  styleUrls: ['./product.addstore.component.scss']
})


export class ProductAddStoreComponent implements OnInit, AfterViewInit  {
  private longitude;
  private latitude;
  private URL = 'https://maps.google.com/maps?q=15%20rue%20moez&t=&z=13&ie=UTF8&iwloc=&output=embed';
  @ViewChild('gmap_canvas') gmap_canvas: ElementRef;


  storeForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
     telInput: new FormControl('', [Validators.required]),
     capacityInput: new FormControl('', [Validators.required]),
     addressInput: new FormControl('', [Validators.required])
   });

  daySt;
  openSt;
  closeSt;
  hoursList = [];
  types = [];

  constructor() {
    navigator.geolocation.getCurrentPosition(function (position) {
      sessionStorage.setItem('longitude', String(position.coords.longitude));
      sessionStorage.setItem('latitude', String(position.coords.latitude));
      return position.coords;
    });
    console.log(sessionStorage.getItem('longitude'));
    console.log(sessionStorage.getItem('latitude'));
    this.longitude = parseFloat(sessionStorage.getItem('longitude'));
    this.latitude = parseFloat(sessionStorage.getItem('latitude'));
    // Using the get nearest store service :


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

  ngOnInit(): void {
  }

  addHour() {
  }

  editHour() {
  }
  showEditHour(t) {
  }
  deleteHour(t) {
  }
  addStore(){
  }

  ngAfterViewInit(): void {
   /* this.service.getNearestStoreAddress(this.longitude, this.latitude).subscribe(e => {
      console.log(e);
      this.URL = 'https://maps.google.com/maps?q='
        + e.address.latitude + ',' + e.address.longtitude +
        '&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite';
      this.gmap_canvas.nativeElement.src = this.URL;
    }, error => {
      console.log('could not get nearest address');
    });*/

    this.URL = 'https://maps.google.com/maps?q='
      + 36.837504  + ',' + 10.244193 +
      '&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite';
    this.gmap_canvas.nativeElement.src = this.URL;
  }
}
