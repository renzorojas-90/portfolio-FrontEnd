import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  @Input() valor: string;
  circulo: typeof Highcharts = Highcharts;
  opciones:  Highcharts.Options;
  constructor() {
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
            color: "#00FF00",
            
            },
            {
              y : 100-aux,
              name: "En estudio",
            }],
          
        }],
        title:{
          text: 'HTML',
        },
        legend:{
          enabled: false,
        }
      }

  }

  

}
