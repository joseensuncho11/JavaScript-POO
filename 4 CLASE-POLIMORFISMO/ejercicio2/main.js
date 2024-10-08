// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase padre
class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    descripcion() {
        // Este método será sobrescrito por las clases hijas
    }
}

// Clase hija Carro
class Carro extends Vehiculo {
    constructor(marca, modelo, anio, numPuertas) {
        super(marca, modelo, anio);
        this.numPuertas = numPuertas;
    }

    descripcion() {
            output.innerHTML += `<hr>`;
            output.innerHTML += `Datos del vehiculo: Carro<br>`;
            output.innerHTML += `Marca: ${this.marca} <br>`;
            output.innerHTML += `Modelo: ${this.modelo}<br>`;
            output.innerHTML += `Año: ${this.anio}<br>`;
            output.innerHTML += `Número de puertas: ${this.numPuertas}<br>`;
    }
}

// Clase hija Moto
class Moto extends Vehiculo {
    constructor(marca, modelo, anio, tipo) {
        super(marca, modelo, anio);
        this.tipo = tipo;  // Tipo de moto
    }

    descripcion() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Datos del vehiculo: Moto<br>`;
        output.innerHTML += `Marca: ${this.marca} <br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Año: ${this.anio}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
    }
}

// Clase hija Bicicleta
class Bicicleta extends Vehiculo {
    constructor(marca, modelo, anio, tipoFreno) {
        super(marca, modelo, anio);
        this.tipoFreno = tipoFreno;  // Tipo de frenos
    }

    descripcion() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Datos del vehiculo: Bicicleta<br>`;
        output.innerHTML += `Marca: ${this.marca} <br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Año: ${this.anio}<br>`;
        output.innerHTML += `Frenos: ${this.tipoFreno}<br>`;
        output.innerHTML += `<hr>`;
    }
}

// Creando objetos de las clases hijas
const carro1 = new Carro("Toyota", "Corolla", 2024, 4);
const moto1 = new Moto("Yamaha", "MT-09", 2021, "Deportiva");
const bicicleta1 = new Bicicleta("Trek", "Montaña", 2021, "Frenos de disco");

// Llamando al método descripcion para cada objeto
carro1.descripcion();
moto1.descripcion();
bicicleta1.descripcion();
