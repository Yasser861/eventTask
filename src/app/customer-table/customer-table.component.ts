import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent {
  customers: any[] = [{ "id": 1, "name": "Ahmed Ali" },
    { "id": 2, "name": "Aya Elsayed" },
    { "id": 3, "name": "Mina Adel" },
    { "id": 4, "name": "Sarah Reda" },
    { "id": 5, "name": "Mohamed Sayed" }];
  transactions: any[] = [{ "id": 1, "customer_id": 1,"name": "Ahmed Ali", "date": "2022-01-01", "amount": 1000 },
    { "id": 2, "customer_id": 1,"name": "Ahmed Ali", "date": "2022-01-02", "amount": 2000 },
    { "id": 3, "customer_id": 2,"name": "Aya Elsayed", "date": "2022-01-01", "amount": 550 },
    { "id": 4, "customer_id": 3,"name": "Mina Adel", "date": "2022-01-01", "amount": 500 },
    { "id": 5, "customer_id": 2,"name": "Aya Elsayed", "date": "2022-01-02", "amount": 1300 },
    { "id": 6, "customer_id": 4,"name": "Sarah Reda", "date": "2022-01-01", "amount": 750 },
    { "id": 7, "customer_id": 3,"name": "Mina Adel", "date": "2022-01-02", "amount": 1250 },
    { "id": 8, "customer_id": 5,"name": "Mohamed Sayed", "date": "2022-01-01", "amount": 2500 },
    { "id": 9, "customer_id": 5,"name": "Mohamed Sayed", "date": "2022-01-02", "amount": 875 }];
  filteredCustomers: any[] = [];
    searchTerm:string=''
    searchAmount:number=0;

  constructor() { }


}
