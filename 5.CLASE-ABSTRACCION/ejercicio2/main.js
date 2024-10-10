const output = document.getElementById("output");

class Empleado {
    // Método abstracto
    calcularSalario() {
        throw new Error("Este método debe ser implementado en una clase hija");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return this.salarioMensual;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(horasTrabajadas, pagoPorHora) {
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.pagoPorHora = pagoPorHora;
    }

    calcularSalario() {
        return this.horasTrabajadas * this.pagoPorHora;
    }
}

// Uso de las clases
const empleadoCompleto = new EmpleadoTiempoCompleto(1800000);
output.innerHTML += `Salario del empleado a tiempo completo: ${empleadoCompleto.calcularSalario()} <br><hr>`;

const empleadoHoras = new EmpleadoPorHoras(48, 34500);
output.innerHTML += `Salario del empleado por horas: ${empleadoHoras.calcularSalario()} <br>`;
