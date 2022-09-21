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
                            <button class="btm" id="boton${articulo.id}">Agregar a favoritos</button>
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
            alert(`Se agrego el articulo "${articulo.titulo}" a sus Favoritos`);
        })
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
           eliminarFavorito(articulo.id)
           alert(`Se elimino el articulo de sus Favoritos`);
       })
        
    })

}

