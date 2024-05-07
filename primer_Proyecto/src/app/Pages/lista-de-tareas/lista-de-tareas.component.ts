import { ListaTareasInterface } from './../../core/interface/ListaDeTareas.Interface';
import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-de-tareas',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './lista-de-tareas.component.html',
  styleUrl: './lista-de-tareas.component.css',
})
export class ListaDeTareasComponent implements OnInit {
  ListaTareas: ListaTareasInterface[] = [];
  Columnas: string[] = [];

  ngOnInit(): void {
    this.ListaTareas = [
      {
        Prioridad: 'Media',
        DetallesTarea: 'Hacer ejercicio',
        FechaFinalizacion: new Date('2024-05-10'),
      },
    ];
console.log(this.ListaTareas);
    this.obtenerColumna(this.ListaTareas);
  }

  obtenerColumna(ColumnaTareas: ListaTareasInterface[]) {
    if (ColumnaTareas.length > 0) {
      this.Columnas = Object.keys(ColumnaTareas[0]);
    }
  }

 async AgregarTarea() {

    const { value: formValues } = await Swal.fire({
      title: 'Agregar Tarea',
      html: `
      <p class="text-primary-emphasis">Tarea Nueva</p>
      <input type="text" class="form-control" id="Tarea-Nueva" placeholder="Agregar Tarea"><br>
      <p class="text-primary-emphasis">Prioridad</p>
      <select class="form-select" id="Prioridad">
        <option selected>Seleccionar...</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
       </select><br>
      <p class="text-primary-emphasis">Fecha de Finalización</p>
      <input class="form-control form-control-sm" type="Date" id="Fecha-Entrega"><br>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById("Tarea-Nueva")as HTMLInputElement).value,
          (document.getElementById("Prioridad")as HTMLInputElement).value,
          (document.getElementById("Fecha-Entrega") as HTMLInputElement).value
        ];
      }
    });
    if (formValues) {
      const Tarea: ListaTareasInterface = {
        Prioridad: formValues[1],
        DetallesTarea: formValues[0],
        FechaFinalizacion: formValues[2]
      }
      this.ListaTareas.push(Tarea)
      Swal.fire(JSON.stringify(formValues));
    }
  }
}
