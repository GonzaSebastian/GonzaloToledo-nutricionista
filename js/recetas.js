alert ("Con esta herramienta vas a poder calcular las cantidades de un ingrediente para distintas porciones a las que refiere la receta.")
function division() {
    ingrediente = parseFloat(prompt("Ingresa las cantidades del ingrediente que indica la receta"));
    porciones = parseInt(prompt("Ingresa la cantidad de porciones que indica la receta"));
    return ingrediente / porciones;

}
function multiplicacion () {
    let resultadoDivision = division ();

    porcionesPersonalizadas = parseInt(prompt("Ingresa la cantidad de porciones deseada"));
    return resultadoDivision * porcionesPersonalizadas;
}
function mostrar () {
    let resultadoMultiplicacion = multiplicacion ();

    alert (`Cantidad del ingrediente en receta original: ${ingrediente} \nCantidad de porciones en receta original: ${porciones} \nPara ${porcionesPersonalizadas} porciones debes utilizar: ${resultadoMultiplicacion} Gr. / Cdas. / Lts. / etc.`)
}

let ingrediente;
let porciones;
let porcionesPersonalizadas;

mostrar ();