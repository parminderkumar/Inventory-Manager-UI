import { Component, Input,OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ItemDataService } from '../../item-data.service';
@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})

export class ItemUpdateComponent implements OnInit {
  @Input() item: any;
    ngOnInit() {
    }
  
    constructor(public activeModal: NgbActiveModal,private dataService: ItemDataService) {}
  updateItem(item :any){
 
      this.dataService.updateItem(this.item).subscribe(
        res => {
  
          location.reload();
  
        },
        err => {
          alert("An error has occurred while updating item");
        }
      );
  
  }
  }
  
