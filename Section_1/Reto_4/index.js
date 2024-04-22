alert(" ! Bienvenido al organizador de eventos !")
// Lista de eventos principal
let events = [];

// a. Creación de Eventos-------------------------------------------------------------------------------

// Función para crear un evento
const createEvent = () => {
    // Se solicitan datos al usuario
    let id = prompt("Ingrese el identificador del evento: (1,2,3,4,5...)");
    let name = prompt("Ingrese el nombre del evento:");
    let date = prompt("Ingrese la fecha del evento:  (dd/mm/aaaa) ");
    let description = prompt("Ingrese la descripción del evento:");

    // Se crea un  nuevo objeto 
    let event = {
        id: id.trim(),
        //	.trim Removes whitespace from both ends of a string / No muta / Return String
        name: name.trim().toLowerCase(),
        date: date.trim(),
        description: description.trim().toLowerCase()
    };

    // Se crea una nueva copia del objeto event y luego esa copia se agrega al array events
    //Object.assign copy the properties from one object to another, It returns the modified target object.
        events.push(Object.assign({}, event));
}

// b. Visualización y Búsqueda de Eventos --------------------------------------------------------------------------------------

// Función para listar todos los eventos
const listEvents = () => {
    console.log(Object.values(events[0]));
}

// Función para buscar un evento por nombre
const searchEvent = (eventName) => {
    eventName = eventName.toLowerCase();
    for (let event of events) {
        if (event.name.includes(eventName)) {
            console.log("Evento encontrado");
            console.log(event);
        }
        else  {
            console.log("Evento no encontrado");
        }
    }
}

// c. Actualización de Eventos --------------------------------------------------------------------------------------
// Función para actualizar un evento
const updateEvent = () => {
    let id = prompt("Ingrese el identificador del evento a actualizar:");

    // Se encuentra el evento en la lista de eventos
        // .find Returns the value of the first element in an array that pass a test / No muta / Return : Element
    let event = events.find(event => event.id === id);

    if (event) {
        let fields = prompt("Ingrese los campos del evento que desea modificar (id, name, date, description), separados por comas:");

        // Se dividen los campos ingresados y se convierten en un array
        fields = fields.split(',');
        
        //Eliminamos espacios en blanco no deseados
        for (let field of fields) {
            field = field.trim();

            // Se verifica si el campo es válido
            if (Object.keys(event).includes(field)) {
                // Se solicita el nuevo campo
                let newValue = prompt(`Ingrese el nuevo valor para ${field}:`);
                // Se actualiza el campo
                event[field] = newValue.trim().toLowerCase();
            } else {
                console.log(`El campo ${field} no es válido. Los campos válidos son: id, name, date, description.`);
            }
        }

        // Se actualiza el evento en la lista de eventos
        // findIndex Returns the index of the first element in an array that pass a test / No muta / Return: Boolean
        let index = events.findIndex(e => e.id === id);
        // Se crea una copia del objeto event, y luego esa copia se asigna al elemento en el índice encontrado en el paso anterior
        events[index] = Object.assign({}, event);

        console.log(events);
    } else {
        console.log("No se encontró un evento con el identificador ingresado.");
    }
}

// d. Eliminacion de Eventos --------------------------------------------------------------------------------------
// Función para eliminar un evento
const deleteEvent = () => {
    let id = prompt("Ingrese el identificador del evento a eliminar:");

    //Se verifica si el evento existe en la lista de eventos
    // 25. Array.some()
    // use case: to check if at least one element in an array passes a test
    // Mutates Array: NO ,Return Value: Boolean
    let eventExists = events.some(event => event.id === id);

    if (eventExists) {
        // Se elimina el evento de la lista de eventos
        events = events.filter(event => event.id !== id);

        // Se muestra la lista de eventos actualizada
        console.log(Object.values(events[0]));
    } else {
        console.log("No se encontró un evento con el identificador ingresado.");
    }
}

// Función principal --------------------------------------------------------------------------------------
const main = () => {
    //a. Creación de Eventos
    createEvent();

    //b. Visualización y Búsqueda de Eventos
    listEvents();
    let eventName = prompt("Ingrese el nombre del evento a buscar:");
    searchEvent(eventName);

    //c. Actualización de Eventos
    updateEvent();

    //d. Eliminacion de Eventos
    deleteEvent();
}
main();

