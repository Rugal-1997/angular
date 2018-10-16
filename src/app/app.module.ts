import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTPClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';

import { ArticulosService } from './articulos.service';
import { UsuariosService } from './usuarios.service';
 
const rutas:Routes=[
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'articulos', component: ArticulosComponent},
  {path:'iniciar_sesion', component: IniciarSesionComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full'}
]; 

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    ArticulosComponent,
    CrearArticuloComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    MostrarArticuloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HTTPClientModule,
    FormsModule
  ],
  providers: [
    ArticulosService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
