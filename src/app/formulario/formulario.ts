import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  AgregarProducto() {
    const descripcion = this.descripcionInput.nativeElement.value.trim();
    const precio = parseFloat(this.precioInput.nativeElement.value);

    if (descripcion === '' || isNaN(precio) || precio <= 0) {
      return; // no se agrega nada si no es válido
    }

    const producto = new Producto(descripcion, precio);
    this.nuevoProducto.emit(producto);

    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = '';
  }
}
