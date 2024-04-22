alert(" ! Bienvenido a la calculadora de promedios !")
let calificaciones = prompt("Por favor, ingrese las calificaciones del estudiante, separadas por comas");
let arrayCalificaciones = calificaciones.split(",");
// .reduce to reduce an array to a single value, reduce is used to accumulate a value/ No muta / Return : value
//Se calcula la suma de calificaciones 
//Una función de callback es una función que se pasa como argumento a otra función, y que se invoca o “llama de vuelta” en algún punto dentro de la función externa para completar algún tipo de acción o cálculo.
let suma = arrayCalificaciones.reduce((total, num) => total + Number(num), 0);
let promedio = suma / arrayCalificaciones.length;
//El método toFixed() se utiliza para formatear un número especificando cuántos dígitos decimales debe tener el número después del punto decimal. Este método se aplica directamente a números y retorna una cadena que representa el número formateado
// Es importante tener en cuenta que el método toFixed() no modifica el número original, sino que devuelve una cadena con el número formateado. Esto significa que el valor retornado por toFixed() es una cadena, no un número. Si necesitas realizar operaciones matemáticas con el número formateado, es posible que necesites convertirlo de nuevo a un número usando parseFloat() o Number().
promedio = promedio.toFixed(2);
alert("El promedio de calificaciones es: " + promedio);
