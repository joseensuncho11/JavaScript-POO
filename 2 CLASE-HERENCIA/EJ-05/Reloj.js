// Super clase
class Reloj {
    // constructor
    constructor(marca, tipo, material) {
        this.marca = marca;
        this.tipo = tipo;
        this.material = material;
        this.precio = parseInt(prompt("Ingrese el precio del reloj: ")); // se usa prompt para pedir input
    }

    // método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>RELOJ REGISTRADO </div>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Tipo: ", this.tipo, "<br>");
        document.write("Material: ", this.material, "<br>");
        document.write("Precio: ", this.precio, "<br>");
    }
}

// Subclase Smartphone
class RelojInteligente extends Reloj {
    // constructor
    constructor(marca, tipo, material, pantalla, sistema_operativo) {
        super(marca,  tipo, material); // Hereda de Dispositivo
        this.pantalla = pantalla;
        this.sistema_operativo = sistema_operativo;
    }

    //Polimorfear registrar
    registrar() {
        super.registrar(); // Hereda de Dispositivo
        document.write("Sistema Operativo: ", this.sistema_operativo, "<br>");
        document.write("Nivel de Batería: ", this.nivel_bateria, " %<br>");
    }
    
    // método para encender el smartphone dependiendo del nivel de bateria
    encender() {
        if (this.nivel_bateria <= 0) {
            document.write(`El dispositivo:  ${this.modelo} no puede encender nivel de bateria muy bajo, poner a cargar`);
        } else {
            document.write(`El dispositivo:  ${this.modelo} se está encendiendo `);
            document.write(`El dispositivo:  encendido`);
        }
        
    }
}

// Instanciando la subclase Carro
let smartphone1 = new Smartphone("Samsung", "Galaxy S24", 2024, "Android"); // objeto Carro
smartphone1.registrar()
smartphone1.encender()
