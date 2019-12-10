import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/managers/product.service';


@Component({
  selector: 'app-frontproduct-neareststore',
  templateUrl: './front.product.neareststore.component.html',
  styleUrls: ['./front.product.neareststore.component.scss']
})


export class FrontProductNearestStoreComponent implements OnInit, AfterViewInit  {
  myStore = {
    name: '',
    telephone: ''
  };
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
  ngAfterViewInit(): void {
    this.productService.getNearestStore(this.longitude, this.latitude).subscribe(e => {
       console.log(e);
       this.myStore = e ;
       this.URL = 'https://maps.google.com/maps?q='
         + e.address.latitude + ',' + e.address.longtitude +
         '&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite';
       this.gmap_canvas.nativeElement.src = this.URL;
     }, error => {
       console.log('could not get nearest address');
     });
  }

  ngOnInit(): void {
  }
}
