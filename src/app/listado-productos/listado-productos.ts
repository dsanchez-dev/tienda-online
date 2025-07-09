import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';
import { Formulario } from '../formulario/formulario';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, Formulario],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {
  productos: Producto[] = [
    new Producto('Pantalon', 150),
    new Producto('Camisa', 120),
    new Producto('Zapatos', 200),
  ];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
    this.ordenarPorPrecioDesc(); // Ordenar al agregar
  }

  ordenarPorPrecioDesc() {
    this.productos.sort((a, b) => b.precio - a.precio);
  }
}
