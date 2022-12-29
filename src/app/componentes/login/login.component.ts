import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private formbuilder: FormBuilder, private autenticacionService: AutenticacionService, private ruta:Router) { 

    this.form = this.formbuilder.group({

      usuario: ['',Validators.required],
      password: ['',Validators.required]


    })
  }

  ngOnInit(): void {
  }

  get usuario(){
    return this.form.get('usuario');
  }

  get password(){
    return this.form.get('password');
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.autenticacionService.iniciarSesion(this.form.value.usuario,this.form.value.password).subscribe(data => {
     // console.log("data: " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })

  }

}
