import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/managers/product.service';
import {Store} from '../../../models/Store';


@Component({
  selector: 'app-frontproduct-neareststore',
  templateUrl: './front.product.neareststore.component.html',
  styleUrls: ['./front.product.neareststore.component.scss']
})


export class FrontProductNearestStoreComponent implements OnInit, AfterViewInit {
  myStore: any = {
    name: '',
    telephone: '',
    storeHoursList: [{
      id: 0,
      day: '',
      openAt: new Date(),
      closeAt: new Date(),
    }],
    address: {
      'id': 0,
      'longtitude': 0,
      'latitude': 0,
      'displayName': '',
      'country': '',
      'zipCode': 0
    }
  };

  storeList;
  selectedStr;
  private longitude;
  private latitude;
  private URL = 'https://maps.google.com/maps?q=15%20rue%20moez&t=&z=13&ie=UTF8&iwloc=&output=embed';
  @ViewChild('gmap_canvas') gmap_canvas: ElementRef;

  constructor(private productService: ProductService) {
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

  filterBy(prop) {
    return this.myStore.storeHoursList.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }


  seacrhStore() {

    /* this.URL = 'https://maps.google.com/maps?q='
       + 36.827795 + ',' + 10.196342 +
       '&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite';
     this.gmap_canvas.nativeElement.src = this.URL;*/
    console.log(this.selectedStr);
    this.productService.getStoreById(this.selectedStr).subscribe(data => {
      this.myStore = data;
      this.URL = 'https://maps.google.com/maps?q='
        + this.myStore.address.latitude + ',' + this.myStore.address.longtitude +
        '&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite';
      this.gmap_canvas.nativeElement.src = this.URL;
    });
  }


  ngAfterViewInit(): void {
    this.productService.getNearestStore(this.longitude, this.latitude).subscribe(e => {
      console.log(e);
      this.myStore = e;
      this.URL = 'https://maps.google.com/maps?q='
        + this.myStore.address.latitude + ',' + this.myStore.address.longtitude +
        '&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite';
      this.gmap_canvas.nativeElement.src = this.URL;
    }, error => {
      console.log('could not get nearest address');
    });
  }

  ngOnInit(): void {
    this.productService.getAllStores().subscribe(data => {
      this.storeList = data;
    });
  }


}
