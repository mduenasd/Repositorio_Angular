import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-boton',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo-boton.component.html',
  styleUrl: './ejemplo-boton.component.css'
})
export class EjemploBotonComponent {
  ListaNueva: string[] = ['Plantar','Sembrar','Regar','Cultivar','Germinar','Abonar']
}
