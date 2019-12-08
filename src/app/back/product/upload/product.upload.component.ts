import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/managers/product.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product.upload.component.html',
  styleUrls: ['./product.upload.component.scss']
})

export class ProductUploadComponent implements OnInit {
  constructor(private productService: ProductService, private http: HttpClient) {
  }
  ngOnInit(): void {
  }
}
