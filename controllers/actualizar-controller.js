import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id == null) {
    window.location.href = "/screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");
  //   El try se tiene que usar en fuintios async y la parte de catch nos manda los errores que tengamos en ese momento
  //   Esta es la forma en la cual se trabaja con then
  //   clientServices.detalleCliente(id).then((perfil) => {
  //   nombre.value = perfil.nombre;
  //   email.value = perfil.email;});
  try {
    const perfil = await clientServices.detalleCliente(id);
    if (perfil.nombre && perfil.email) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    } else {
      throw new Error();
    }
  } catch (error) {
    window.location.href = "/screens/error.html";
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  console.log(nombre, "-", email);
  clientServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
  });
});
