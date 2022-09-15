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
    const guardarFavorito = () => {
        let articulo = articulos.find(articulo => articulo.id === articuloId);

        articulosFavoritos.push(articulo);
        articulo.cantidad = 1;

        let div = document.createElement("div");
        // div.classList.add(articulosEnFavoritos)
        
        div.innerHTML += `<h5>${articulo.titulo}</h5>
                            <img src="${articulo.img}"alt="imagen articulo 10 claves">
                            <div>
                                ${articulo.content}
                            </div>
                            <a href="${articulo.href}" target="_blank">Leer màs en IntraMed</a>`

        contenedorFavoritos.appendChild(div)
    }
    guardarFavorito()
}



