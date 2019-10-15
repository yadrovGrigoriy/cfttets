import { Filter } from './../controls/controls.component';
import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../services/items.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = []
  data: any
  filter: Filter
  listItemsUpdated: boolean

  constructor(private itemsService: ItemsService) {

    this.itemsService.listItemsUpdated.subscribe(value => {
      if(value) this.getItems()
    })

    this.itemsService.filter.subscribe(value => {
      this.filterItems(value)
    })

  }

  ngOnInit() {
    this.getItems()
  }


  getItems() {
    this.itemsService.getAll().subscribe(res => {
      this.data = res
      this.items = this.data
    })
  }

  filterItems(value:Filter) {
    if (Array.isArray(this.data)) {
      this.items = this.data.filter(item => {
        /* фильтр только по дате  */
        if (value.type === 'all') {
          if ((!value.dateFrom && !value.dateTo)) {
            return item
          } else if (value.dateFrom && value.dateTo) {
            return new Date(item.created) >= new Date(value.dateFrom) && new Date(item.created) <= new Date(value.dateTo)
          } else {
            return new Date(item.created) >= new Date(value.dateFrom)
              || new Date(item.created) <= new Date(value.dateTo)
          }
        }
        /* фильтр только по типу  */
        if (!value.dateFrom && !value.dateTo) {
          return item.type === value.type
        }
        /** фильтр по дате и типу  */
        if (value.dateFrom && value.dateTo) {

          return item.type === value.type
        } else {
          return item.type === value.type && new Date(item.created) >= new Date(value.dateFrom)
            || item.type === value.type && new Date(item.created) <= new Date(value.dateTo)
        }
      })
    }

  }

  removeItem(id: number) {
    this.itemsService.remove(id)
    this.getItems()
  }


}
