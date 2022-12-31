import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{

    return this.http.get('http://localhost:8080/ver/persona/1'); 

  }

  addEducacion(educacion:any,idpersona:any):Observable<any>{

    return this.http.post("http://localhost:8080/new/educacion/"+idpersona,educacion);

  }

  eliminarEducacion(educacion:any,persona:any):Observable<any>{

    return this.http.delete("http://localhost:8080/eliminar/educacion/"+educacion+"/"+persona);
  }

}
