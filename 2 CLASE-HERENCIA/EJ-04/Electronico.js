// Clase base Electrodomestico
class Electronico {
    // Constructor
    constructor(marca, modelo, procesador) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.ram = parseInt(prompt("Ingrese la cantidad de RAM en GB: ")); // Pedir la RAM con prompt
    }

    // Método para registrar y mostrar la información del dispositivo
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>DETALLES DEL DISPOSITIVO</div>");
        document.write(`<p>Marca: ${this.marca}</p>`);
        document.write(`<p>Modelo: ${this.modelo}</p>`);
        document.write(`<p>Procesador: ${this.procesador}</p>`);
        document.write(`<p>RAM: ${this.ram} GB</p>`);
    }
}

// Subclase Laptop que hereda de Electronico
class Laptop extends Electronico {
    // Constructor
    constructor(marca, modelo, procesador, disco_duro) {
        super(marca, modelo, procesador); // Llamada al constructor de la clase base
        this.disco_duro = disco_duro;
        this.bateria = parseInt(prompt("Ingrese la duración de la batería en horas: ")); // Pedir la batería con prompt
    }

    // Método para registrar detalles específicos de la laptop
    registrar() {
        super.registrar(); // Llamar al método de la clase base
        document.write(`<p>Disco Duro: ${this.disco_duro}</p>`);
        document.write(`<p>Duración de la batería: ${this.bateria} horas</p>`);
        document.write("<hr>");
    }

    // Método para encender la laptop
    encender() {
        let nivel_bateria = parseInt(prompt("Ingrese el (nivel) % de batería del laptop: ")); // Pedir el nivel de batería
        if (nivel_bateria > 0 && nivel_bateria <= 100) {
            document.write("<p>Encendiendo la laptop...</p>");
            document.write("<p>Mostrando detalles...</p>");
            this.registrar();
        } else {
            document.write("<p>La batería no puede tener un nivel menor o igual a 0 ni mayor o igual a 100% para encender.</p>");
        }
    }
}

// Creación de una instancia de la clase Laptop
let laptop1 = new Laptop("Dell", "XPS 13", "Intel Core i7", "SSD 512GB");

// Registrar los detalles de la laptop
laptop1.registrar();

// Encender la laptop
laptop1.encender();
