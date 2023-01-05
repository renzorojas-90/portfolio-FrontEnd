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

  constructor(private http:HttpClient) { 

    console.log("auttenticacion corriendo")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    
  }

  iniciarSesion(credenciales:string,credencial:string): Observable<any> {
    return this.http.get(this.url+"/"+credenciales+"/"+credencial).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);

      console.log(data);
      return data;
    }))  
  }

 get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }

  datosSecion(){
    return this.obtenerSecion= sessionStorage.getItem('currentUser');
  }

}
