import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Libros } from '../interfaces/libros.interface';
import { FirebaseFunctions, FirebaseOptions } from '@angular/fire';



@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  public libros:any[] = [];

  public keys:any[] = [];

  public itemDelete: AngularFirestoreDocument<any>
  
  public itemsCollection: AngularFirestoreCollection<any>;

  public filtro: string;

  public librosCount:any;

  
  constructor(public afs: AngularFirestore) {

    this.itemsCollection = afs.collection<any>('items');

    this.itemsCollection.snapshotChanges().pipe( map( items => {
      return items.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
    })).subscribe( data => {
      this.keys = data;

    })
  
  }

  filtrar(){


    return this.itemsCollection.valueChanges().pipe( map( data => {
      
      let terminoFiltro = this.filtro.toLowerCase();

      let tempArray:any[] = [];

      for (const iterator of data) {

        const element = iterator;

        const nombre = element.nombre.toLowerCase().trim();

        const autor = element.autor.toLowerCase().trim();

        if(nombre.indexOf(terminoFiltro) >= 0 || autor.indexOf(terminoFiltro) >= 0) {
            
            tempArray.push(element);
            
          }
        if(this.filtro == '') {
            this.cargarLibros().subscribe();
            return
          }

          this.libros = tempArray;
        }
    }))
    }


  cargarLibros(){

    this.itemsCollection = this.afs.collection<any>('items');

    return this.itemsCollection.valueChanges().pipe( map( data => {
    
        this.libros = data;
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
        if (element.nombre === elemento){
        
              $key = element.$key
              
          } 
        
      }
    }
      
    this.itemDelete = this.afs.doc(`items/${$key}`);
    this.itemDelete.delete();
  }


  

}
