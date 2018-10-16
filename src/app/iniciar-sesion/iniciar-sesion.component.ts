import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

	formulario:any;

	constructor(private servicioUsuarios:UsuariosService) {
		this.formulario={
			auth:{
				email= ""
				password= ""
			}
		}
	}

	ngOnInit() {
	}

	iniciar_Sesion(){
		console.log(this.formulario)
	}

}
