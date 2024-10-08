class Carro{
    constructor( marca, modelo, año, color, combustible){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.combustible = combustible;
    }

    // Método para mostrar información del carro
    mostrarInformacion(){
        document.write(`<hr>`);
        document.write("Información del Carro<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Modelo: ${this.modelo}<br>`);
        document.write(`Año: ${this.año}<br>`);
        document.write(`Color: ${this.color}<br>`);
        document.write(`Combustible: ${this.combustible}<br>`);
    }
    
    // Método para arrancar el carro
    arrancar(){
        document.write(`El carro ${this.marca} ${this.modelo} ha arrancado, empezó su consumo de ${this.combustible}<br>`);
    }
    detener(){
        document.write(`El carro ${this.marca} ${this.modelo} se ha detenido su velicidad es 0 km/s <br>`);
    }

}

// Instanciamos un objeto de la clase Carro

let carro1 = new Carro("Toyota", "Hilux","2000","Gris", "Diesel")
let carro2 = new Carro("Mazda", "Cx-30","2024","Rojo", "Gasolina")
let carro3 = new Carro("Susuki", "Sj","1986","Negro", "Gasolina")

// Mostramos información del carro
carro1.mostrarInformacion();
carro1.arrancar();
carro2.mostrarInformacion();
carro2.detener();
carro3.mostrarInformacion();
carro3.arrancar()


// Usar metodos