import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: any;
  form: FormGroup;

  constructor(private datosPorfolio:PorfolioService, private formbuilder: FormBuilder, private ruta: Router) {
    
    this.form = this.formbuilder.group({

       nombreCarrera:["", Validators.required],
       institucionNombre:["", Validators.required],
       logoInstituto:["", Validators.required],
       periodo: ["", Validators.required],
       tituloEducacion:["", Validators.required],
       certificado:["", Validators.required]

    })

   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.educaciones = data;
    });
  }


  onEnviarEducacion(event: Event, personaid:any){
    event.preventDefault;
    this.datosPorfolio.addEducacion(this.form.value,personaid).subscribe(data => {
       this.ruta.navigate(['/portfolio']);
     })

  }

  onEliminarEducacion(event: Event,persona: any,educacion: any){
    event.preventDefault;
    this.datosPorfolio.eliminarEducacion(educacion,persona).subscribe(data =>{
      console.log("data educacioncomponent.ts: " + JSON.stringify(data));
      console.log(persona);
    })

  }

  

}
