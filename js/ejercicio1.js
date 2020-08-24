function iniciar() {
  var boton = document.getElementById("validar");
  if (boton.addEventListener) {
    boton.addEventListener("click", validar, false);
  } else if (boton.attachEvent) {
    boton.attachEvent("onclick", validar);
  }
}
function validar() {
  var tipo =
    document.frmdatos.seltipo.options[frmdatos.seltipo.selectedIndex].value;
  var dato = document.frmdatos.txtdato.value;
  var valido = false;
  var re = null;
  //alert(dato + "|" + tipo);
  if (dato == null || dato == "" || dato.length == 0) {
    alert("No se ha ingresado ningún valor en el campo de formulario");
    return 0;
  }
  switch (tipo) {
    //El formato de DUI en El Salvador es ########-#
    case "correo":
      re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
      if (re.test(dato)) {
        valido = true;
      }
      break;
    //El formato del NIT en El Salvador es ####-######-###-#
    case "redes":
      re = /^[0-255]{3}.[0-255]{3}.[0-255]{3}.[0-255]{3}$/;
      if (re.test(dato)) {
        valido = true;
      }
      break;
    //El formato en los carnets de la UDB es LL######
    case "URL":
      re = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      if (re.test(dato)) {
        valido = true;
      }
      break;
    default:
      alert("El tipo de dato seleccionado no puede ser procesado");
      break;
  }
  if (valido == true) {
    alert("El valor " + dato + " de " + tipo + " ingresado es válido");
  } else if (valido == false) {
    alert("El valor " + dato + " de " + tipo + " ingresado es inválido");
  }
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
  window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", iniciar);
}
