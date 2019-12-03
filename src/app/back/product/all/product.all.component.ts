import {Component, Input, OnInit} from '@angular/core';


import {ProductService} from '../../../services/managers/product.service';

import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-product-all',
  templateUrl: './updateModal.html'
})

// tslint:disable-next-line:component-class-suffix
export class NgbdModalContent {
  @Input() prod;

  constructor(public activeModal: NgbActiveModal, private productService: ProductService) {
  }

  productForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
    referenceInput: new FormControl('', [Validators.required]),
    descriptionInput: new FormControl('', [Validators.required]),
    typeInput: new FormControl('', [Validators.required]),
    priceInput: new FormControl('', [Validators.required]),
    guaranteeInput: new FormControl('', [Validators.required]),
  });


  get nameInput() {
    return this.productForm.get('nameInput');
  }

  get descriptionInput() {
    return this.productForm.get('descriptionInput');
  }

  get typeInput() {
    return this.productForm.get('typeInput');
  }

  get priceInput() {
    return this.productForm.get('priceInput');
  }

  get guaranteeInput() {
    return this.productForm.get('guaranteeInput');
  }

  get referenceInput() {
    return this.productForm.get('referenceInput');
  }

  updateProd(id: number) {
    const obj: Product = this.prod;
    obj.reference = this.productForm.value.referenceInput === '' ? obj.reference : this.productForm.value.referenceInput;
    obj.name = this.productForm.value.nameInput === '' ? obj.name : this.productForm.value.nameInput;
    obj.description = this.productForm.value.descriptionInput === '' ? this.prod.description : this.productForm.value.descriptionInput;
    obj.type = this.productForm.value.typeInput === '' ? this.prod.type : this.productForm.value.typeInput;
    obj.price = this.productForm.value.priceInput === '' ? this.prod.price : this.productForm.value.priceInput;
    obj.guarantee = this.productForm.value.guaranteeInput === '' ? this.prod.guarantee : this.productForm.value.guaranteeInput;

    this.productService.editProduct(obj).subscribe(data => data);
    this.activeModal.close('Close click');
    
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


  open(id: number) {

    const modalRef = this.modalService.open(NgbdModalContent);
    this.productService.getProductById(id).subscribe(data => {
      this.prod = data ;
      console.log('data= ' );
      console.log(data);
      modalRef.componentInstance.prod = data;
    });
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe( data => {
          this.liste = data ;
        }
      );

  }

  }

