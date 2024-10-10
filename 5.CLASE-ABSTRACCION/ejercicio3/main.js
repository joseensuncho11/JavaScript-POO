class TareaEmpleado {
    // Método abstracto
    realizarTarea() {
        throw new Error("Este método debe ser implementado en una clase hija");
    }
}

class Ingeniero extends TareaEmpleado {
    realizarTarea() {
        return "Realizar planeación y supervisión de proyectos.";
    }
}

class Doctor extends TareaEmpleado {
    realizarTarea() {
        return "Diagnosticar y tratar a pacientes.";
    }
}

// Uso de las clases
const ingeniero = new Ingeniero();
output.innerHTML += `Tarea del ingeniero: ${ingeniero.realizarTarea()} <br><hr>`;

const doctor = new Doctor();
output.innerHTML += `Tarea del doctor: ${doctor.realizarTarea()} <br>`;
