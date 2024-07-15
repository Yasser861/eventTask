import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAmount'
})
export class SearchAmountPipe implements PipeTransform {

  transform(people:any[],amount:any): any[] {
    return people.filter((transaction)=>transaction.amount>=amount)
  }

}
