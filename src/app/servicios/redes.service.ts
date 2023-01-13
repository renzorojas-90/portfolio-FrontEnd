import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  public api : string;

  constructor(private http:HttpClient) { this.api =  "https://backportafolioweb.onrender.com"; }

  

  obtenerDatos():Observable<any>{

    return this.http.get(this.api+"/ver/persona/1"); 

  }

  addItem(datosFormulario:any,idpersona:any):Observable<any>{

     return this.http.post(this.api+"/new/redes/"+idpersona,datosFormulario);
     
  }

  eliminarItem(idpersona:any,idItem:any):Observable<any>{

    return this.http.delete(this.api+"/eliminar/redes/"+idpersona+"/"+idItem);
  }

  editItem(datosFormulario:any):Observable<any>{

    return this.http.put(this.api+"/editar/redes",datosFormulario);
  }

  buscarItem(idItem: any):Observable<any>{ 
    return this.http.get(this.api+"/ver/redes/"+idItem); 
  }

}
