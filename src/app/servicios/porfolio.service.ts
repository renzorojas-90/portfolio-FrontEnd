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

  

}
