// Clase base Electrodomestico
class Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumo_electrico = parseInt(prompt("Ingrese el número de kWh que consume el refrigerador: ")); // Pedir input al usuario
    }

    // Método para registrar y mostrar la información del electrodoméstico
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELECTRODOMÉSTICO REGISTRADO</div>");
        document.write(`<p>Marca: ${this.marca}</p>`);
        document.write(`<p>Color: ${this.color}</p>`);
        document.write(`<p>Capacidad: ${this.capacidad} lt</p>`);
        document.write(`<p>Consumo: ${this.consumo_electrico} kWh</p>`);
    }
}

// Subclase Refrigerador que hereda de Electrodomestico
class Refrigerador extends Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad, tipo_refrigerador) {
        super(marca, color, capacidad); // Llamada al constructor de la clase base
        this.tipo_refrigerador = tipo_refrigerador;
        this.temperatura = parseInt(prompt("Ingresar temperatura del electrodoméstico en ºC: ")); // Pedir input al usuario
    }

    // Método para ajustar la temperatura
    ajustar_temperatura() {
        if (this.temperatura > 4) {
            document.write(`<p>La temperatura de ${this.temperatura} ºC es muy alta, ajustando...</p>`);
            this.temperatura = 4; // Ajuste a 4 ºC
            document.write(`<p>Temperatura ajustada a ${this.temperatura} ºC.</p>`);
        } else if (this.temperatura < -4) {
            document.write(`<p>La temperatura de ${this.temperatura} ºC es muy baja, ajustando...</p>`);
            this.temperatura = -4; // Ajuste a -4 ºC
            document.write(`<p>Temperatura ajustada a ${this.temperatura} ºC.</p>`);
        } else {
            document.write(`<p>La lectura de la temperatura presenta error, enviar a servicio técnico.</p>`);
        }
    }
}

// Creación de una instancia de la subclase Refrigerador
let refrigerador = new Refrigerador("Samsung", "Negro", 60, "No Frost");

// Registrar el refrigerador
refrigerador.registrar();

// Ajustar la temperatura
refrigerador.ajustar_temperatura();
