import { ItemsService, Item } from './../services/items.service';
import { Component, OnInit } from '@angular/core';

export interface Filter {
    dateFrom: string,
    dateTo: string,
    type: string
}



@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']


})
export class ControlsComponent implements OnInit {
  items: Item[] = []
  options: string[] = []
  filter: Filter


  constructor(private itemsService: ItemsService) {


    this.filter = {
      dateFrom:'',
      dateTo: '',
      type :'all'
    }

    this.itemsService.listItemsUpdated.subscribe(value => {
      if(value) this.getOptions()
    })


  }

  ngOnInit(){
    this.getOptions()
  
  }

  filterItems() {
    this.itemsService.filter.next(this.filter) 
  }

  
  getOptions(){
    this.itemsService.getAll().subscribe( res => {
      if(Array.isArray(res)){
        res.map(item => item.type).forEach(option => {
          if(!this.options.includes(option)){
            this.options.push(option)
          }
        })
      }
    })
  }

  clearAll(event:MouseEvent){
    event.preventDefault()
    this.filter = {
      dateFrom: '',
      dateTo: '',
      type: 'all'
    }
  }

}
