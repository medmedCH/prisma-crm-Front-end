import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/managers/product.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-addstock',
  templateUrl: './product.addstock.component.html',
  styleUrls: ['./product.addstock.component.scss']
})


export class ProductAddStockComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

}
