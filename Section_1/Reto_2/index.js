
/* .test() es un método que se utiliza en expresiones regulares para verificar si un patrón específico está presente en una cadena de texto. Devuelve true si encuentra el patrón y false si no lo encuentra.
Por ejemplo, si usamos /hola/ como nuestra expresión regular y la aplicamos a la cadena de texto “¡Hola, mundo!”, .test() devolverá true porque el patrón “hola” está presente en la cadena. Si el patrón no se encuentra, .test() devolverá false..*/

alert("Bienvenido al validador de contraseñas seguras")
let userPassword = prompt("Por favor, ingrese una contraseña");

// Funcion para validar contraseña ingresada por el usuario
function passwordValidation(password) {
        let eightCharacters = password.length >= 8;
        //The \d metacharacter matches digits from 0 to 9.
        let numbers = /\d/.test(password);
        // The /[a-zA-Z]/ checks if a string contains at least one letter, either uppercase or lowercase
        let letters = /[a-zA-Z]/.test(password);
        let especialCharacter = /[!@#$%^&*()+=_\-{}[\]:;"'?<>,.|\/~`]/.test(password);
    
        // Condicionales que la contraseña debe cumplir
        if (eightCharacters && numbers && letters && especialCharacter) {
            console.log("Secure password");
            return true;
        } else {
            console.log("Insecure password");
            // Condicionales cuando no cumple la contraseña
            if (!eightCharacters) console.log("- Password must contain min 8 characters");
            if (!numbers) console.log("- Password must contain at least a number");
            if (!letters) console.log("- Password must contain at least a letter");
            if (!especialCharacter) console.log("- Password must contain at least a special character");
            return false;
        }
 }
// si la contraseña ingresada no es segura ...
while (!passwordValidation(userPassword)) {
    userPassword = prompt("La contraseña ingresada no es segura. Por favor, ingrésela nuevamente:");
}

alert("Contraseña válida, ¡Bienvenido!");
