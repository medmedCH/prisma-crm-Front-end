import {AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig, NgxPayPalModule} from 'ngx-paypal';
import {OrderServiceService} from '../../services/order-service.service';

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
  private longitude;
  private latitude;
  private URL = 'https://maps.google.com/maps?q=15%20rue%20moez&t=&z=13&ie=UTF8&iwloc=&output=embed';
  @ViewChild('gmap_canvas') gmap_canvas: ElementRef;

  constructor(private service: OrderServiceService) {
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

  ngOnInit(): void {
    this.initConfig();
  }

  ngAfterViewInit(): void {
    this.service.getNearestStoreAddress(this.longitude, this.latitude).subscribe(e => {
      console.log(e);
      this.URL = 'https://maps.google.com/maps?q='
        + e.address.latitude + ',' + e.address.longtitude +
        '&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite';
      this.gmap_canvas.nativeElement.src = this.URL;
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
}
