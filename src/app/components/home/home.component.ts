import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../providers/books.service';
import { MatDialog } from '@angular/material';
import { AddmodalComponent } from './addmodal/addmodal.component';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  displayedColumns: string[] = ['nombre', 'autor', 'editorial', 'edicion', 'remove'];
  

  constructor(public ServiceBooks:BooksService, private dialog:MatDialog, private db: AngularFirestore,
    private confirmation:MatDialog
            
    
    ) {

    this.ServiceBooks.cargarLibros().subscribe();

    }


  ngOnInit() {
      

  }

  modalOpen(){
    this.dialog.open(AddmodalComponent);
  }

  

  deleteItem(element:string){
    
    this.ServiceBooks.eliminarLibro(element);
  }


}