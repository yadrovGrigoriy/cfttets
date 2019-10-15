import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizeView'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    switch(true){
      case value < 1024 : 
        return value + 'B'
      case value > 1000 && value < 1e+6:
        return Math.round(value / 1000) + 'KB'
      case value > 1e+6 && value < 1e+9:
        return Math.round((value / 1e+6))  + 'MB'
      default:
        return null;
    }
    
    
  }

}
