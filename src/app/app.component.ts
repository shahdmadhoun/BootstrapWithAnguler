import { Component, HostListener } from '@angular/core';


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

  clickNum = 0;
  clickText = "show item";
  today = Date.now();
  toggles = new Array<string>();



  show() {
    if(this.clickNum == 0) {
    this.clickNum = 1;
    this.clickText = "hide item";
    this.toggles.push(Date.now().toString());
  } else {
    this.clickNum = 0;
    this.clickText = "show item";
    this.toggles.push(Date.now().toString());

  }

  }


  


}
