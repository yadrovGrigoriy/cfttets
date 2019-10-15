
import { Filter } from './../controls/controls.component';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


export class Item {
  id: number
  type: string
  size:number
  author: string
  fileName: string
  created: string
  storage: string
} 



@Injectable({
  providedIn: 'root'
})
export class ItemsService implements OnInit {

  filter: Subject<Filter> = new Subject()
  listItemsUpdated: Subject<boolean>  = new Subject()
  baseUarl: string = 'http://localhost:3000'
  
  constructor( private _http: HttpClient ) {}

  ngOnInit(){
  }
  
  
  getAll(){
      return this._http.get('http://localhost:3000/items')
  }


  add(file:any){
    const date = new Date()
    let storageDate = new Date(date)
    storageDate.setFullYear(date.getFullYear() + 1)

    
    let fileName = file.name.split('.')
    const type = fileName.pop()
    fileName.join()
    
    
    
    
    this._http.post('http://localhost:3000/items', {
      type: type,
      size: file.size,
      fileName:fileName,
      author:'Гармадоский Вениамин Юсупович',
      created: date,
      storage: storageDate
    }).subscribe( res => this.listItemsUpdated.next(true))
  }

  remove(id:number){
      this._http.delete('http://localhost:3000/items/' + id).subscribe(res => console.log(res))
  }




}
