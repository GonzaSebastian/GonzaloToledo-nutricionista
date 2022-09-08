class Paciente {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrarPacientes() {
        return `Paciente: ${this.nombre} Edad: ${this.edad}`;
    }
}
function crearPaciente () {
    const nombre = prompt("Ingrese el nombre y el apellido del paciente").toUpperCase();
    const edad = parseInt(prompt("Ingrese la edad del paciente en numeros"));

    return new Paciente(nombre, edad);
}

let entrada = prompt("Si es administrador ingrese: admin. Sino ingrese enter para continuar.").toLowerCase()

if (entrada === "admin") {

    let pacientes = [];
    const cantidadPacientes = parseInt(prompt("Ingrese la cantidad de pacientes que desea ingresar"));

    for (let i = 1; i <= cantidadPacientes ; i++) {
        let paciente = crearPaciente();
        pacientes.push(paciente);
        paciente.mostrarPacientes()
        alert(paciente.mostrarPacientes())
    }
    
    let filtro = prompt("Si desea buscar un paciente por el apellido ingrese: buscar. \nSi desea filtrar por maximo de edad ingrese: edad").toLowerCase();
    while (filtro === "buscar" || filtro === "edad"){
        if (filtro === "buscar") {
            let buscarApellido = prompt("Ingrese el apellido del paciente").toUpperCase();
            let pacienteBuscado = pacientes.find((item) => item.nombre == buscarApellido);
            alert(`Nombre: ${pacienteBuscado.nombre} Edad: ${pacienteBuscado.edad} años`)
        } else {
            const edadMaxima = parseInt(prompt("Ingrese hasta que edad desea visualizar"));
            let pacientesFiltrados = pacientes.filter((item) => item.edad < edadMaxima);
            pacientesFiltrados.forEach(item => {
                alert(`Nombre: ${item.nombre} Edad: ${item.edad} años`)
            })
        } 
        filtro = prompt("Si desea buscar un paciente por el apellido ingrese: buscar. \nSi desea filtrar por maximo de edad ingrese: edad. \n PRESIONE ENTER PARA SALIR").toLowerCase();
    }
} else {
    alert("Conoce las herramientas disponibles en la pagina de recetas y de contacto! Podras hacer consultas, solicitar turnos y mas!");
}