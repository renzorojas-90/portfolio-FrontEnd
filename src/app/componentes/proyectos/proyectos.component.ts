import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  info: any;
  form: FormGroup;
  infoEdit: any;

  constructor(private dataService:ProyectoService,private logueado:AutenticacionService, private formbuilder: FormBuilder, private ruta: Router) {
    
    this.form = this.formbuilder.group({
      id: [Validators.required],
      nombre: ["",Validators.required],
      fechaRealizado :["",Validators.required],
      descripcion: ["",Validators.required],
      linkEvidencia:["",Validators.required],
      logo:["",Validators.required]
    })

    
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
      console.log(data);
      this.actualizarportfolio();
     })
     this.exito();

  }

  onEliminarItem(event: Event,idpersona: any,idItem: any){
    event.preventDefault;

    Swal.fire({
      title: 'Estás Seguro?',
      text: "No podrás Revertir los cambios!",
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
          'El ítem ha sido éliminado.',
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

  traerItem(editeducacion:any){
    this.dataService.buscarItem(editeducacion).subscribe(data=>{
      this.infoEdit = data;
      console.log(data);
      this.form.patchValue({

        id: data.id,
        nombre: data.nombre,
        fechaRealizado : data.fechaRealizado,
        descripcion: data.descripcion,
        linkEvidencia: data.linkEvidencia,
        logo:data.logo
    
      });
    });

    
  }

  exito(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Guardado con Exito',
      showConfirmButton: false,
      timer: 2000
    })
  }


}
