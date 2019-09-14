import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

import{HttpClientModule} from '@angular/common/http';
import{ContactoService} from './contacto/contacto.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
