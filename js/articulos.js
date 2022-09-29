// MENSAJE NOVEDAD HERRAMIENTA FAVORITOS
Swal.fire({
    title:'Ahora guarda tus articulos favoritos y leelos cuando quieras',
})

// CODIGO HERRAMIENTA AGREGAR Y ELIMINAR FAVORITOS
const abrirModal = document.querySelector(`.favoritos__btn`);
const modal = document.querySelector(`.modalA`)
const cerrarModal = document.querySelector(`.cerrar__btn`);
const contenedorFavoritos = document.getElementById("contenedor-favoritos");
const sectionArticulos = document.getElementById("sectionArticulos");

document.addEventListener(`DOMContentLoaded`, () => {
    if (localStorage.getItem(`localFavoritos`)) {
        articulosFavoritos = JSON.parse(localStorage.getItem(`localFavoritos`))
        actualizarFavoritos()
    }
})

abrirModal.addEventListener(`click`,(e)=>{
    e.preventDefault();
    modal.classList.add(`modalA--mod`);
});
cerrarModal.addEventListener(`click`, (e)=>{
    e.preventDefault();
    modal.classList.remove(`modalA--mod`);
});

const mostrarArticulos = (articulos => {
    articulos.forEach(articulo => {
        const article = document.createElement("article");

        article.innerHTML += `
                            <button class="fav_btn" id="boton${articulo.id}">Agregar a favoritos</button>
                            <h5>${articulo.titulo}</h5>
                            <img src="${articulo.img}"alt="imagen articulo 10 claves">
                            <div>
                                ${articulo.content}
                            </div>
                            <a href="${articulo.href}" target="_blank">Leer màs en IntraMed</a>
                            `
        sectionArticulos.appendChild(article)

        const boton = document.getElementById(`boton${articulo.id}`);
        boton.addEventListener("click", () => {
            indexFavoritos(articulo.id)
            // SWEET ALERT FAVORITOS
            Swal.fire({
                icon: 'success',
                title: `Se agrego el articulo "${articulo.titulo}" a sus favoritos.`,
                showConfirmButton: false,
                timer: 1800,
                showClass: {
                    popup: 'animate__animated animate__flipInX'
                },
                hideClass: {
                    popup: 'animate__animated animate__flipOutX'
                },
            });
        });
    });
})
mostrarArticulos(articulos);

const indexFavoritos = (articuloId) => {
    const articuloFiltrado = articulos.find((articulo) => articulo.id === articuloId);
    articulosFavoritos.push(articuloFiltrado);
    actualizarFavoritos()
    console.log(articulosFavoritos);
}

const eliminarFavorito = (articuloId) => {
    const articuloEliminado = articulosFavoritos.find((articulo) => articulo.id === articuloId);
    const indice = articulosFavoritos.indexOf(articuloEliminado);
    articulosFavoritos.splice(indice, 1);
    actualizarFavoritos()
    console.log(articulosFavoritos);

}

const actualizarFavoritos = () => {
    contenedorFavoritos.innerHTML = "";
    articulosFavoritos.forEach((articulo) => {
        const div = document.createElement(`div`)
        div.innerHTML += `
                        <h5>${articulo.titulo}</h5>
                        <img src="${articulo.img}"alt="imagen articulo 10 claves">
                        <a href="${articulo.href}" target="_blank">Leer en IntraMed</a>
                        <button class="btm" id="eliminar${articulo.id}"><i class="bi bi-trash"></i></button>
                        `
       contenedorFavoritos.appendChild(div)

       const eliminar = document.getElementById(`eliminar${articulo.id}`);
       localStorage.setItem(`localFavoritos`, JSON.stringify(articulosFavoritos))
       eliminar.addEventListener("click", () => {
        // SWEET ALERT CANCELAR
        Swal.fire({
            title: 'esta seguro que desea eliminar el articulo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f4ffee',
            cancelButtonColor: '#fbe5cc',
            confirmButtonText: 'si, eliminar',
            customClass: {
              confirmButton: 'confirmColor',
              cancelButton: 'cancelColor',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El articulo se elimino de sus favoritos correctamente.',
                'success'
              )
            eliminarFavorito(articulo.id)
            }
          })
        })
    })

}

    