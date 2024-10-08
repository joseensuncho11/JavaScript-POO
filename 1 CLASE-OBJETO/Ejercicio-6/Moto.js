// Defino la clase
class Moto{
    // Defino el constructor de la clase
    constructor(marca, modelo, año, color, tipo_carroceria){
        // Defino los atributos de la clase
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.tipo_carroceria = tipo_carroceria;        
    }
    
    // Defino un método para mostrar información de la moto
    
    mostrarInformacion(){
        document.write("Mostrar infromación de la moto")
        document.write(`Marca: ${this.marca} <br>`)
        document.write(`Modelo: ${this.modelo} <br>`)
        document.write(`Año: ${this.año} <br>`)
        document.write(`Color: ${this.color} <br>`)
        document.write(`Tipo Carroceria: ${this.tipo_carroceria} <br>`)
        document.write(`<hr>`)

    }

    // Metodos de la clase
    encender(){
        document.write("Encendiendo la moto")
    }
    apagar(){
        document.write("Apagando la moto")
    }


}

// Creo objetos de la clase Moto
let moto1 = new Moto("Suzuki", "Vespa", "2000", "Rojo", "Scooter")
let moto2 = new Moto("Akt", "Nkd", "2022", "Azul", "Naked")
let moto3 = new Moto("Yamaha", "Mt015", "2024", "Naranja", "Sport")

// Llamo a los métodos

moto1.mostrarInformacion()
moto1.encender()

moto2.mostrarInformacion()
moto2.apagar()
moto3.mostrarInformacion()
moto3.apagar()
