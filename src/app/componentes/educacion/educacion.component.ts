import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

import { PorfolioService } from 'src/app/servicios/porfolio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  
  educaciones: any;
  form: FormGroup;
  editEducaciones: any;
  var : any;

  constructor(private datosPorfolio:PorfolioService,private logueado:AutenticacionService, private formbuilder: FormBuilder, private ruta: Router) {
    
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

    estalogueado(){
      return this.logueado.datosSecion();
    }

    cerrarSecion(){
      this.logueado.borrarSecion();
    }

  actualizarportfolio(){
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.educaciones = data;
    });

  }


  onEnviarEducacion(event: Event, personaid:any){
    event.preventDefault;
    this.datosPorfolio.addEducacion(this.form.value,personaid).subscribe(data => {
       this.actualizarportfolio();
     })
     this.exito();

  }

  onEliminarEducacion(event: Event,persona: any,educacion: any){
    event.preventDefault;
    
    Swal.fire({
      title: 'Estás Seguro?',
      text: "No podrás revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.datosPorfolio.eliminarEducacion(educacion,persona).subscribe(data =>{
          this.actualizarportfolio();
        });
        Swal.fire(
          'Borrado!',
          'El ítem ha sido éliminado.',
          'success'
        )
      }
    })
    
  }

  editarEducacion(event: Event){
    event.preventDefault; 
    console.log(this.form.value);
    this.datosPorfolio.edit_Educacion(this.form.value).subscribe(data=>{
      this.actualizarportfolio();
    });
    this.exito();
    
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
  
  exito(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Guardado con Éxito',
      showConfirmButton: false,
      timer: 2000
    })
  }

  

}
