import {Component, Input, OnInit} from '@angular/core';
import {PackService} from '../../../services/managers/pack.service';
import {Pack} from '../../../models/Pack';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Product} from '../../../models/Product';
import {Offre} from '../../../models/Offre';
import {Affiche1Component} from '../affiche1/affiche1.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.scss']
})
export class AfficheComponent implements OnInit {
  pa: Pack[] = [];
  @Input()
  index: number;

  constructor(private packservice: PackService, public dialog: MatDialog) {
  }

  ngOnInit() {
    /*
        window.location.reload();
    */

    this.packservice.getPack().subscribe(data => this.pa = data);

  }

  open(id) {
    const dialogREf1 = this.dialog.open(Affiche1Component);
    this.index = id;
    console.log(this.index);
    dialogREf1.componentInstance.index = this.index;
    console.log(dialogREf1.componentInstance.index = this.index);
    dialogREf1.afterClosed().subscribe(data => this.packservice.getPack().subscribe(data1 => this.pa = data1));
  }

}
