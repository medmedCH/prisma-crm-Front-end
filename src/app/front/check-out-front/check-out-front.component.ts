import {AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig, NgxPayPalModule} from 'ngx-paypal';
import {OrderServiceService} from '../../services/order-service.service';
import {CartModel} from '../../models/orderModule/CartModel';
import {StoreModel} from '../../models/orderModule/StoreModel';
import {Address} from '../../models/Address';
import {APISService} from '../../services/apis.service';
import {ClientOrderModel} from '../../models/orderModule/ClientOrderModel';

@Component({
  selector: 'app-check-out-front',
  templateUrl: './check-out-front.component.html',
  styleUrls: ['./check-out-front.component.scss']
})
@NgModule({
  imports: [
    NgxPayPalModule,
  ],
})

export class CheckOutFrontComponent implements OnInit, AfterViewInit {

  public payPalConfig?: IPayPalConfig;
  private showSuccess: boolean;
  private orderClient: ClientOrderModel = new ClientOrderModel();
  longitude;
  latitude;
  store: StoreModel = new StoreModel();
  currentCart: CartModel;
  CURRENT_ADDRESS;
  distance;
  TIME_WALKING = 5;
  TIME_DRIVING = 50;
  needed_time_walking = 0;
  needed_time_driving = 0;
  totalInDinars = 0;
  reduction = 0;
  isOnlinePayment = false;
  percentageReduction = 0;
  usedFidelityPoints = 0;
  private URL = 'https://maps.google.com/maps?q=15%20rue%20moez&t=&z=13&ie=UTF8&iwloc=&output=embed';
  @ViewChild('gmap_canvas') gmap_canvas: ElementRef;

  constructor(private service: OrderServiceService, private api: APISService) {

  }

  ngOnInit(): void {
    this.initConfig();
    this.store.address = new Address();
    navigator.geolocation.getCurrentPosition(function (position) {

      sessionStorage.setItem('longitude', String(position.coords.longitude));
      sessionStorage.setItem('latitude', String(position.coords.latitude));
      return position.coords;
    });
    this.currentCart = <CartModel>JSON.parse(sessionStorage.getItem('cart'));
    console.log(this.currentCart);
    for (const single of this.currentCart.rows) {
      this.totalInDinars += single.totalPriceWNReduction;
      this.reduction += single.finalPrice;
      this.usedFidelityPoints += single.usedFidelityPoints;
    }
    console.log(sessionStorage.getItem('longitude'));
    console.log(sessionStorage.getItem('latitude'));
    this.longitude = parseFloat(sessionStorage.getItem('longitude'));
    this.latitude = parseFloat(sessionStorage.getItem('latitude'));
    this.orderClient.createdAt = new Date();
    this.orderClient.isValid = false;
  }

  ngAfterViewInit(): void {
    this.service.getNearestStoreAddress(this.longitude, this.latitude).subscribe(e => {
      console.log(e);
      this.URL = 'https://maps.google.com/maps?q='
        + e.address.latitude + ',' + e.address.longtitude +
        '&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite';
      this.gmap_canvas.nativeElement.src = this.URL;
      this.store = e;
      this.store.address = e.address;
      this.api.reverseGeoCode(this.longitude, this.latitude).subscribe(x => {
        console.log(this.longitude);
        console.log(this.latitude);
        // @ts-ignore
        this.CURRENT_ADDRESS = x.display_name;
        console.log(this.CURRENT_ADDRESS);
        const d: string = String(this.api.distance(this.store.address.latitude,
          this.store.address.longtitude,
          parseFloat(sessionStorage.getItem('latitude')),
          parseFloat(sessionStorage.getItem('longitude')), 'K'));
        this.distance = Number.parseFloat(d).toFixed(2);
        this.needed_time_walking = this.distance / this.TIME_WALKING;
        this.needed_time_driving = this.distance / this.TIME_DRIVING;
        console.log(this.store.address.displayName);
        this.api.calculateTimeDistanceBetweenTwoAddresses(this.CURRENT_ADDRESS, this.store.address.displayName).subscribe(data => {
            console.log(data);
          },
          error => {
            console.log('impossible to calculate time and distance');
          });
      }, error => {
        console.log('could not fetch data from reverse');
      });
    }, error => {
      console.log('could not get nearest address');
    });

  }


  handleClick() {
    document.getElementById('offerCard').className = 'MyClass';
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        alert('Payment Success');
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        alert('Payment has been canceled');
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        alert('There has been an error');
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        alert('Payment successfuly accomplished');
        console.log('onClick', data, actions);
      },
    };
  }

  checkoutFromCashPayment() {
    // cart, client, distance, store
    this.service.passTemporaryOrder(this.currentCart.id, this.currentCart.client.id, this.distance, this.store.id).subscribe(e => {
      const x = ((e / 1000) / this.TIME_WALKING) * 60;
      alert('Time to get your order ' + x);
    });
  }
}
