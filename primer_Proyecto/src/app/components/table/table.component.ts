import { DatePipe } from '@angular/common';
import { Listadoïnterface } from './../../core/interface/Listado.interfece';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  @Input() Data: any[] = [];
  @Input() Titulo: string = '';
  @Input() Columnas: string[] = [];

  @Output() onInformacion: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {

  }

  formatearNombreDeColomnas (columna: string): string {
    //Dividir el nombre por mayusculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  }

  isFecha(value: any): boolean{
return value instanceof Date;
  }

  enviarInformacion (Data: any){
    console.log(Data);
    this.onInformacion.emit(Data);
  }
}
