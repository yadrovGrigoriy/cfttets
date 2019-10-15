import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../services/items.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  
  @Input() item: Item
  @Output() removed:EventEmitter<number>  = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  removeItem(id:number){
    this.removed.emit(id)
    
  }

}
