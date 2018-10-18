import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

	url:string;
	encabezados:any;

	constructor(private http:HttpClient) {
		this.url="https://apidocumentospiensadigital.herokuapp.com/articulos";
		this.encabezados={headers: new HttpHeaders({
			'Content-Type': 'Application/json',
			'Authorization': 'Bearer '+localStorage.getItem('sessionToken')}
		)};
	}

	traerArticulos():Observable<any>{
		return this.http.get<any>(this.url,this.encabezados);
	}

	mostrarArticulo(id:string):Observable<any>{
		return this.http.get<any>(this.url+'/'+id,this.encabezados);
	}

	crearArticulos(articulo:any):Observable<any>{
		return this.http.post<any>(this.url,articulo,this.encabezados);
	}

	editarArticulo(articulo:any):Observable<any>{
		return this.http.put<any>(this.url+'/'articulo.id,articulo,this.encabezados);
	}

	eliminarArticulo(id:string):Observable<any>{
		return this.http.delete<any>(this.url+'/'id,this.encabezados);
	}

}
