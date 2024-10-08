class Producto {
    // Método constructor
    constructor(nombre, precio, cantidad, categoria) {
        this._nombre = nombre; // privado
        this._precio = precio; // privado
        this.cantidad = cantidad; // público
        this.categoria = categoria; // público
    }

    // Métodos getter para los atributos privados
    obtenerNombre() {
        return this._nombre;
    }

    obtenerPrecio() {
        return this._precio;
    }

    // Métodos setter para los atributos privados
    establecerNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    establecerPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    // Método para mostrar toda la información del producto
    mostrarInformacion() {
        document.write(`<br>Nombre: ${this._nombre}<br>`);
        document.write(`Precio: ${this._precio}<br>`);
        document.write(`Cantidad: ${this.cantidad}<br>`);
        document.write(`Categoría: ${this.categoria}<br>`);
    }
}

// Crear un objeto de la clase Producto
const producto = new Producto("Laptop", 1000, 5, "Electrónica");

// Mostrar la información del producto
producto.mostrarInformacion();

document.write("<br>");

// Modificar atributos privados usando setters
producto.establecerNombre("Tablet");
producto.establecerPrecio(800);

// Mostrar nuevamente la información modificada
document.write(`<br>Nombre: ${producto.obtenerNombre()}<br>`);
document.write(`Precio: ${producto.obtenerPrecio()}<br>`);
document.write(`Cantidad: ${producto.cantidad}<br>`);
document.write(`Categoría: ${producto.categoria}<br>`);
