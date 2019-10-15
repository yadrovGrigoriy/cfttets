import { ItemsService } from './../services/items.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  uploadFile: File 

  constructor(private itemsService: ItemsService) { }

  handleUpload(files: FileList){
    this.uploadFile = files[0]
    console.log(files[0]);
  }
  

  submitFile(file:File){
    this.itemsService.add(this.uploadFile)
    
    this.uploadFile = null
  }

}
