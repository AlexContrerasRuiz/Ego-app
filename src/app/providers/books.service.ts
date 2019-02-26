import { Injectable } from '@angular/core';
import dbBooks from '../foo/dbBooks.json';

@Injectable({
  providedIn: 'root'
})
export class BooksService {



  book:any[] =  dbBooks;
  
  constructor() { }


  showBooks(){
    return this.book
  }

  addbook(name:string, edi:string, autor:string, edicion:string){

    let NewBook:object = {nombre: name, editorial: edi, autor: autor, edicion: edicion}
    

    //Evita que agregue repetidos

    for (const iterator of this.book) {
      if(iterator.nombre == NewBook['nombre']){
        return;
    }
  }

    this.book.push(NewBook)

  }

  removeBook(name:string){
  
    var temp = this.book.filter( x => {

      return x.nombre != name;
    })
    
    this.book = temp;
    
  }

}
