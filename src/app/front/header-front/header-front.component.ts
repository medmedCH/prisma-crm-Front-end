import {Component, OnInit} from '@angular/core';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CartModel} from '../../models/orderModule/CartModel';
import {CartsService} from '../../services/carts.service';
import {ClientOrderModel} from '../../models/orderModule/ClientOrderModel';


@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.scss'],
})
export class HeaderFrontComponent implements OnInit {
  client = 1;
  clientOrders: Array<ClientOrderModel> = new Array<ClientOrderModel>();
  isEmpty = false;
  timingo;

  constructor(private modalService: NgbModal, private service: CartsService) {
    if (sessionStorage.getItem('cart') != null) {
      this.currentCart = <CartModel>JSON.parse(sessionStorage.getItem('cart'));
      this.service.getClientOrders(1).subscribe(e => {
        this.clientOrders = e;
        console.log(e);
        this.isEmpty = true;
        sessionStorage.setItem('ordersToView', JSON.stringify(this.clientOrders));
      }, error => {
        console.log('errors have been passed');
      });
    }
  }

  removeTime(): TimerHandler {
    const d = new Date();
    const seconds = d.getSeconds() - (this.timingo * 60);
    const minutes = d.getMinutes() - (this.timingo);
    const hours = d.getHours() - (this.timingo / 60);
    const days = d.getDay() - (this.timingo / (60 * 24));
    console.log('Remaining time : ' + days + '  ' + hours + ':' + minutes + ':' + seconds);
    return;
  }

  closeResult: string;
  currentCart: CartModel;

  ngOnInit() {
    if (sessionStorage.getItem('orderTime') != null) {
      this.timingo = Number.parseFloat(sessionStorage.getItem('orderTime'));
      const myVar = setInterval(this.removeTime(), 3000);
    }
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, {windowClass: 'modal-mini', size: 'sm', centered: true}).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, {windowClass: 'modal-danger', centered: true}).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: $reason';
    }
  }


}
