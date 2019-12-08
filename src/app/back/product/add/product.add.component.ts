import {Component, OnInit} from '@angular/core';

import {ProductService} from '../../../services/managers/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/Product';
import {HttpClient} from '@angular/common/http';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-product-add',
  templateUrl: './product.add.component.html',
  styleUrls: ['./product.add.component.scss']
})


export class ProductAddComponent implements OnInit {
  selectedFile: ImageSnippet;
  types;
  selectedOption;
  imageUrl: string;
  imageUrlSrc : string;
  fileToUpload: File = null;


  constructor(private productService: ProductService, private http: HttpClient) {
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
  addProd() {
    console.log(this.referenceInput.value);
    const obj = {
      reference : this.referenceInput.value,
      name : this.nameInput.value,
      description : this.descriptionInput.value,
      type : this.typeInput.value,
      price : this.priceInput.value,
      guarantee : this.guaranteeInput.value,
  };

    this.productService.addProduct(obj).subscribe(data => data);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrlSrc = event.target.result;
      console.log(this.fileToUpload.name);
      this.processFile(this.fileToUpload.name);
    }
    reader.readAsDataURL(this.fileToUpload);


    // this.processFile(this.fileToUpload);
  }
  processFile(path): void {
    // console.log(e.target.value);
    this.productService.uploadImage(path).subscribe(
      (res) => {
        console.log('res');
        console.log(res);
      },
      (err) => {
        console.log('err');
        console.log(err);
      });
   /* const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      console.log(event.target.value);
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.productService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log('res');
          console.log(res);
        },
        (err) => {
          console.log('err');
          console.log(err);
        });
    });

    reader.readAsDataURL(file);*/


  }

/*
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption, Image) {
    this.productService.postFile(Caption.value, this.fileToUpload).subscribe(
      data =>{
        console.log('done');
        Caption.value = null;
        Image.value = null;
        // this.imageUrl = "/assets/img/default-image.png";
      }
    );
  }*/
 /* processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.productService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log(res);

        },
        (err) => {

          console.log(err);
        });
    });

    reader.readAsDataURL(file);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log('begin');
    console.log(this.selectedFile);
    console.log('end');
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.productService.uploadImage(this.selectedFile)
      .subscribe(res => {
        console.log(res);
      });

  }*/

  ngOnInit(): void {
    this.productService.getProductTypes().subscribe(data => {
      this.types = data ;
    });
  }
}
