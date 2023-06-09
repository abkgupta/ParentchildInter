import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Customer } from '../app.component';
// import { NgModule }      from '@angular/core';
@Component({
  selector: 'app-test',
  template: `
  <!-- <h2>{{"Hello "+ parentData}}</h2> -->
  <!-- <h2>{{"Hello "+ name}}</h2>
  <button (click)="fireEvent()">Send Event</button> -->
  <form (submit)="onSubmit()">
      <label>
        Name:
        <input [(ngModel)]="customer.name" name="name" required />
      </label>
      <label>
        Email:
        <input [(ngModel)]="customer.email" name="email" required />
      </label>
      <button type="submit">Save</button>
    </form>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
     
//  @Input() public parentData: any;
  //another method.
  // @Input('parentData') public name: any;
  // @Output() public childEvent = new EventEmitter();

  // fireEvent(){
  //   this.childEvent.emit('Hey Codeevolution');
  // }
  @Input() customer!: any;
  @Output() customerUpdated = new EventEmitter<Customer>();

  onSubmit() {
    this.customerUpdated.emit(this.customer);   
    // console.log()
  }
  ngOnInit()
  {
    console.log(this.customer)      
  }
}
