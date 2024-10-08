// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase padre
class InstrumentoMusical {
    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }

    tocar() {
        // Método a ser sobrescrito por las clases hijas
    }
}

// Clase hija Guitarra
class Guitarra extends InstrumentoMusical {
    constructor(marca, tipo, numCuerdas) {
        super(marca, tipo);
        this.numCuerdas = numCuerdas;
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Datos del instrumento: Guitarra<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += `Número de cuerdas: ${this.numCuerdas}<br>`;
        output.innerHTML += `Se toca rasgueando las cuerdas.<br>`;
    }
}

// Clase hija Piano
class Piano extends InstrumentoMusical {
    constructor(marca, tipo, numTeclas) {
        super(marca, tipo);
        this.numTeclas = numTeclas;
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Datos del instrumento: Piano<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += `Número de teclas: ${this.numTeclas}<br>`;
        output.innerHTML += `Se toca presionando las teclas.<br>`;
    }
}

// Clase hija Trompeta
class Trompeta extends InstrumentoMusical {
    constructor(marca, tipo, material) {
        super(marca, tipo);
        this.material = material;
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Datos del instrumento: Trompeta<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += `Material: ${this.material}<br>`;
        output.innerHTML += `Se toca soplando y presionando los pistones.<br>`;
    }
}

// Creando objetos de las clases hijas
const guitarra1 = new Guitarra("Fender", "Acústica", 6);
const piano1 = new Piano("Yamaha", "De cola", 88);
const trompeta1 = new Trompeta("Bach", "De viento", "Latón");

// Llamando al método tocar para cada objeto
guitarra1.tocar();
piano1.tocar();
trompeta1.tocar();
