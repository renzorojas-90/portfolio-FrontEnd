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

  formlogin:FormGroup;
  constructor(private formbuilder: FormBuilder, private autenticacionService: AutenticacionService, private ruta:Router) { 

    this.formlogin = this.formbuilder.group({

      usuario: ['',Validators.required],
      password: ['',Validators.required]


    })
  }

  ngOnInit(): void {
  }

  get usuario(){
    return this.formlogin.get('usuario');
  }

  get password(){
    return this.formlogin.get('password');
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.autenticacionService.iniciarSesion(this.formlogin.value.usuario,this.formlogin.value.password).subscribe(data => {
      console.log("datalogin: " + JSON.stringify(data));
      //this.ruta.navigate(['/portfolio']);
    })

  }

}
