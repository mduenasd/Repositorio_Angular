import { ProductoInterface } from './../../core/interface/Producto.interface';
import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  Producto: ProductoInterface[] = [];
  Columnas: string[] = [];
  InformacionRecibida: any;

  ngOnInit(): void {
    this.Producto = [
      {
        Nombre: 'Arroz',
        SKU: 'AD1541',
        Cantidad: 3,
        Precio: 2500,
      },
      {
        Nombre: 'Pasta',
        SKU: 'PS9521',
        Cantidad: 5,
        Precio: 4500,
      },
      {
        Nombre: 'Six pack de Leche',
        SKU: 'LS7741',
        Cantidad: 2,
        Precio: 25000,
      },
      {
        Nombre: 'Panela',
        SKU: 'PN52661',
        Cantidad: 14,
        Precio: 0,
      },
      {
        Nombre: 'Aceite de Oliva',
        SKU: 'AO89998',
        Cantidad: 10,
        Precio: 35000,
      },
    ];

    this.obtenerColumna(this.Producto);
  }
  obtenerColumna(usuarios: ProductoInterface[]){
    if (usuarios.length > 0) {
      this.Columnas = Object.keys(usuarios[0]);
    }
  }

  recibirInformacion (Data: ProductoInterface){
    this.InformacionRecibida = Data;

    Swal.fire({
      title: "Información de producto",
      icon: "info",
      html: `<div>
                <a>${Data.Nombre}</a><br>
                <a>${Data.SKU}</a><br>
                <a>${Data.Cantidad}</a><br>
                <a>${Data.Precio}</a>
              </div>
             `,
    });
  }
}


