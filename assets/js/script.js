// tooltips - bootstrap

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// fin

//-eventos con jQuery-//
$(document).ready(function () {
  //-evento clik sobre boton enviar correo-//
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
  //-fin-//

  //-Cambiar color del nav con metodo toggleClass-//
  $("nav").on("click", function () {
    $(this).toggleClass("background-color1");
  });

  //-Esconder el texto de las cartas-//
  $(".card-title").on("click", function () {
    $(".card-text").toggle();
  });
  //-fin-//
});
//-fin enventos-//
