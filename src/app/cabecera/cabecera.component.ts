import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  prueba:any;    
  constructor(private datosPorfolio:PorfolioService, private logueado:AutenticacionService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.prueba = data;
    });

  }

  estalogueado(){
    return this.logueado.datosSecion();
  }

}
