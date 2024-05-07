import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/header/header.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'primer_Proyecto';
  Nombre: string = 'Miguel Duban Dueñas';
  Edad: number = 22;
  Estatura: number = 173;
}
