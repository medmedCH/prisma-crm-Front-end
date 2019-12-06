import {Component, NgModule, OnInit} from '@angular/core';
import { NgxPayPalModule, IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

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

export class CheckOutFrontComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;
  private showSuccess: boolean;

  ngOnInit(): void {
    this.initConfig();
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
