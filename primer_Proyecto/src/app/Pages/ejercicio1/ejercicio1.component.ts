import { Component } from '@angular/core';
import { PersonaComponent } from "../persona/persona.component";
import { ImagenesComponent } from "../imagenes/imagenes.component";
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-ejercicio1',
    standalone: true,
    templateUrl: './ejercicio1.component.html',
    styleUrl: './ejercicio1.component.css',
    imports: [InicioComponent, PersonaComponent, ImagenesComponent, RouterLink],
})
export class InicioComponent {

  MostrarTitulo : boolean = true;

  Listado = [
    { Nombre : 'Camila',
      Edad : 14,
      LibroPrestado : 'La princesa y el sapo',
      Registro : 47444,
      DescripcionPrestamo : 'Camila pidio el prestamo la semana pasada, por las siguiente 3 semanas. Se aprobo',
    },
    { Nombre : 'Lorena',
      Edad : 12,
      LibroPrestado : 'Los tres cerditos',
      Registro : 47445,
      DescripcionPrestamo : 'Lorena pidio el prestamo hoy, por los siguientes 3 días. Se aprobo prestamo',
    },
    { Nombre : 'Michel',
      Edad : 18,
      LibroPrestado : 'Etica para Amador',
      Registro : 47441,
      DescripcionPrestamo : 'Michel pidio el prestamo ayer en la tarde, por los siguientes 3 meses. Se aprobo',
    },
    { Nombre : 'Carlos',
      Edad : 17,
      LibroPrestado : 'Don Quixote de la Mancha',
      Registro : 47420,
      DescripcionPrestamo : 'Carlos pidio el prestamo la ayer en la mañana, por las siguiente 3 semanas. se aprobo',
    },
    { Nombre : 'Sofiha',
      Edad : 22,
      LibroPrestado : 'La chica del Tren',
      Registro : 47155,
      DescripcionPrestamo : 'Sofiha pidio el prestamo hace 4 días, por las siguiente 3 semanas. se aprobo',
    },
]

constructor(private router: Router){}

cambioRuta(){
  this.router.navigateByUrl('/Inicio');
}

nuevaRuta(){
  this.router.navigateByUrl('/ListaNueva')
}

}


