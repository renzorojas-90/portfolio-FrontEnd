import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  public api : string;

  constructor(private http:HttpClient) { this.api =  "https://backportafolioweb.onrender.com"; }
  //constructor(private http:HttpClient) { this.api =  "http://localhost:8080"; }

  

  obtenerDatos():Observable<any>{

    return this.http.get(this.api+"/ver/persona/1"); 

  }

  addItem(datosFormulario:any,idpersona:any):Observable<any>{

     return this.http.post(this.api+"/new/experiencia/"+idpersona,datosFormulario);
     
  }

  eliminarItem(idpersona:any,idItem:any):Observable<any>{

    return this.http.delete(this.api+"/eliminar/experiencia/"+idpersona+"/"+idItem);
  }

  editItem(datosFormulario:any):Observable<any>{

    return this.http.put(this.api+"/editar/experiencia",datosFormulario);
  }

  buscarItem(idItem: any):Observable<any>{ 
    return this.http.get(this.api+"/ver/experiencia/"+idItem); 
  }
}
