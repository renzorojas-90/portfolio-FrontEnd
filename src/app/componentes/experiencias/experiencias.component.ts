import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})

export class ExperienciasComponent implements OnInit {

  info: any;
  form: FormGroup;
  infoEdit: any;

  constructor(private dataService:ExperienciaService, private formbuilder: FormBuilder, private ruta: Router) {
    
    this.form = this.formbuilder.group({
      
      id: ["",Validators.required],
      nombreEmpresa:["",Validators.required],
      logoLaboral: ["",Validators.required],
      tituloPuesto: ["",Validators.required],
      periodo: ["",Validators.required],
      descripcion: ["",Validators.required]

      
    });

    
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

  traerItem(idItem:any){
    this.dataService.buscarItem(idItem).subscribe(data=>{
      this.infoEdit = data;
      console.log(data);
      this.form.patchValue({
        
        id: data.id,
        nombreEmpresa:data.nombreEmpresa,
        logoLaboral: data.logoLaboral,
        tituloPuesto: data.tituloPuesto,
        periodo: data.periodo,
        descripcion: data.descripcion,
    
      });
    });

    
  }

}
