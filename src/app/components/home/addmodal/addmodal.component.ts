import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../providers/books.service';
import { MatDialogRef } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss']
})
export class AddmodalComponent implements OnInit {


  nombre: string = "";
  editorial: string = "";
  autor: string = "";
  edicion: string = "";

  alerta:boolean = false;


  constructor(private service:BooksService, public refd: MatDialogRef<AddmodalComponent>) { }

  ngOnInit() {
  }


  vadilator = new FormControl('', [Validators.required]);

  getErrorMessage( msg:string) {
    return this.vadilator.hasError('required') ? `es necesario ${msg}` :
            '';
  }
  

  agregarLibro(){

      if (this.nombre.length == 0 || this.editorial.length == 0 || this.autor.length == 0 || this.edicion.length == 0) {
        
        return;

      }

      this.service.agregarLibro(this.nombre,this.autor,this.editorial, this.edicion);

      this.refd.close();
  }

}
