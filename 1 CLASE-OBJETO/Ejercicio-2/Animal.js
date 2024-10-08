class Animal {
    // Constructor de la clase
    constructor(numPatas, color, alimentacion, especie, peso) {
        // Defino los atributos de la instancia de la clase
        this.numPatas = numPatas;
        this.color = color;
        this.alimentacion = alimentacion;
        this.especie = especie;
        this.peso = peso;
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<hr>");
        document.write("Mostrar detalles del objeto<br>");
        document.write(`Número de patas: ${this.numPatas}<br>`);
        document.write(`Alimentación: ${this.alimentacion}<br>`);
        document.write(`Especie: ${this.especie}<br>`);
        document.write(`Color: ${this.color}<br>`);
        document.write(`Peso: ${this.peso} Kg<br>`);
    }

    // Métodos de clase
    comer() {
        document.write(`El animal: ${this.especie} está comiendo... quedó satisfecho aumento 1 k su nuevo peso es ${this.peso + 1}`);
    }

    morir() {
        console.log(`El animal: ${this.especie} se murió`);
    }
}

// Creo objetos de la clase Animal
let animal1 = new Animal("4 patas", "Blanco", "Herbívoro", "Vaca", 100);
let animal2 = new Animal("4 patas", "Gris", "Omnívoro", "Gato", 3);
let animal3 = new Animal("8 patas", "Negro", "Carnívoro", "Araña", 0.10);

// Muestro detalles de los animales
animal1.mostrarDetalles();
animal2.mostrarDetalles();
animal3.mostrarDetalles();

// Uso los metodos de la clase animales
animal1.comer();
animal1.morir();
