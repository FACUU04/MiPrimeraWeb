// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agrega a la lista "lenguagesDeProgramacion" los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion".
function mostrarLenguajes() {
  lenguagesDeProgramacion.forEach(lenguaje => console.log(lenguaje));
}

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso.
function mostrarLenguajesInvertido() {
  lenguagesDeProgramacion.slice().reverse().forEach(lenguaje => console.log(lenguaje));
}

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
  let suma = lista.reduce((acc, num) => acc + num, 0);
  return suma / lista.length;
}

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMaxMin(lista) {
  let max = Math.max(...lista);
  let min = Math.min(...lista);
  console.log('Max:', max);
  console.log('Min:', min);
}

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementos(lista) {
  return lista.reduce((acc, num) => acc + num, 0);
}

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarPosicion(lista, elemento) {
  return lista.indexOf(elemento);
}

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
  return lista1.map((num, index) => num + lista2[index]);
}

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoDeElementos(lista) {
  return lista.map(num => num * num);
}

// Ejemplos de uso:

// Mostrar lenguajes de programación
mostrarLenguajes();
console.log('---');
// Mostrar lenguajes de programación en orden inverso
mostrarLenguajesInvertido();
console.log('---');
// Calcular el promedio de una lista de números
let numeros = [1, 2, 3, 4, 5];
console.log('Promedio:', calcularPromedio(numeros));
console.log('---');
// Mostrar el número más grande y el más pequeño de una lista
mostrarMaxMin(numeros);
console.log('---');
// Sumar todos los elementos de una lista
console.log('Suma de elementos:', sumarElementos(numeros));
console.log('---');
// Encontrar la posición de un elemento en una lista
console.log('Posición de 3:', encontrarPosicion(numeros, 3));
console.log('---');
// Sumar dos listas de números
let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
console.log('Suma de listas:', sumarListas(lista1, lista2));
console.log('---');
// Obtener el cuadrado de cada número en una lista
console.log('Cuadrado de elementos:', cuadradoDeElementos(numeros));
