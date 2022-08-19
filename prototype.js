function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function() {
        return "Hola, mundo!";
    }
}

Persona.prototype.despedida = function() {
    return "Nos vemos!";
}

const personita = new Persona("Diego", "Herrera");
/*const personita2 = new Persona("Juan", "Quintanilla");*/

console.log(Persona.prototype);

function Estudiante(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;
miEstudiante = new Estudiante("Jorgito", "Perez");

Estudiante.prototype.despedida = function() {
    return "Adios mundo";
}

console.log(personita.despedida());
console.log(miEstudiante.despedida());
