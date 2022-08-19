const persona = {
    nombre: "Diego",
    apellido: "Herrera",
    edad: 15,
    mostrarNombre: function() {
        return this.nombre;
    },
    "titulo profesional": "Ing. de Sistemas Informaticos",
}

const persona2 = {...persona};
persona2.nombre = "Pedro";

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const diego = new Persona("Diego", "Herrera");

console.log(persona2);
