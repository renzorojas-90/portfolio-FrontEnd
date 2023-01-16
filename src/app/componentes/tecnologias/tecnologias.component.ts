import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  info: any;
  form: FormGroup;
  infoEdit: any;
 
  
  

  constructor(private dataService:TecnologiaService,private logueado:AutenticacionService, private formbuilder: FormBuilder, private ruta: Router) {
  
    this.form = this.formbuilder.group({
      
      id: ["",Validators.required],
      nombreTecno:["",Validators.required],
      logoTecno: ["",Validators.required],
      gradoDominio: ["",Validators.required]
      
    });
   }

  ngOnInit(): void {
    this.actualizarportfolio();
  }

    estalogueado(){
      return this.logueado.datosSecion();
    }


  actualizarportfolio(){
    this.dataService.obtenerDatos().subscribe(data =>{
      this.info = data;
    });

  }

  

  onEnviarItem(event: Event, personaid:any){
    event.preventDefault;
    this.dataService.addItem(this.form.value,personaid).subscribe(data => {
      //console.log(data);
      this.actualizarportfolio();
     })
     this.exito();

  }

  onEliminarItem(event: Event,idpersona: any,idItem: any){
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
        this.dataService.eliminarItem(idpersona,idItem).subscribe(data =>{
          this.actualizarportfolio();
        });
        Swal.fire(
          'Borrado!',
          'El ítem ha sido eliminado.',
          'success'
        )
      }
    })

  }

  editarItem(event: Event){
    event.preventDefault;
    console.log(this.form.value);
    this.dataService.editItem(this.form.value).subscribe(data=>{
      this.actualizarportfolio();
    });
    this.exito();
    
  }

  traerItem(idItem:any){
    this.dataService.buscarItem(idItem).subscribe(data=>{
      this.infoEdit = data;
      console.log(data);
      this.form.patchValue({
        
        id: data.id,
        nombreTecno: data.nombreTecno,
        logoTecno: data.logoTecno,
        gradoDominio: data.gradoDominio
    
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
