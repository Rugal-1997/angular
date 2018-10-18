import { Injectable } from '@angular/core';  /* Inyectar servicio */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

	url:string;
	encabezados:any; 

	constructor(private http:HttpClient) {
		this.url="https://apidocumentospiensadigital.herokuapp.com";
		this.encabezados={ headers: new HttpHeaders({'Content-Type': 'Application/json'})
		};
	}

	iniciarSesion(usuario:any):Observable<any>{
		return this.http.post<any>(this.url+'/user_token',usuario,this.encabezados);
	}

	crearCuenta(usuario:any):Observable<any>{
		return this.http.post<any>(this.url+'/users',usuario,this.encabezados);
	} 
}
