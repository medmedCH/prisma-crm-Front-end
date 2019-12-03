import {Component, Input, OnInit} from '@angular/core';


import {ProductService} from '../../../services/managers/product.service';

import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-product-all',
  templateUrl: './updateModal.html'
})

// tslint:disable-next-line:component-class-suffix
export class NgbdModalContent {
  @Input() prod;

  constructor(public activeModal: NgbActiveModal) {}
  hello() {
     console.log(this.prod);
  }
}



@Component({
  selector: 'app-product-all',
  templateUrl: './product.all.html',
  styleUrls: ['./product.all.scss']
})


export class ProductAllComponent implements OnInit {

  liste: any = [];
  product;
  prod;
  s: BehaviorSubject<any> ;

  constructor(private productService: ProductService, private modalService: NgbModal) {
    // this.getProds();
  }
  getProds() {

  }
  getProdById(id) {
    this.productService.getProductById(id).subscribe(data => {
      this.prod = data ;
       console.log('data= ' );
       console.log(data);
    });
  }

  deleteProd(id) {
    // this.product = this.productService.getProductById(id).subscribe(data => data);
    // this.liste.splice(this.liste.indexOf(this.product), 1 );
    this.productService.deleteProduct(id).subscribe((Data) => {
    }) ;
  }
  ngOnInit() {
    this.productService.getProducts()
      .subscribe( data => {
          this.liste = data ;
        }
      );

  }

  open(id: number) {

    const modalRef = this.modalService.open(NgbdModalContent);
    this.productService.getProductById(id).subscribe(data => {
      this.prod = data ;
      console.log('data= ' );
      console.log(data);
      modalRef.componentInstance.prod = data;
    });
  }
  }

