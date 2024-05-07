import { Routes } from '@angular/router';
import { PersonaComponent } from './Pages/persona/persona.component';
import { InicioComponent } from './Pages/ejercicio1/ejercicio1.component';
import { EjemploBotonComponent } from './Pages/ejemplo-boton/ejemplo-boton.component';
import { AcercaDeComponent } from './Pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { ImagenesComponent } from './Pages/imagenes/imagenes.component';
import { ArticuloComponent } from './Pages/articulo/articulo.component';
import { PATH } from './core/enum/path.enum';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { ListaDeTareasComponent } from './Pages/lista-de-tareas/lista-de-tareas.component';

export const routes: Routes = [
  // Creación de una Ruta con rutas hijas
  // Se pueden incluir varias rutas hijas
  {
    path: PATH.HOME,
    title: 'Home',
    children: [
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.ACERCADE,
        title: '¿Quienes Somos?',
        component: AcercaDeComponent,
      },
      {
        path: PATH.ARTICULO,
        title: 'Video',
        component: ArticuloComponent,
      },
      {
        path: PATH.CONTACTO,
        title: 'Contacto',
        component: ContactoComponent,
      },
      {
        path: PATH.IMAGENES,
        title: 'Imagenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.LISTADO,
        title: 'Listado de Personas',
        component: PersonaComponent,
      },
      {
        path: PATH.USUARIOS,
        title: 'Usuarios',
        component: UsuariosComponent,
      },
      {
        path: PATH.PRODUCTO,
        title: 'Producto',
        component: ProductoComponent,
      },
      {
        path: PATH.TAREAS,
        title: 'Tareas',
        component: ListaDeTareasComponent,
      },
    ],
  },
];
