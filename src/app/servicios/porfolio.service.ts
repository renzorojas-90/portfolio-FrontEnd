import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  public api : string;

  //constructor(private http:HttpClient) { this.api =  "http://localhost:8080"; }

  constructor(private http:HttpClient) { this.api =  "https://backportafolioweb.onrender.com"; }

  obtenerDatos():Observable<any>{

    return this.http.get(this.api+"/ver/persona/1"); 

  }

  addEducacion(educacion:any,idpersona:any):Observable<any>{

     return this.http.post(this.api+"/new/educacion/"+idpersona,educacion);
     

  }

  eliminarEducacion(educacion:any,persona:any):Observable<any>{

    return this.http.delete(this.api+"/eliminar/educacion/"+educacion+"/"+persona);
  }

  edit_Educacion(educacion:any):Observable<any>{

    return this.http.put(this.api+'/editar/educacion',educacion);
  }

  buscarEducacion(educacion: any):Observable<any>{ 
    return this.http.get(this.api+"/ver/educacion/"+educacion); 
  }

}
