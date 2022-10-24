const formulario = document.querySelector(`#form`);

formulario.addEventListener(`submit`, sendForm);

function sendForm(event) {
  event.preventDefault();
  const form = new FormData(this);
  let name = form.get(`name`);
  let dni = form.get(`dni`);
  let mail = form.get(`email`);
  let error = document.getElementById(`error`);
  let datos = {name, dni, mail}
  let mensajeError = [];

  if (name == "") {
    mensajeError.push(`Ingresa tu nombre`);
  }
  if (dni == ``) {
    mensajeError.push(`Ingresa su dni`);
  }
  if (mail == ``) {
    mensajeError.push(`Ingresa tu correo electronico`);
  }

  if (mensajeError == ``) {
    Swal.fire({
      title: 'Usted envio:',
      text: `nombre: ` + datos.name + `- dni: ` + datos.dni + `-   Email: ` + datos.mail
    })
  } else {
     error.innerHTML = mensajeError.join(` - `);
  }
}

