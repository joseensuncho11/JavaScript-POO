const output = document.getElementById("output");

class FormaGeometrica {
    // Método abstracto
    calcularArea() {
        throw new Error("Este método debe ser implementado en una clase hija");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases
const cuadrado = new Cuadrado(5);
output.innerHTML +=`Área del cuadrado: ${cuadrado.calcularArea()} <br><hr>`;

const circulo = new Circulo(3);
output.innerHTML +=`Área del círculo: ${circulo.calcularArea()}`;
