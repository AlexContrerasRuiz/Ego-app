import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Libros } from '../interfaces/libros.interface';
import { FirebaseFunctions, FirebaseOptions } from '@angular/fire';
import dbboks from 'src/app/dbLocal/dbBooks.json'



@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //LOCAL DB BOOKS
    
  public books:Libros[] = dbboks;

  // 
  
  public libros:Libros[] = [];

  public keys:any[] = [];

  public itemDelete: AngularFirestoreDocument<any>
  
  public itemsCollection: AngularFirestoreCollection<Libros>;

  public filtro: string;

  public librosCount: number = 1;

  public loading = true;

  
  constructor(public afs: AngularFirestore) {

    //Carga la base de datos local
    this.itemsCollection = afs.collection<Libros>('items');

    // Obtiene los keys de firebase
    this.itemsCollection.snapshotChanges().pipe( map( items => {
      return items.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
    })).subscribe( data => {
      this.keys = data;

    })
  
  }


  // Switch Carga Local

  //Carga el Json

  localbooks(){

    this.libros = this.books;
    this.librosCount = this.books.length;

  }

  //Carga FireBase

  firebooks(){

    this.cargarLibros().subscribe();

  }

  // End



  filtrar(){


    return this.itemsCollection.valueChanges().pipe( map( data => {
      
      let terminoFiltro = this.filtro.toLowerCase();

      let tempArray:Libros[] = [];

      for (const iterator of data) {

        const element = iterator;

        const nombre = element.nombre.toLowerCase().trim();

        const autor = element.autor.toLowerCase().trim();

        // si coincide
        nombre.indexOf(terminoFiltro) >= 0 || autor.indexOf(terminoFiltro) >= 0 ? tempArray.push(element): '';
            
        // si esta vacio

        this.filtro == '' ? this.cargarLibros().subscribe() :  '';
        

        // Establece la variable libros con el la busqueda

        this.libros = tempArray;


        }

    }))
    }


  cargarLibros(){

    this.itemsCollection = this.afs.collection<Libros>('items');

    return this.itemsCollection.valueChanges().pipe( map( data => {
    
        this.libros = data;
        this.loading = false;
        this.librosCount = this.libros.length;
          
    }));
  
    
  }

  agregarLibro(nombre:string, autor:string, editorial:string, edicion: string) {

    let librox:Libros = {
      nombre: nombre,
      autor: autor,
      editorial: editorial,
      edicion: edicion
    }

    for (const iterator of this.libros) {
      if(iterator.nombre == librox.nombre){
        return
      }
    }

    this.itemsCollection.add(librox);


  }

  eliminarLibro(elemento:string){

    let $key:string;

    for (const key in this.keys) {
      if (this.keys.hasOwnProperty(key)) {
        const element = this.keys[key];

        element.nombre === elemento ? $key = element.$key : '';
              
        
      }
    }
      
    this.itemDelete = this.afs.doc(`items/${$key}`);
    this.itemDelete.delete();
    
  }


  

}
