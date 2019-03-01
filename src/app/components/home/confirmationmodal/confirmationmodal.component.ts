import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BooksService } from '../../../providers/books.service';


@Component({
  selector: 'app-confirmationmodal',
  templateUrl: './confirmationmodal.component.html',
  styleUrls: ['./confirmationmodal.component.scss']
})
export class ConfirmationmodalComponent implements OnInit {

  constructor(public service:BooksService,public refd: MatDialogRef<ConfirmationmodalComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.refd.close();
  }

  deleteItem(element: string){
    this.service.eliminarLibro(element);
    this.refd.close();
  }


}
