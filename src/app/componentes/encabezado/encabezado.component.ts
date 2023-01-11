import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  info: any;
  form: FormGroup;
  infoEdit: any;

  archivos : any =[];

  constructor(private dataService:EncabezadoService,private logueado:AutenticacionService, private formbuilder: FormBuilder, private ruta: Router) {
    
    this.form = this.formbuilder.group({
       id:["",Validators.required],
       nombre:["",Validators.required],
       apellido:["",Validators.required],
       edad:["",Validators.required],
       fotoPerfil:["",Validators.required],
       tituloDesarrollador:["",Validators.required],
       about:["",Validators.required],
       usuario: ["",Validators.required],
       password:["",Validators.required],
       listaEducacion:["",Validators.required],
       listaExperiencia: ["",Validators.required],
       listaProyecto: ["",Validators.required],
       listaRedes: ["",Validators.required],
       listaTecnologia:["",Validators.required],
       listaIdioma:["",Validators.required]

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


  editarItem(event : Event){
    event.preventDefault;
    //console.log("datosformulario: "+this.form.value);
    this.dataService.editItem(this.form.value).subscribe(data=>{
      this.actualizarportfolio();
    });
    this.exito();
    
  }

  traerItem(idItem:any){
    this.dataService.buscarItem(idItem).subscribe(data=>{
      
      this.form.patchValue({ 

        id:data.id,
        nombre:data.nombre,
        apellido:data.apellido,
        edad:data.edad,
        fotoPerfil:data.fotoPerfil,
        tituloDesarrollador:data.tituloDesarrollador,
        about: data.about,
        usuario:data.usuario,
        password:data.password,
        listaEducacion:data.listaEducacion,
        listaExperiencia: data.listaExperiencia, 
        listaProyecto: data.listaProyecto,
        listaRedes: data.listaRedes,
        listaTecnologia: data.listaTecnologia,
        listaIdioma: data.listaIdioma

      });
      this.infoEdit = data;
      //console.log("data traer item: "+JSON.stringify(this.infoEdit));
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

    

  /*onFileSelect(event:any){
    if (event.target.files.length > 0) {
      console.log(event.currentTarget.files[0])
      const file = event.currentTarget.files[0];
      console.log("onfileselect: "+file);
      
      console.log(this.form.get('fotoPerfil'));
      //this.form.get('fotoPerfil').setValue(file);
    }
  }*/


    
  

}
