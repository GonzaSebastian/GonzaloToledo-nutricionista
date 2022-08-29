let comando = prompt("Ingrese segun su necesidad: sugerencia / consulta / turno." + "\nPara salir ingrese: esc");

while (comando != "esc") {
    switch (comando) {

        case "sugerencia":
            let sugerencia = prompt("Ingrese su sugerencia");
            alert (`Gracias por ayudarnos a mejorar ! tendremos en cuenta todas tus sugerencias.`)
            break;

        case "consulta":
            let consulta = prompt ("Ingrese su consulta");
            for (i = 1; consulta != "esc"; i++) {
                if (consulta != "") {
                    alert (`Su consulta fue ingresada bajo el numero ${i}`);
                    consulta = prompt("Ingrese nueva consulta");
                } else {
                    consulta = prompt("Error - Escriba su consulta");
                } 
            }
            alert("Sus consultas fueron ingresadas, anotese el numero de consulta para darle un seguimiento");
            break;

        case "turno":
            let turno = prompt ("Ingrese su nombre y apellido para solicitar un turno. Para salir ingrese: esc");
            for (j = 1; turno != "esc"; j++) {
                if (turno != "") {
                    alert (`Hola ${turno} su turno es el N° ${j}`);
                    turno = prompt("Ingrese su nombre y apellido para solicitar un turno. Para salir ingrese: esc");
                } else {
                    turno = prompt("Ingrese un nombre valido. Para salir ingrese: esc");
                }   
            }
            break;

        default:
            alert("ingrese un comando valido");
            
    }
    comando = prompt("Ingrese segun su necesidad: sugerencia / consulta / turno" + "\nPara salir ingrese: esc");
}