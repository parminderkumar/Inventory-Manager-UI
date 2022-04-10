import {Component, Directive, EventEmitter, Input, OnInit, Output, ViewChildren} from '@angular/core';
import { ItemDataService } from '../item-data.service';
import {ItemUpdateComponent} from './item-update/item-update.component';
import {ItemAddComponent} from './item-add/item-add.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ItemViewModel } from './models/ItemViewModel';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items: ItemViewModel[] = [] ;
  p: number = 1;
  count: number = 10;
  closeResult: string = '';
  constructor(private dataService: ItemDataService,private modalService: NgbModal) { }
  deleteItem(item:ItemViewModel){
    if(confirm("Are you sure you want to delete item?")){
      this.dataService.deleteItem(item.id).subscribe(
        res => {
          console.log(item.id);
        let indexOfItem = this.items.indexOf(item);
          this.items.splice(indexOfItem,1);
        },
        err => {
          alert("Could not delete item");
        }
      );
    }
  }
  addItem() {
    this.modalService.open(ItemAddComponent);
      }
  updateItem(item: any) {
    const modal = this.modalService.open(ItemUpdateComponent);
    modal.componentInstance.item = item;
    }
  ngOnInit() {

    this.dataService.sendGetRequest().subscribe(( data: any)=>{
      console.log(data);
      this.items = data;     
    })  
    
  }
  
}
