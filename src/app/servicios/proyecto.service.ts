import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  public api : string;

  //constructor(private http:HttpClient) { this.api =  "https://backportafolioweb.onrender.com"; }
  constructor(private http:HttpClient) { this.api =  "http://localhost:8080"; }

  

  obtenerDatos():Observable<any>{

    return this.http.get(this.api+"/ver/persona/1"); 

  }

  addItem(datosFormulario:any,idpersona:any):Observable<any>{

     return this.http.post(this.api+"/new/proyecto/"+idpersona,datosFormulario);
     

  }

  eliminarItem(idpersona:any,idItem:any):Observable<any>{

    return this.http.delete(this.api+"/eliminar/proyecto/"+idpersona+"/"+idItem);
  }

  editItem(datosFormulario:any):Observable<any>{

    return this.http.put(this.api+"/editar/proyecto",datosFormulario);
  }

  buscarItem(idItem: any):Observable<any>{ 
    return this.http.get(this.api+"/ver/proyecto/"+idItem); 
  }
}
