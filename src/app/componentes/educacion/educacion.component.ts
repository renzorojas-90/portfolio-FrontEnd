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
  editEducaciones: any;

  constructor(private datosPorfolio:PorfolioService, private formbuilder: FormBuilder, private ruta: Router) {
    
    this.form = this.formbuilder.group({

       id:["",Validators.required],
       nombreCarrera:["", Validators.required],
       institucionNombre:["", Validators.required],
       logoInstituto:["", Validators.required],
       periodo: ["", Validators.required],
       tituloEducacion:["", Validators.required],
       certificado:["", Validators.required]

    })

    
   }

  ngOnInit(): void {
    this.actualizarportfolio();
  }

  actualizarportfolio(){
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.educaciones = data;
    });

  }


  onEnviarEducacion(event: Event, personaid:any){
    event.preventDefault;
    this.datosPorfolio.addEducacion(this.form.value,personaid).subscribe(data => {
      console.log(data);
      this.actualizarportfolio();

     })

  }

  onEliminarEducacion(event: Event,persona: any,educacion: any){
    event.preventDefault;
    this.datosPorfolio.eliminarEducacion(educacion,persona).subscribe(data =>{
      this.actualizarportfolio();
    });

  }

  editarEducacion(event: Event){
    event.preventDefault;
    console.log(this.form.value);
    this.datosPorfolio.edit_Educacion(this.form.value).subscribe(data=>{
      this.actualizarportfolio();
    });

    
  }

  TraerUnaEducacion(editeducacion:any){
    this.datosPorfolio.buscarEducacion(editeducacion).subscribe(data=>{
      this.editEducaciones = data;
      console.log(data);
      this.form.patchValue({

         id:data.id,
         nombreCarrera:data.nombreCarrera,
         institucionNombre:data.institucionNombre,
         logoInstituto:data.logoInstituto,
         periodo:data.periodo,
         tituloEducacion:data.tituloEducacion,
         certificado:data.certificado
      });
    });

    
  }
  

}
