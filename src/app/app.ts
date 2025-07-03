import { Component } from '@angular/core';
import { ListadoProductos } from './listado-productos/listado-productos';

@Component({
  selector: 'app-root',
  imports: [ListadoProductos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected titulo = 'Tienda Online';

  currentYear: number = new Date().getFullYear();
}
