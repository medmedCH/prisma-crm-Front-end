import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/managers/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-frontproduct-details',
  templateUrl: './front.product.details.component.html',
  styleUrls: ['./front.product.details.component.scss']
})
export class FrontProductDetailsComponent implements OnInit {
  idProd;
  product;
  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idProd = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.idProd).subscribe(data => {
      this.product = data;
    });
  }
}
