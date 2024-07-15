import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { TransactionGraphComponent } from './transaction-graph/transaction-graph.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { SearchAmountPipe } from './search-amount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent,
    TransactionGraphComponent,
    SearchPipe,
    SearchAmountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
