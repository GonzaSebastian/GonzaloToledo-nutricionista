// alert ("Con esta herramienta vas a poder calcular las cantidades de un ingrediente para distintas porciones a las que refiere la receta.")
// function division() {
//     ingrediente = parseFloat(prompt("Ingresa las cantidades del ingrediente que indica la receta"));
//     porciones = parseInt(prompt("Ingresa la cantidad de porciones que indica la receta"));
//     return ingrediente / porciones;

// }
// function multiplicacion () {
//     let resultadoDivision = division ();

//     porcionesPersonalizadas = parseInt(prompt("Ingresa la cantidad de porciones deseada"));
//     return resultadoDivision * porcionesPersonalizadas;
// }
// function mostrar () {
//     let resultadoMultiplicacion = multiplicacion ();

//     alert (`Cantidad del ingrediente en receta original: ${ingrediente} \nCantidad de porciones en receta original: ${porciones} \nPara ${porcionesPersonalizadas} porciones debes utilizar: ${resultadoMultiplicacion} Gr. / Cdas. / Lts. / etc.`)
// }

// let ingrediente;
// let porciones;
// let porcionesPersonalizadas;

// mostrar ();

setTimeout(() => {
  Swal.fire({
    title: `¡nuevo!`,
    text: "Ahora guarda tus articulos favoritos y leelos cuando quieras!",
    showConfirmButton: false,
    timer: 2500,
    background: `#c5d6c3`,
    showClass: {
      popup: "animate__animated animate__backInDown",
    },
    hideClass: {
      popup: "animate__animated animate__backOutDown",
    },
  });
}, 1500);

const abrirModal = document.querySelector(`.favoritos__btn`);
const modal = document.querySelector(`.modalA`);
const cerrarModal = document.querySelector(`.cerrar__btn`);
const contenedorFavoritos = document.getElementById("contenedor-favoritos");
const sectionRecetas = document.getElementById("sectionRecetas");

document.addEventListener(`DOMContentLoaded`, () => {
  if (localStorage.getItem(`localFav`)) {
    recetasFav = JSON.parse(localStorage.getItem(`localFav`));
    actualizarFavoritos();
  }
});

abrirModal.addEventListener(`click`, (e) => {
  e.preventDefault();
  modal.classList.add(`modalA--mod`);
});
cerrarModal.addEventListener(`click`, (e) => {
  e.preventDefault();
  modal.classList.remove(`modalA--mod`);
});
const mostrarRecetas = (recetas) => {
  recetas.forEach((receta) => {
    const article = document.createElement("article");
    article.innerHTML += `
                            <button class="fav_btn" id="boton${receta.id}">Agregar a favoritos</button>
                            <h5>${receta.titulo}</h5>
                            <img src="${receta.img}"alt="imagen articulo 10 claves">
                            <div>
                                ${receta.content}
                            </div>
                            `;
    article.classList.add("main__receta");
    sectionRecetas.appendChild(article);

    const boton = document.getElementById(`boton${receta.id}`);
    boton.addEventListener("click", () => {
      indexFavoritos(receta.id);
      // SWEET ALERT FAVORITOS
      Swal.fire({
        icon: "success",
        title: `Se agrego el articulo "${receta.titulo}" a sus favoritos.`,
        showConfirmButton: false,
        timer: 1800,
        showClass: {
          popup: "animate__animated animate__flipInX",
        },
        hideClass: {
          popup: "animate__animated animate__flipOutX",
        },
      });
    });
  });
};
mostrarRecetas(recetas);

const indexFavoritos = (recetaId) => {
  const recetaFiltrada = recetas.find((receta) => receta.id === recetaId);
  recetasFav.push(recetaFiltrada);
  actualizarFavoritos();
};

const actualizarFavoritos = () => {
  contenedorFavoritos.innerHTML = "";
  recetasFav.forEach((receta) => {
    const article = document.createElement(`article`);
    article.innerHTML += `
                        <h5>${receta.titulo}</h5>
                        <img src="${receta.img}"alt="imagen articulo 10 claves">
                        <div>
                        ${receta.content}
                        </div>
                        <button class="btm" id="eliminar${receta.id}"><i class="bi bi-trash"></i></button>
                        `;
    article.classList.add("main__receta");
    contenedorFavoritos.appendChild(article);

    localStorage.setItem(`localFav`, JSON.stringify(recetasFav));
    const eliminar = document.getElementById(`eliminar${receta.id}`);
    eliminar.addEventListener("click", () => {
      // SWEET ALERT CANCELAR
      Swal.fire({
        title: "esta seguro que desea eliminar el articulo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f4ffee",
        cancelButtonColor: "#fbe5cc",
        confirmButtonText: "si, eliminar",
        customClass: {
          confirmButton: "confirmColor",
          cancelButton: "cancelColor",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Eliminado!",
            "El articulo se elimino de sus favoritos correctamente.",
            "success"
          );
          eliminarFavorito(receta.id);
        }
      });
    });
  });
};

const eliminarFavorito = (recetaId) => {
  const articuloEliminado = recetasFav.find((receta) => receta.id === recetaId);
  const indice = recetasFav.indexOf(articuloEliminado);
  recetasFav.splice(indice, 1);
  actualizarFavoritos();
};
