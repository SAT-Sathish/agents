import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agents';
  agents = ['Gina Williams', 'Jake Williams', 'Jamie John', 'John Doe', 'Jeff Stewart', 'Paula M. Keith'];
  data: string = "";
  values: any = [];
  is_drop: boolean = false;
  backspace = false;
  addedValues: any = [];
  @ViewChild("inputRef") inputRef: ElementRef | undefined;
  keyFunc(event: any) {
    if (event.key == 'Backspace') {
      if (this.backspace) { this.values.pop(); this.backspace = false; }
      else this.backspace = true;
    }
    this.is_drop = this.data.includes('@') ? true : false;
  }
  focus() { this.inputRef?.nativeElement.focus(); }
  select(item: any) {
    this.values.push(item);
    this.data = "";
    this.is_drop = false;
  }
  add() {
    this.addedValues = [...this.addedValues, ...this.values]
    this.values = [];
  }
  backdrop() { if (this.is_drop) this.is_drop = false }
}
