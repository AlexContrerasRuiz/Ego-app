import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../providers/books.service';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Base_Libro:any = this.ServiceBooks.showBooks();

  displayedColumns: string[] = ['nombre', 'editorial', 'autor', 'edicion', 'remove'];
  
  dataSource = new MatTableDataSource(this.Base_Libro);


  constructor(private ServiceBooks:BooksService) { }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  Add(){

    this.Base_Libro = this.ServiceBooks.addbook('quixote','santillana',' cervantes', '1');
    this.dataSource = new MatTableDataSource(this.Base_Libro);
        
  }

  remove(name:string){

    this.ServiceBooks.removeBook(name);
        
    this.Base_Libro = this.ServiceBooks.showBooks();
    this.dataSource = new MatTableDataSource(this.Base_Libro);
    
  }


}



