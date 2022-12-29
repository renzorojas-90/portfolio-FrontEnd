import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AutenticacionService } from './autenticacion.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor { 

  constructor(private autenticacionServicio:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser = this.autenticacionServicio.usuarioAutenticado;

      if(currentUser && currentUser.accessToken)
      {
        req=req.clone({
          setHeaders: {
            Autorization: 'Bearer  ${currentUser.accessToken}'
          }
        })
      }

      console.log('el interceptor esta corriendo' + JSON.stringify(currentUser));
    return next.handle(req);
  }

}
