import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Para conectar  con el servidor

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  //Declaración de variable que contiene la ruta del api
  API_URI = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }

  //Metodo para consultar los contactos

  getContactos(){
    return this.http.get(`${this.API_URI}/contacto`);
  }

}
