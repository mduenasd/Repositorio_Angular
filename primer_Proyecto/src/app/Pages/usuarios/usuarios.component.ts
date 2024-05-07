import { Component, OnInit } from '@angular/core';
import { Listadoïnterface } from '../../core/interface/Listado.interfece';
import { TableComponent } from '../../components/table/table.component';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  Usuarios: Listadoïnterface[] = [];
  Columnas: string[] = [];
  InformacionUsuario: any;

  ngOnInit(): void {
    this.Usuarios = [
      {
        nombre: 'Maria Del Espino',
        fechaNacimiento: new Date('2002-02-04'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '1005542114',
        numeroTelefono: 3145582321,
        email: 'maria.espino@feil.co',
        peso: '',
      },
      {
        nombre: 'Jose Cabarcas',
        fechaNacimiento: new Date('1982-07-30'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '10855741',
        numeroTelefono: 3148852141,
        email: 'jose.espino@market.com',
        peso: '52kg',
      },
      {
        nombre: 'Bernardo Olimpo',
        fechaNacimiento: new Date('1993-10-24'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '56663255',
        numeroTelefono: 3025884411,
        email: 'beroli12@nortblue.co',
        peso: '60kg',
      },
      {
        nombre: 'Camilo Puentes',
        fechaNacimiento: new Date('2003-12-04'),
        tipoDocumento: 'Pasaporte',
        numeroDocumento: 'AF7455222',
        numeroTelefono: 3148897425,
        email: 'reality@emprender.co.es',
        peso: '',
      },
      {
        nombre: 'Maria Rendon',
        fechaNacimiento: new Date('2005-06-18'),
        tipoDocumento: 'Tarjeta de Identidad',
        numeroDocumento: '1100411452',
        numeroTelefono: 3045512645,
        email: 'glorita004@gmoil.com',
        peso: '45kg',
      },
    ];

    this.obtenerColumnas(this.Usuarios);
  }
  obtenerColumnas(usuarios: Listadoïnterface[]) {
    if (usuarios.length > 0) {
      this.Columnas = Object.keys(usuarios[0]);
    }
  }

  recibirInformacion(ListaDeUsuarios: Listadoïnterface) {
    this.InformacionUsuario = ListaDeUsuarios;
    Swal.fire({
      title: 'Información de Usuario',
      icon: 'info',
      html: `<div>
            <a>Usuario: ${ListaDeUsuarios.nombre}</a><br>
            <a>${ListaDeUsuarios.numeroDocumento}</a><br>
            <a>${ListaDeUsuarios.email}</a><br>
            <a>${ListaDeUsuarios.numeroTelefono}</a>
          </div>
         `,
    });
  }
}
