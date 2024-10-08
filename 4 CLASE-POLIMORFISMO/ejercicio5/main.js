// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase padre
class Profesion {
    constructor(nombre, experiencia) {
        this.nombre = nombre;
        this.experiencia = experiencia;
    }

    trabajar() {
        // Método a ser sobrescrito por las clases hijas
    }
}

// Clase hija Médico
class Medico extends Profesion {
    constructor(nombre, experiencia, especialidad) {
        super(nombre, experiencia);
        this.especialidad = especialidad;
    }

    trabajar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Profesión: Médico<br>`;
        output.innerHTML += `Nombre: ${this.nombre}<br>`;
        output.innerHTML += `Años de experiencia: ${this.experiencia}<br>`;
        output.innerHTML += `Especialidad: ${this.especialidad}<br>`;
        output.innerHTML += `Trabajo: Diagnosticar y tratar pacientes.<br>`;
    }
}

// Clase hija Ingeniero
class Ingeniero extends Profesion {
    constructor(nombre, experiencia, campo) {
        super(nombre, experiencia);
        this.campo = campo;
    }

    trabajar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Profesión: Ingeniero<br>`;
        output.innerHTML += `Nombre: ${this.nombre}<br>`;
        output.innerHTML += `Años de experiencia: ${this.experiencia}<br>`;
        output.innerHTML += `Campo: ${this.campo}<br>`;
        output.innerHTML += `Trabajo: Diseñar y construir soluciones técnicas.<br>`;
    }
}

// Clase hija Docente
class Docente extends Profesion {
    constructor(nombre, experiencia, materia) {
        super(nombre, experiencia);
        this.materia = materia;
    }

    trabajar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Profesión: Docente<br>`;
        output.innerHTML += `Nombre: ${this.nombre}<br>`;
        output.innerHTML += `Años de experiencia: ${this.experiencia}<br>`;
        output.innerHTML += `Materia: ${this.materia}<br>`;
        output.innerHTML += `Trabajo: Enseñar a los estudiantes.<br>`;
    }
}

// Creando objetos de las clases hijas
const medico1 = new Medico("Dr. Juan", 10, "Cardiología");
const ingeniero1 = new Ingeniero("Ing. Ana", 7, "Sistemas");
const docente1 = new Docente("Prof. Laura", 15, "Matemáticas");

// Llamando al método trabajar para cada objeto
medico1.trabajar();
ingeniero1.trabajar();
docente1.trabajar();
