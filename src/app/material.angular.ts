import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';





@NgModule({
    imports: [MatButtonModule,
            MatCheckboxModule, 
            MatToolbarModule, 
            MatIconModule, 
            MatTableModule, 
            MatInputModule,
            MatFormFieldModule,
            MatDialogModule,
            MatSnackBarModule,
            MatProgressBarModule,
            MatSlideToggleModule], 
            
    exports: [MatButtonModule,
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatTableModule, 
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatSlideToggleModule]
})


export class IndexMaterialModule { }