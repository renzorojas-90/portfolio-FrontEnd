import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { PorfolioService } from './servicios/porfolio.service';
import { ProyectoService } from './servicios/proyecto.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { RedesComponent } from './componentes/redes/redes.component';
import { RedesService } from './servicios/redes.service';
import { EncabezadoService } from './servicios/encabezado.service';
import { from } from 'rxjs';
import { HighchartsChartModule } from 'highcharts-angular';
import { TecnologiaService } from './servicios/tecnologia.service';
import { GraficoComponent } from './componentes/grafico/grafico.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciasComponent,
    EducacionComponent,
    TecnologiasComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent,
    RedesComponent,
    GraficoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HighchartsChartModule

  ],
  providers: [
    AutenticacionService,
    PorfolioService,
    ProyectoService,
    ExperienciaService,
    RedesService,
    EncabezadoService,
    TecnologiaService,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
