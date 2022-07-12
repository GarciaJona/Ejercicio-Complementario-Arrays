function cargarejemplo() {
  document.getElementById('text').value = '5,199,43,120,1437';
}
function Reiniciar() {
  location.reload();
}

function calcular() {
  let array = document.getElementById('text').value.split(/,/);

  let mayor = -Infinity,
    menor = +Infinity,
    suma = 0,
    promedio = 0;

  //SUMA
  for (i = 0; i < array.length; i++) {
    suma = parseInt(array[i]) + suma;
  }

  //PROMEDIO
  promedio = suma / array.length;

  //MENOR
  for (i = 0; i < array.length; i++) {
    if (parseInt(array[i]) < menor) menor = array[i];
  }

  //MAYOR
  for (i = 0; i < array.length; i++) {
    if (parseInt(array[i]) > mayor) mayor = array[i];
  }

  //RESULTADO

  document.getElementById('resultado').innerHTML =
    'La suma es:' +
    suma +
    '<br>' +
    'El promedio es:' +
    promedio +
    '<br>' +
    'El mayor es:' +
    mayor +
    '<br>' +
    'El menor es:' +
    menor;
}
