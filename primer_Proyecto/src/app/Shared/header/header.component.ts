import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuRoutes } from '../../menu/menu';
import { MenuInfoInterface } from '../../core/interface/menu-info.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  MenuItems: MenuInfoInterface[] = [];

  //Ciclos de vida de angular: Cada vez que el componente se renderiza, lo primero que ocurre es el metodo
  //ngOnInit
  ngOnInit(): void {
    this.MenuItems = MenuRoutes;

  }
}
