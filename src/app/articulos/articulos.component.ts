import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

	articulos:array<any>;

	constructor(private servicioArticulos:ArticulosService) {
		this.articulos=[{titulo: "",contenido: ""}];
	}

	ngOnInit() {
		this.servicioArticulos.traerArticulos().subscribe(respuesta=>{
			this.articulos=respuesta;
		},error=>{
			alert('No se han podido traer los articulos');
		});
	}

	eliminar_Articulo(id){
		let confirmacion= confirm('Estas seguro');
		if(confirmacion==true){
			this.servicioArticulos.eliminarArticulo(id).subscribe(respuestaEliminar=>{
				alert('Articulo Eliminado')
				this.servicioArticulos.traerArticulos().subscribe(respuesta=>{
					this.articulos=respuesta;
				},error=>{
					alert('No se han podido traer los articulos');
				});
			},errorEliminar=>{
				alert("No se ha podido eliminar el articulo")
			});
		}
	}
}
