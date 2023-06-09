import { Component } from '@angular/core';
export interface Customer {
  id: number,
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //  template:`
  //   <ul>
  //     <li *ngFor="let customer of customers">
  //       {{ customer.name }}
  //       <button (click)="editCustomer(customer)">Edit</button>
  //     </li>
  //   </ul>
  //   <app-test
  //     *ngIf="editing"
  //     [customer]="editing"
  //     (customerUpdated)="onCustomerUpdated($event)">
  //   </app-test>
  //  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ParentchildInter';
  // public name = "Abhishek"
  // public message =  "";
 
  customers: Customer[] = [
    { id: 1, name: 'John Smith', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];
  editing: Customer | null = null;

  editCustomer(customer: Customer) {
    this.editing = customer;
  }

  onCustomerUpdated(customer: Customer) {
    console.log(customer)
    const index = this.customers.findIndex(c => c.id === customer.id);
    this.customers[index] = customer;
    this.editing = null;
  }
}
// export interface Customer {
//   id: number,
//   name: string;
//   email: string;
// }