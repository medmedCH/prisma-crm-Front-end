import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/managers/product.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-frontproduct-show',
  templateUrl: './front.product.show.component.html',
  styleUrls: ['./front.product.show.component.scss']
})
export class FrontProductShowComponent implements OnInit {
  prodList = [];
  mobileList = [];
  imgSrc = 'C:/myImg/';
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( data => {
          this.prodList = data ;
          this.prodList.forEach(val => {
            if (val.type === 'Mobile') {
              this.mobileList.push(val);
              console.log(this.mobileList);
            }
          });
        }
      );
  }

}
