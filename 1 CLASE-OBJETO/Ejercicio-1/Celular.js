// Defino la
class Celular {
    // Método constructor
    constructor(marca, modelo, sistemaOperativo, capacidadBateria, pantalla) {
        // Defino los atributos de las instancias de la clase
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperativo = sistemaOperativo;
        this.capacidadBateria = capacidadBateria;
        this.pantalla = pantalla;
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<hr>");
        document.write("<h3>Dispositivo Movil</h3><br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Modelo: ${this.modelo}<br>`);
        document.write(`Sistema Operativo: ${this.sistemaOperativo}<br>`);
        document.write(`Capacidad de Batería: ${this.capacidadBateria}<br>`);
        document.write(`Tamaño de Pantalla: ${this.pantalla}<br>`);
    }

    // Método para encender el celular
    encender() {
        // Pedimos el valor de carga al usuario
        let energia = parseInt(prompt("Digite el valor de carga: "));

        // Evaluamos el estado del atributo energia
        if (energia > 0) {
            document.write(`El celular ${this.modelo} se ha encendido`);
            document.write(`||||||- ${energia} %`);
        } else {
            document.write("No se puede encender el celular, la carga debe ser mayor a 0");
            document.write("------------------------------------------------");
        }
    }

    apagarCelular() {
        document.write(`El celular ${this.modelo} se ha apagado`);
        document.write("------------------------------------------------");
    }
}

// Creamos los objetos a partir de instanciar la clase Celular
let celular1 = new Celular("Xiaomi", "Poco x4 pro", "Android 14", "5100mA", "6.5 pulg");
let celular2 = new Celular("Samsung", "S23", "Android 14", "5100mA", "7.0 pulg");
let celular3 = new Celular("Iphone", "XR", "IOS", "3200mA", "6.2 pulg");

// Mostramos los detalles de los celulares
celular1.mostrarDetalles();
celular2.mostrarDetalles();
celular3.mostrarDetalles();

// Uso los metodos de la clase celular
celular1.encender();
celular1.apagarCelular();