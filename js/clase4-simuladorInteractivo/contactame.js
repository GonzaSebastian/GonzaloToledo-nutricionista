

let comando = prompt("Ingrese segun su necesidad: sugerencia / consulta / turno." + "\nPara salir ingrese: esc").toLowerCase();

while (comando != "esc") {
    switch (comando) {

        case "sugerencia":
            let sugerencia = prompt("Ingrese su sugerencia");
            alert (`Gracias por ayudarnos a mejorar ! tendremos en cuenta todas tus sugerencias.`)
            break;

        case "consulta":
            let consulta = prompt ("Ingrese su consulta").toLowerCase();
            let contador = 0
            while(consulta != "esc" && consulta != ""){
                contador = contador + 1;
                alert ("Su consulta fue registrada bajo el numero #" + contador);
                consulta = prompt ("Ingrese una nueva consulta").toLowerCase();
            }
            alert("Sus consultas fueron ingresadas, anotese el numero de consulta para darle un seguimiento");
            break;

        case "turno":
            let turno = prompt ("Si desea continuar ingrese: ok || Para salir ingrese: esc").toLowerCase();
            while (turno != "esc" && turno != ""){
                class Turno {
                    constructor (nombre, dni, fecha) {
                        this.nombre = nombre;
                        this.dni = dni;
                        this.fecha = fecha;
                    }
                }
                persona1 = new Turno (prompt("Ingrese su nombre y apellido"), parseInt(prompt("Ingrese su DNI")), prompt("Ingrese la fecha del turno en el siguiente formato DD/MM/AA"));
                alert("Hola " + persona1.nombre + ", DNI N°" + persona1.dni + " su turno fue registrado para el dia " + persona1.fecha)
                turno = prompt ("Si desea continuar ingrese: ok || Para salir ingrese: esc").toLowerCase();

            }
            break;

        default:
            alert("ingrese un comando valido");
            
    }
    comando = prompt("Ingrese segun su necesidad: sugerencia / consulta / turno" + "\nPara salir ingrese: esc");
}