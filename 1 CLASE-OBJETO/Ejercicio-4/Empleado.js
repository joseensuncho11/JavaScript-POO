// Defino la clase
class Empleado {
    // Defino el constructura la clase
    constructor(nombre, puesto, salario, area, antiguedad){
        // Defino los atributos de las instancias de la clase
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
        this.area = area;
        this.antiguedad = antiguedad;
    }
    
    // Metodo para mostrar informacion de las instancias de la clase
    mostrarInformacion(){
        document.write("<hr/>");
        document.write("<h3>Información del empleado</h3></br>");
        document.write(`Nombre: ${this.nombre}</br>`);
        document.write(`Puesto: ${this.puesto}</br>`);
        document.write(`Salario: ${this.salario}</br>`);
        document.write(`Área: ${this.area}</br>`);
        document.write(`Antigüedad: ${this.antiguedad} años</br>`);
    }
    
    // Metodos de la clase
    trabajar(){
        document.write(`El empleado ${this.nombre} comenzo a trabajar esta justificando su Salario de ${this.salario} mensual.`);
    }
    tomar_vacaciones(){
        document.write(`El empleado ${this.nombre} salio de vacaciones regresa dentro de 1 mes!`);
    }
}

// Creo instancias de la clase Empleado
let empleado1 = new Empleado("Maria", "Jefe Presupuesto", "5000000", "Presupuesto", "5 años");
let empleado2 = new Empleado("Pedro"," Auxiliar","1300000", "Compras", "1 Año");
let empleado3 = new Empleado("Manuel", "Asistente","2600000", "Ventas", "3 Años");

// Muestro la información de los empleados
empleado1.mostrarInformacion();
empleado1.trabajar()
empleado2.mostrarInformacion();
empleado2.tomar_vacaciones()
empleado3.mostrarInformacion();
empleado3.trabajar();



