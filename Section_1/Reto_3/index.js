alert("Bienvenido al validador de correos electrónicos");
let userEmail = prompt("Por favor, ingrese un correo electrónico");

// Función para validar el correo electrónico ingresado por el usuario
function emailValidation(email) {
    // .includes Checks whether a string contains the specified string/characters / Mutate: No / Return : Boolean
    let atSymbol = email.includes('@');
    // .indexOf returns the position of the first occurrence of a specified value in a string. No muta / Return Number
    // .lastIndexOf returns the position of the last occurrence of a specified value in a string. No muta / Return Number
    let dotAfterAt = email.lastIndexOf('.') > email.indexOf('@');
    let noSpaces = !email.includes(' ');
    let atDotTogether = !email.includes('@.') && !email.includes('.@');

    // Condiciones que el correo electrónico debe cumplir
    if (atSymbol && dotAfterAt && noSpaces && atDotTogether) {
        console.log("Valid email ");
        return true;
    } else {
        console.log("Invalid email");
        // Condiciones cuando el correo electrónico no es válido
        if (!atSymbol) console.log("- The email must contain an '@' symbol");
        if (!dotAfterAt) console.log("- The email must contain at least one '.' after the '@' symbol");
        if (!noSpaces) console.log("- The email cannot have white spaces");
        if (!atDotTogether) console.log("- The '.' and the '@' symbols cannot be next to each other");
        return false;
    }
}

// Si el correo electrónico ingresado no es válido...
while (!emailValidation(userEmail)) {
    userEmail = prompt("El correo electrónico ingresado no es válido. Por favor, ingréselo nuevamente:");
}

alert("Correo electrónico válido, ¡Bienvenido!");
