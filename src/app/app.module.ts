import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IndexMaterialModule } from './material.angular';

//External

//Angular Material 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IndexMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
