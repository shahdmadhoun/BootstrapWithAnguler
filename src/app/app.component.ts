import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  box = "box";
  textbox = 'text box';


  items = ['item1', 'item2', 'item3'];

  addItem(newItem: string) {
    if(!this.items.includes(newItem) && (newItem))
    this.items.push(newItem);
  }

}
