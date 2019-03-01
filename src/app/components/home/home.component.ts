import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../providers/books.service';
import { MatDialog } from '@angular/material';
import { AddmodalComponent } from './addmodal/addmodal.component';
import { AngularFirestore } from '@angular/fire/firestore';
import dbboks from 'src/app/dbLocal/dbBooks.json';
import { ConfirmationmodalComponent } from './confirmationmodal/confirmationmodal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  displayedColumns: string[] = ['nombre', 'autor', 'editorial', 'edicion', 'remove'];


  color = 'warn';
  checked = true;
  disabled = false;


  constructor(public ServiceBooks:BooksService, private dialog:MatDialog, private db: AngularFirestore,
    private confirmation:MatDialog
            
    
    ) {
      
      this.ServiceBooks.cargarLibros().subscribe();

    }


  ngOnInit() {

  }

  ngDoCheck(): void {


  
  }

  modalOpen(){
    this.dialog.open(AddmodalComponent);
  }

  

  confirmationOpen(nombre:string): void {
    this.dialog.open(ConfirmationmodalComponent, {
      width: '500px',
      data: {name: nombre},
      autoFocus: false
    });
  }

  
  deleteItem(element:string){
    
    this.ServiceBooks.eliminarLibro(element);
  }


  switch(){
    
    this.checked ? this.ServiceBooks.firebooks() : this.ServiceBooks.localbooks();

  }

}