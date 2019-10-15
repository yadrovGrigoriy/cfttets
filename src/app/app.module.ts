import { ItemsService } from './services/items.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { FileSizePipe } from './util/file-size.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    ListItemComponent,
    ItemsComponent,
    UploadComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
