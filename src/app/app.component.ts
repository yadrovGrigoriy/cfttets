import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cft';
  items = [
    {
      type:'DOC',
      size: 15,
      author:'jack',
      created: new Date(),
      permitionDate: new Date(new Date().getDay() + 10, new Date().getMonth(), new Date().getFullYear()) 

    }
  ]

}
