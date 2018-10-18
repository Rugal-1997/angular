import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-articulo',
  templateUrl: './mostrar-articulo.component.html',
  styleUrls: ['./mostrar-articulo.component.css']
})
export class MostrarArticuloComponent implements OnInit {

	articulo:any;

	constructor(private servicioArticulos:ArticulosService, private route:ActivatedRoute) {
		this.articulo={titulo: "",contenido:""};
	}

	ngOnInit() {
		this.route.params.subscribe(ruta=>{
			this.servicioArticulos.mostrarArticulo(ruta.id).subscribe(respuesta=>{
				this.articulo=respuesta;
			},error=>{
				alert('No se pudo traer el articulo');
			});
		},errorRuta=>{
			alert('No se pudo obtener la ruta del articulo');
		});
	}
}
