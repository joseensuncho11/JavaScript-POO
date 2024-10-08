class Libro {
    // Método constructor
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo; // privado
        this._autor = autor; // privado
        this._isbn = isbn; // privado
        this.editorial = editorial; // público
    }

    // Métodos getter para los atributos privados
    obtenerTitulo() {
        return this._titulo;
    }

    obtenerAutor() {
        return this._autor;
    }

    obtenerISBN() {
        return this._isbn;
    }

    // Métodos setter para los atributos privados
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    establecerISBN(nuevoISBN) {
        this._isbn = nuevoISBN;
    }

    // Método para mostrar la información completa del libro
    mostrarInformacion() {
        document.write(`<br>Título: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`ISBN: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// Crear un objeto de la clase Libro
const libro = new Libro("Cien Años de Soledad", "Gabriel García Márquez", "978-3-16-148410-0", "Sudamericana");

// Mostrar la información del libro
libro.mostrarInformacion();

document.write("<br>");

// Modificar atributos privados usando setters
libro.establecerTitulo("El amor en los tiempos del cólera");
libro.establecerAutor("Gabriel García Márquez");
libro.establecerISBN("978-84-376-0494-7");

// Mostrar nuevamente la información modificada
document.write(`<br>Título: ${libro.obtenerTitulo()}<br>`);
document.write(`Autor: ${libro.obtenerAutor()}<br>`);
document.write(`ISBN: ${libro.obtenerISBN()}<br>`);
document.write(`Editorial: ${libro.editorial}<br>`);
