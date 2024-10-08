// Super clase
class Dispositivo {
    // constructor
    constructor(marca, modelo, añoFabricación) {
        this.marca = marca;
        this.modelo = modelo;
        this.añoFabricación = añoFabricación;
        this.capacidad_bateria = parseInt(prompt("Ingrese la capacidad de la bateria en (mAh): ")); // se usa prompt para pedir input
    }

    // método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>DISPOSITIVO REGISTRADO </div>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Modelo: ", this.modelo, "<br>");
        document.write("Año de Fabricación: ", this.añoFabricación, "<br>");
        document.write("Capacidad de bateria: ", this.capacidad_bateria, "<br>");
    }
}

// Subclase Smartphone
class Smartphone extends Dispositivo {
    // constructor
    constructor(marca, modelo, añoFabricación, sistema_operativo) {
        super(marca, modelo, añoFabricación); // Hereda de Dispositivo
        this.sistema_operativo = sistema_operativo;
        this.tipo_conectividad = prompt("Ingresar el tipo de conectividad(4G/5G): ")
        this.nivel_bateria = parseInt(prompt("Ingresar nivel de bateria en mAh: ")); // prompt para pedir input
    }

    //Polimorfear registrar
    registrar() {
        super.registrar(); // Hereda de Dispositivo
        document.write("Sistema Operativo: ", this.sistema_operativo, "<br>");
        document.write("Tipo de Conectividad: ", this.tipo_conectividad, "<br>");
        document.write("Nivel de Batería: ", this.nivel_bateria, " mAh<br>");
    }
    
    // método para encender el smartphone dependiendo del nivel de bateria
    encender() {
        if (this.nivel_bateria < 0) {
            document.write(`El dispositivo:  ${this.modelo} no puede encender, poner a cargar`);
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
