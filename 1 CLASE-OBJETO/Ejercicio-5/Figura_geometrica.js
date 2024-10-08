// Defino la clase
class Figura_geometrica {
    // Defino el contructor de la clase
    constructor(nombre, lados , perimetro, area, color) {
        // Defino los atributos de la clase
        this.nombre = nombre;
        this.lados = lados;
        this.perimetro = perimetro;
        this.area = area;
        this.color = color;
    }
    
    // Defino método para mostrar informacion de los atributos de la clase
    mostrarInformacion() {
        document.write("<hr>");
        document.write("Mostrar información de la figura geometrica </br>");
        document.write(`Nombre: ${this.nombre}</br>`);
        document.write(`Lados: ${this.lados}</br>`);
        document.write(`Perimetro: ${this.perimetro}</br>`);
        document.write(`Area: ${this.area}</br>`);
        document.write(`Color: ${this.color}</br>`);
    }

    // Defino método para calcular el perimetro de la figura

    calcularPerimetro() {
        document.write(`El perimetro del ${this.nombre} es ${this.perimetro}`);
    }
    calcularArea(){
        document.write(`El area del ${this.nombre} es ${this.calcularArea}`);
    }

}

// Instanciar la clase
let figura1 = new Figura_geometrica("Triangulo", "3","10mt","20mt2","Rojo");
let figura2 = new Figura_geometrica("Cuadrado","4","20mt", "25mt2","Azul");
let figura3 = new Figura_geometrica("Trapecio","4","20mt","25mt2", "Naranja");

// Mostrar información de las figuras

figura1.mostrarInformacion();
figura2.mostrarInformacion();
figura3.mostrarInformacion();

// Calcular el perimetro de las figuras

figura1.calcularPerimetro();
figura1.calcularArea();
figura2.calcularPerimetro();
figura2.calcularArea();
figura3.calcularPerimetro();
figura3.calcularArea();