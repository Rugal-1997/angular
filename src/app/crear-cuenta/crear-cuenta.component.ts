import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

	formulario:any;

	constructor(private servicioUsuarios:UsuariosService, private router:Router) {
		this.formulario={
			user:{
				name: "",
				email: "",
				password: "",
				password_confirmation: ""
			}
		}
	}

	ngOnInit() {
	}

	crear_Cuenta(){
		this.servicioUsuarios.crearCuenta(this.formulario).subscribe(respuesta=>{
			let autenticacion = {
				auth:{
					email:this.formulario.user.email,
					password:this.formulario.user.password
				}
			};
			this.servicioUsuarios.iniciarSesion(autenticacion).subscribe(respuestaAuth=>{
				localStorage.setItem('sessionToken',respuestaAuth.jwt);
				this.router.navigate(['/articulos']);
				alert('Usuario Creado, Bienvenido');
			},errorAuth=>{
				alert('Fallo la autenticacion');
			});
		},error=>{
			alert('No se ha podido crear el usuario, Revisa la consola');
		})
	}

}
