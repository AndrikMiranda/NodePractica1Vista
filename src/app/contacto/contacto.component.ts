import { Component, OnInit } from '@angular/core';
import{ContactoService} from './contacto.service';
import{Contacto} from './contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactos: any = [];

  constructor(private contactoServicio: ContactoService) { }

  ngOnInit() {
    this.contactoServicio.getContactos().subscribe(
      res => {
        this.contactos = res;
      },
      err=>{
        console.error(err);
        
      }
    );
  }

}
