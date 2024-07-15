import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(people:any[],searchTerm:string): any[] {
    return people.filter((transaction)=>transaction.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

}
