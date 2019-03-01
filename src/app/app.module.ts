import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//External

//Angular Material 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IndexMaterialModule } from './material.angular';

// Rutas
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddmodalComponent } from './components/home/addmodal/addmodal.component';

//Modules
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Environments
import { environment } from "../environments/environment";
import { ConfirmationmodalComponent } from './components/home/confirmationmodal/confirmationmodal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddmodalComponent,
    ConfirmationmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IndexMaterialModule,
    HttpModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp( environment.firebaseconfig),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent],
  entryComponents: [AddmodalComponent, ConfirmationmodalComponent]
})
export class AppModule { }
