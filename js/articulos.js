const sectionArticulos = document.getElementById("sectionArticulos");

const mostrarArticulos = async () => {
  try {
    const respuesta = await fetch("../js/json/articulos.json");
    const data = await respuesta.json();
    data.forEach((articulo) => {
      let article = document.createElement("article");
      article.innerHTML += `
                               
                               <h5>${articulo.titulo}</h5>
                                <img src="${articulo.img}"alt="imagen articulo 10 claves">
                              <div>
                                 ${articulo.content}
                              </div>
                             <a href="${articulo.href}" target="_blank">Leer màs en IntraMed</a>
             `;
      sectionArticulos.appendChild(article);
    });
  } catch (error) {
    let div = document.createElement("div");
    div.innerHTML += `
                            <h5>ERROR DE CONEXION CON EL SERVIDOR</h5>
                            `;
    sectionArticulos.appendChild(div);
  }
};
mostrarArticulos();
