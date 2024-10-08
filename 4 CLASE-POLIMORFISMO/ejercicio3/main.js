// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase padre
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    sonido() {
        // Método a ser sobrescrito por las clases hijas
    }
}

// Clase hija Perro
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    sonido() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Datos del animal: Perro<br>`;
        output.innerHTML += `Nombre: ${this.nombre}<br>`;
        output.innerHTML += `Edad: ${this.edad}<br>`;
        output.innerHTML += `Raza: ${this.raza}<br>`;
        output.innerHTML += `Sonido: Guau Guau<br>`;
    }
}

// Clase hija Gato
class Gato extends Animal {
    constructor(nombre, edad, color) {
        super(nombre, edad);
        this.color = color;
    }

    sonido() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Datos del animal: Gato<br>`;
        output.innerHTML += `Nombre: ${this.nombre}<br>`;
        output.innerHTML += `Edad: ${this.edad}<br>`;
        output.innerHTML += `Color: ${this.color}<br>`;
        output.innerHTML += `Sonido: Miau Miau<br>`;
    }
}

// Clase hija Pájaro
class Pajaro extends Animal {
    constructor(nombre, edad, especie) {
        super(nombre, edad);
        this.especie = especie;
    }

    sonido() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Datos del animal: Pájaro<br>`;
        output.innerHTML += `Nombre: ${this.nombre}<br>`;
        output.innerHTML += `Edad: ${this.edad}<br>`;
        output.innerHTML += `Especie: ${this.especie}<br>`;
        output.innerHTML += `Sonido: Pío Pío<br>`;
    }
}

// Creando objetos de las clases hijas
const perro1 = new Perro("Balton", 7, "Lobo");
const gato1 = new Gato("Garfield", 3, "negro");
const pajaro1 = new Pajaro("Piolin", 3, "Canario");

// Llamando al método sonido para cada objeto
perro1.sonido();
gato1.sonido();
pajaro1.sonido();
