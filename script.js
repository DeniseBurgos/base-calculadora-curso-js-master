//esto agrega a la pantalla el valor del boton de la calcu que toquemos
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

//esta accipon borra el contenido de la pantalla
function borrar() {
  document.getElementById("pantalla").value = "";
}

//esta accion calcula el resultado de la operacion
function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
}
