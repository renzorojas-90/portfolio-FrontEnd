import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    EncabezadoComponent,
    ExperienciasComponent,
    EducacionComponent,
    TecnologiasComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AutenticacionService,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
