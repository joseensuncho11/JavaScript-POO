// Clase base Instrumento
class Instrumento {
    // Constructor
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.precio = parseFloat(prompt("Ingrese el precio del instrumento: ")); // Pedir el precio con prompt
    }

    // Método para registrar y mostrar la información del instrumento
    registrar() {
        document.write("<hr>");
        document.write(`<p>Tipo: ${this.tipo}</p>`);
        document.write(`<p>Marca: ${this.marca}</p>`);
        document.write(`<p>Material: ${this.material}</p>`);
        document.write(`<p>Precio: $${this.precio}</p>`);
    }
}

// Subclase Guitarra que hereda de Instrumento
class Guitarra extends Instrumento {
    // Constructor
    constructor(tipo, marca, material, num_cuerdas) {
        super(tipo, marca, material); // Llamada al constructor de la clase base
        this.num_cuerdas = num_cuerdas;
        this.acordes = prompt("Ingrese los acordes básicos que conoce (separados por comas): ").split(','); // Pedir acordes al usuario
    }

    // Método para registrar detalles específicos de la guitarra
    registrar() {
        super.registrar(); // Llamar al método de la clase base
        document.write(`<p>Número de cuerdas: ${this.num_cuerdas}</p>`);
        document.write("<hr>");
    }

    // Método para tocar la guitarra
    tocar() {
        document.write("<p>Tocando la guitarra...</p>");
        for (let acorde of this.acordes) {
            document.write(`<p>Tocando el acorde: ${acorde.trim()}</p>`);
        }
    }
}

// Creación de una instancia de la clase Guitarra
let guitarra1 = new Guitarra("Guitarra Acústica", "Fender", "Madera", 6);

// Registrar los detalles de la guitarra
guitarra1.registrar();

// Tocar la guitarra
guitarra1.tocar();
