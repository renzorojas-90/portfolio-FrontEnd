import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  public api : string;

  //constructor(private http:HttpClient) { this.api =  "https://backportafolioweb.onrender.com"; }
  constructor(private http:HttpClient) { this.api =  "http://localhost:8080"; }

  

  obtenerDatos():Observable<any>{

    return this.http.get(this.api+"/ver/persona/1"); 

  }

  /*editItem(datosFormulario:any,file: File):Observable<any> {
    return this.http.post(this.api+"/editar/persona", file,datosFormulario);
  }*/

 /* basicUploadSingleImage(datosFormulario:any,file: File):Observable<any> {
    return this.http.post(this.api+"/editar/persona", file,datosFormulario);  
  }*/

    

   editItem(datosFormulario:any):Observable<any>{
    return this.http.put(this.api+"/editar/persona",datosFormulario);
  }

  buscarItem(idItem: any):Observable<any>{ 
    return this.http.get(this.api+"/ver/persona/"+idItem); 
  }
}
