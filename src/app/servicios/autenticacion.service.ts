import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url='http://localhost:8080/login';
  currentUserSubject: BehaviorSubject<any>;

  obtenerSecion:any;
 var : any;

  constructor(private http:HttpClient) { 

    console.log("auttenticacion corriendo")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    
  }

  iniciarSesion(usuario:String,password:string): Observable<any> {
    return this.http.get(this.url+"/"+usuario+"/"+password).pipe(map(data => {

      this.var = data;

      if(this.var.usuario!==null && this.var.password!==null){
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      alert("Usuario autenticado correctamente para Edicion");
      }

      console.log("data autenticacion:" +JSON.stringify(data));
      return data;
    }))  
  }

 get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }

  datosSecion(){
    return this.obtenerSecion= sessionStorage.getItem('currentUser');
  }
  
  borrarSecion() {
    sessionStorage.clear();
  }
}
