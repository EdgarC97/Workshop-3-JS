alert("Bienvenido al generador de usuarios y contraseñas")

const users = {}
// Funcion para creacion de nuevo usuario
const newUser = () => {
    let userFullName = prompt("Ingresa tu nombre y apellido")
    let userLower = userFullName.toLowerCase()
    //split() can be used to split a string into an array / No muta / Retorna Array
    let userArray = userLower.split(' ');
    // para verificar que usuario ingrese tanto nombre como apellido
    if (userArray.length < 2) {
        alert("Por favor, ingresa tanto tu nombre como tu apellido");
        return;
    }
    /* slice() can be used to extract a part of a string / No muta / Retorna String
    Extrae hasta pero no incluye el índice final.*/
    let userFirst3LettersName = userArray[0].slice(0,3)
    let userFirst3LettersLastName = userArray[1].slice(0,3)
    /* concat() Joins two or more strings, and returns a new joined string / No muta / Retorna string*/
    let userName = userFirst3LettersName.concat(userFirst3LettersLastName)
    let newMail = userName.concat("@myDomain.com")

    // Se retorna el nombre de usuario y correo 
    return {userName, newMail}; 
}
// Funcion para verificacion de unicidad
const userVerification = (userName, newMail) => {
    let userKeys = Object.keys(users);
    let i = 1;
    // includes() to check if an array includes a specific element / No muta / Retorna Boolean
    if (userKeys.includes(userName)) {
        userName = userName + '1'; 
        newMail = userName.concat("@myDomain.com");
    }
    // Se agrega el nombre de usuario y correo al objeto 'users'despues de la validacion
    users[userName] = newMail;
    console.log(users);
}
// Funcion principal
const main = () => {
    let flag = true; 
    while (flag) { 
        let {userName, newMail} = newUser(); 
        if (userName && newMail) { 
            userVerification(userName, newMail);
        }
        flag = confirm("¿Quieres ingresar otro nombre?"); 
    }
}
main()
