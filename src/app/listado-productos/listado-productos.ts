import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos implements OnInit {
  productos: Producto[] = [
    new Producto('Pantalon', 150),
    new Producto('Camisa', 120),
    new Producto('Playera', 50),
    new Producto('Zapatos', 200),
    new Producto('Sudadera', 300),
    new Producto('Bufanda', 80),
  ];

  nuevoProducto: string = '';
  nuevoPrecio: number | null = null;

  ngOnInit() {
    this.OrdenarPorPrecioDescendente();
  }

  AgregarProducto() {
    if (this.nuevoProducto && this.nuevoPrecio !== null) {
      this.productos.push({
        descripcion: this.nuevoProducto,
        precio: this.nuevoPrecio,
      });

      // ¡Ordenar también al agregar!
      this.OrdenarPorPrecioDescendente();

      this.nuevoProducto = '';
      this.nuevoPrecio = null;
    }
  }

  OrdenarPorPrecioDescendente() {
    this.productos.sort((a, b) => b.precio - a.precio);
  }
}
