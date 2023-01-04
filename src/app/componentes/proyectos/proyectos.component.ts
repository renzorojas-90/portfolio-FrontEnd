import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  info: any;
  form: FormGroup;
  infoEdit: any;

  constructor(private dataService:ProyectoService, private formbuilder: FormBuilder, private ruta: Router) {
    
    this.form = this.formbuilder.group({
      id: [Validators.required],
      nombre: ["",Validators.required],
      fechaRealizado :["",Validators.required],
      descripcion: ["",Validators.required],
      linkEvidencia:["",Validators.required],
    })

    
   }

  ngOnInit(): void {
    this.actualizarportfolio();
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

  }

  onEliminarItem(event: Event,idpersona: any,idItem: any){
    event.preventDefault;
    this.dataService.eliminarItem(idpersona,idItem).subscribe(data =>{
      this.actualizarportfolio();
    });

  }

  editarItem(event: Event){
    event.preventDefault;
    console.log(this.form.value);
    this.dataService.editItem(this.form.value).subscribe(data=>{
      this.actualizarportfolio();
    });

    
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
    
      });
    });

    
  }

}
