import {Component, OnInit} from '@angular/core';

import {ProductService} from '../../../services/managers/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/Product';
import {HttpClient} from '@angular/common/http';
import {Tariff} from '../../../models/Tariff';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-add',
  templateUrl: './product.add.component.html',
  styleUrls: ['./product.add.component.scss']
})


export class ProductAddComponent implements OnInit {
  types;
  imageUrlSrc: string;
  fileToUpload: File = null;
  tariffList = [];
  tariff;
  priceTT;
  cnxTT;
  tarifAdded;
  indexTT;
  productAdded;
  myImage;


  constructor(private productService: ProductService, private toastr: ToastrService, private router: Router) {
  }

  productForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
    referenceInput: new FormControl('', [Validators.required]),
    descriptionInput: new FormControl('', [Validators.required]),
    typeInput: new FormControl('', [Validators.required]),
    priceInput: new FormControl('', [Validators.required]),
    guaranteeInput: new FormControl('', [Validators.required]),
    brandInput: new FormControl('', [Validators.required]),
    memoryInput: new FormControl('', [Validators.required]),
    resolutionInput: new FormControl('', [Validators.required]),
    cameraInput: new FormControl('', [Validators.required]),
    imageInput: new FormControl('', [Validators.required]),
    cnxT: new FormControl('', [Validators.required]),
    priceT: new FormControl('', [Validators.required]),
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
  get brandInput() {
    return this.productForm.get('brandInput');
  }
  get memoryInput() {
    return this.productForm.get('memoryInput');
  }
  get resolutionInput() {
    return this.productForm.get('resolutionInput');
  }
  get cameraInput() {
    return this.productForm.get('cameraInput');
  }
  get imageInput() {
    return this.productForm.get('imageInput');
  }
  get cnxT() {
    return this.productForm.get('cnxT');
  }
  get priceT() {
    return this.productForm.get('priceT');
  }
  addProd() {
    /*if (this.typeInput.value === 'Mobile') {
      this.processFile(this.fileToUpload.name);
    }*/
    const product = {
      reference : this.referenceInput.value,
      name : this.nameInput.value,
      description : this.descriptionInput.value,
      type : this.typeInput.value,
      price : this.priceInput.value,
      guarantee : this.guaranteeInput.value,
      brand: this.brandInput.value,
      memory: this.memoryInput.value,
      resolution : this.resolutionInput.value,
      camera: this.cameraInput.value,
      imageUrl: this.typeInput.value === 'Mobile' ? this.myImage.img : ''
  };

    this.productService.addProduct(product).subscribe(data => {
      this.productAdded = data;
      if (product.type === 'ADSL') {
        this.tariffList.forEach((item, index) => {
          // tslint:disable-next-line:no-shadowed-variable
          this.productService.assignTarifToProduct(this.productAdded.id, item.id).subscribe(data => {
           console.log(data);
          });
        });
      }
      this.router.navigateByUrl('/product/all');

    });

  }
  addTariff() {

    this.tariff = {
      cnxSpeed: this.cnxT.value,
      priceT: this.priceT.value
    };
    this.cnxTT = '';
    this.priceTT = '';
    this.productService.addTariff(this.tariff).subscribe(data => {
      this.tarifAdded = data;
      this.tariffList.push(data);
    });
  }
  editTariff() {
    this.tarifAdded = {
      id: this.tarifAdded.id,
      cnxSpeed: this.cnxT.value,
      priceT: this.priceT.value
    };
    this.productService.editTariff(this.tarifAdded).subscribe(data => data);
    this.tariffList[this.indexTT] = this.tarifAdded ;
  }
  showEditTariff(t) {
    this.cnxTT = t.cnxSpeed;
    this.priceTT = t.priceT;
    this.indexTT = this.tariffList.indexOf(t);
    this.tarifAdded = t ;
    console.log(t);
  }
  deleteTariff(t) {
    this.productService.deleteTariff(t.id).subscribe(data => data);
    this.indexTT = this.tariffList.indexOf(t);
    if (this.indexTT !== -1) {
      this.tariffList.splice(this.indexTT, 1);
    }
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrlSrc = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);

    if (this.typeInput.value === 'Mobile') {
      this.processFile(this.fileToUpload.name);
    }

  }
  processFile(path) {
    this.productService.uploadImage(path).subscribe(
      (res) => {
        console.log('res');
        console.log(res);
        this.myImage = res;
      });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }


  ngOnInit(): void {
    this.productService.getProductTypes().subscribe(data => {
      this.types = data ;
    });
  }
}
