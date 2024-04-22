alert(" ! Bienvenido a la Calculadora de Estadísticas de Calificaciones ! ")

// Se obtienen las calificaciones 
let calificaciones = prompt("Por favor, ingresa las calificaciones de los estudiantes, separadas por comas:  (1-100)");
// Se convierten las calificaciones ingresadas a un array 
// Se utiliza el método split() para convertir la cadena de texto en un array, donde cada calificación es un elemento del array.
let arrayCalificaciones = calificaciones.split(",");

// Se convierten las calificaciones a números
// map()Creates a new array with the result of calling a function for each array elemeno / No muta / return: Array
arrayCalificaciones = arrayCalificaciones.map(Number);

// Se calcula el promedio de calificaciones
// Se utiliza el método reduce() para sumar todas las calificaciones. Luego, se divide la suma por el número total de calificaciones para obtener el promedio.
let suma = arrayCalificaciones.reduce((a, b) => a + b, 0);
let promedio = suma / arrayCalificaciones.length;

// Calificación máxima y mínima con operacion ternearia
//max es el valor acumulado y calificacion es el valor actual del array, Si calificacion es mayor que max, entonces calificacion se convierte en el nuevo max. Si no, max permanece igual.
let maxima = arrayCalificaciones.reduce((max, calificacion) => (calificacion > max ? calificacion : max), arrayCalificaciones[0]);
let minima = arrayCalificaciones.reduce((min, calificacion) => (calificacion < min ? calificacion : min), arrayCalificaciones[0]);

// Número de aprobados y reprobados
// filter() Creates a new array with every element in an array that pass a test
// Se utiliza el método filter() para contar el número de aprobados y reprobados. 
let aprobados = arrayCalificaciones.filter(calificacion => calificacion >= 70).length;
let reprobados = arrayCalificaciones.filter(calificacion => calificacion < 70).length;

// Lista de calificaciones ordenadas de mayor a menor
// sort() to sort an array of objects based on a property / Si muta / Return: array
// b-a = orden descendente && a-b = orden ascendente
let calificacionesOrdenadas = arrayCalificaciones.sort((a, b) => b - a);

// Mostrar las estadísticas de calificaciones al usuario
console.log(`Promedio de Calificaciones: ${promedio}`);
console.log(`Calificación Máxima: ${maxima}`);
console.log(`Calificación Mínima: ${minima}`);
console.log(`Número de Aprobados: ${aprobados}`);
console.log(`Número de Reprobados: ${reprobados}`);
console.log(`Lista de Calificaciones Ordenadas de Mayor a Menor: ${calificacionesOrdenadas}`);
