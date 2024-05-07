import { Component, OnInit } from '@angular/core';
import { Listadoïnterface } from '../../core/interface/Listado.interfece';
import { TableComponent } from '../../components/table/table.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent implements OnInit {
  Listado: Listadoïnterface[] = [];
  Columnas: string[] = [];
  InformacionObtenida: any;

  ngOnInit(): void {
    this.Listado = [
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
        nombre: 'Gloria Mancilla',
        fechaNacimiento: new Date('1975-06-18'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '52663985',
        numeroTelefono: 3045512645,
        email: 'glorita004@gmoil.com',
        peso: '45kg',
      },
    ];
    this.obtenerColumnas(this.Listado);
  }
  obtenerColumnas(usuarios: Listadoïnterface[]) {
    if (usuarios.length > 0) {
      this.Columnas = Object.keys(usuarios[0]);
    }
  }

  recibirInformacion(ListaDePersonas: Listadoïnterface){
this.InformacionObtenida = ListaDePersonas;
Swal.fire({
  title: "Información detallada de la Persona",
  icon: "info",
  html: `<div>
            <a>${ListaDePersonas.nombre}</a><br>
            <a>${ListaDePersonas.tipoDocumento}</a><br>
            <a>${ListaDePersonas.numeroDocumento}</a><br>
            <a>${ListaDePersonas.fechaNacimiento}</a><br>
            <a>${ListaDePersonas.numeroTelefono}</a><br>
            <a>${ListaDePersonas.email}</a><br>
            <a>${ListaDePersonas.peso}</a>
          </div>
         `,
});

  }
}
