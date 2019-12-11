import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/Product';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PackService} from '../../../services/managers/pack.service';

@Component({
  selector: 'app-affiche1',
  templateUrl: './affiche1.component.html',
  styleUrls: ['./affiche1.component.scss']
})
export class Affiche1Component implements OnInit {
  prd: Product[] = [];
  index: number;

  constructor(private packservice: PackService) {
  }

  ngOnInit(): void {
    this.packservice.getPackprdd(this.index).subscribe(data => this.prd = data);
  }

  deleteprdd(id) {
    this.packservice.deleteprd(id, this.index).subscribe(data => 'ok');
    this.packservice.getPackprdd(this.index).subscribe(data1 => this.prd = data1);

  }


}
