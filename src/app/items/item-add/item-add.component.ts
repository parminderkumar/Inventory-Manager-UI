import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import { ItemDataService } from '../../item-data.service';
import {ItemViewModel} from '../models/ItemViewModel';
@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  item: ItemViewModel = {
    id: 0,
    name: '',
    description: '',
    active: ''
  };
  ngOnInit() {
  }
  constructor(public activeModal: NgbActiveModal,private spinner: NgxSpinnerService, private dataService: ItemDataService) {}
addItem(item:any){
  this.spinner.show();
    this.dataService.addItem(this.item).subscribe(
      res => {
        this.spinner.hide();
        location.reload();

      },
      err => {
        alert("An error has occurred while adding item");
      }
    );

}
}
