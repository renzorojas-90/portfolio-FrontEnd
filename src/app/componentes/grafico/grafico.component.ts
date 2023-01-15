import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  @Input() valor: string;
  @Input() nombre: string;
  circulo: typeof Highcharts = Highcharts;
  opciones:  Highcharts.Options;
  constructor() {
    this.nombre="";
    this.valor = "";
    this.opciones = {};
   }

  ngOnInit(): void { 

    let aux = Number(this.valor);
    
    this.opciones = {
        
        series: [{
          type: 'pie',
          data: [
            {
              y : aux,
            name: "conocido",
            color: "#BE2020",
            
            },
            {
              y : 100-aux,
              name: "En estudio",
            }],
          
        }],
        title:{
          text: this.nombre,
          style: {
            color: "#C00000",
            fontSize: "22px",
          }
        },
        legend:{
          enabled: false,
        },
        chart:{
          backgroundColor: "#93BBD1",
          width:200,
          height:200,
        }

      }

  }

  

}


//#BE2020
//#93BBD1