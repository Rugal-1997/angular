import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

	articulo:any;

	constructor(private servicioArticulos:ArticulosService, private router:Router) {
		this.articulo={titulo: "",contenido: ""};
	}

	ngOnInit() {
	}

	crear_Articulo(){
		this.servicioArticulos.crearArticulos(this.articulo).subscribe(respuesta=>{
			this.router.navigate(['/articulos',respuesta.id]);
		},error=>{
			alert('No se pudo crear el articulo');
		});
	}

}
