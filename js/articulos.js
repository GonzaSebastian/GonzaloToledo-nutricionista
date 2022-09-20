const abrirModal = document.querySelector(`.favoritos__btn`);
const modal = document.querySelector(`.modalA`)
const cerrarModal = document.querySelector(`.cerrar__btn`);

abrirModal.addEventListener(`click`,(e)=>{
    e.preventDefault();
    modal.classList.add(`modalA--mod`);
});
cerrarModal.addEventListener(`click`, (e)=>{
    e.preventDefault();
    modal.classList.remove(`modalA--mod`);
});

const mostrarArticulos = (articulos => {
    const sectionArticulos = document.getElementById("sectionArticulos");
    
    articulos.forEach(articulo => {
        const article = document.createElement("article");

        article.innerHTML += `<h5>${articulo.titulo}</h5>
                                <img src="${articulo.img}"alt="imagen articulo 10 claves">
                                <div>
                                    ${articulo.content}
                                </div>
                                <a href="${articulo.href}" target="_blank">Leer màs en IntraMed</a>
                                <button class="btm" id="boton${articulo.id}">Agregar a favoritos</button>`
    
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
    const contenedorFavoritos = document.getElementById("contenedor-favoritos");
    const articuloFiltrado = articulos.find(articulo => articulo.id === articuloId);
    const guardarFavorito = () => {
        // LOCAL STORAGE FAVORITOS
        // localStorage.setItem(`favorito`, JSON.stringify(articulo));
        articulosFavoritos.push(articuloFiltrado);
        // articulo.cantidad = 1;
        articulosFavoritos.forEach(articulo => {
            let div = document.createElement("div");

            div.innerHTML += `<h5>${articulo.titulo}</h5>
                            <img src="${articulo.img}"alt="imagen articulo 10 claves">
                            <div>
                                ${articulo.content}
                            </div>
                            <a href="${articulo.href}" target="_blank">Leer màs en IntraMed</a>`

            contenedorFavoritos.appendChild(div)
        })
        // div.classList.add(articulosEnFavoritos)
    }
    guardarFavorito()
}





