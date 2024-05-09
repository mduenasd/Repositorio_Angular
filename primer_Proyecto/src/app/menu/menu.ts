import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from '../core/interface/menu-info.interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: 'fa-solid fa-house',
    classCSS: '',
    SubMenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: 'Acerca De',
    icon: '',
    classCSS: '',
    SubMenu: [
      {
        path: PATH.IMAGENES,
        title: 'Imagenes',
        icon: '',
        classCSS: '',
        SubMenu: [],
      },
    ],
  },
  {
    path: PATH.ARTICULO,
    title: 'Articulo',
    icon: '',
    classCSS: '',
    SubMenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contacto',
    icon: '',
    classCSS: '',
    SubMenu: [],
  },
  {
    path: PATH.LISTADO,
    title: 'Listado',
    icon: '',
    classCSS: '',
    SubMenu: [],
  },
  {
    path: PATH.USUARIOS,
    title: 'Usuarios',
    icon: '',
    classCSS: '',
    SubMenu: [],
  },
  {
    path: PATH.PRODUCTO,
    title: 'Producto.',
    icon: '',
    classCSS: '',
    SubMenu: [],
  },
  {
    path: PATH.TAREAS,
    title: 'Tareas',
    icon: '',
    classCSS: '',
    SubMenu: [],
  }
];
