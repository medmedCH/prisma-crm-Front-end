import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Product} from '../../models/Product';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:9080/prisma-crm-web/product/all').pipe(map( response => {
      console.log('response = ');
      console.log(response);
      return response;
    }));
  }
  addProduct(p) {
    return this.http.post('http://localhost:9080/prisma-crm-web/product/add', p ) ;
  }

  editProduct(p: Product) {

    return this.http.put('http://localhost:9080/prisma-crm-web/product', p ) ;
  }

  deleteProduct(id: number) {

    return this.http.delete('http://localhost:9080/prisma-crm-web/product/' + id) ;
  }
  uploadImage(file: string) {

    return this.http.post('http://localhost:9080/prisma-crm-web/product/uploads', file );
  }

 /* postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:28101/api/UploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }


  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    // @ts-ignore
    return this.http.post('/api/v1/image-upload', formData);
  }
*/
  getProductById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/product/' + id );
  }

  getProductTypes() {
    return this.http.get('http://localhost:9080/prisma-crm-web/product/types');
  }


}
