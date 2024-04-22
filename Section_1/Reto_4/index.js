alert(" ! Bienvenido al organizador de eventos !");
// Lista de eventos principal
let events = [];
let flag = true;

// a. Creación de Eventos-------------------------------------------------------------------------------

while (flag) {
  // Sistema de gestion de eventos
  const userInput = prompt(`Por favor ingresa una de las siguientes opciones: 
                            \n 1. Crear un evento 
                            \n 2. Ver eventos
                            \n 3. Buscar eventos por nombre
                            \n 4. Actualizar evento
                            \n 5. Eliminar evento
                            \n 6. Salir`);
  switch (userInput) {
    case "1":
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
          description: description.trim().toLowerCase(),
        };

        // Se crea una nueva copia del objeto event y luego esa copia se agrega al array events
        //Object.assign copy the properties from one object to another, It returns the modified target object.
        events.push(Object.assign({}, event));
      };
      createEvent();
      break;

    // b. Visualización  de Eventos --------------------------------------------------------------------------------------
    case "2":
      // Función para listar todos los eventos
      const listEvents = () => {
        console.log(Object.values(events[0]));
      };
      listEvents();
      break;
    // c.Búsqueda de Eventos --------------------------------------------------------------------------------------
    case "3":
      // Función para buscar un evento por nombre
      const searchEvent = (eventName) => {
        eventName = eventName.toLowerCase();
        for (let event of events) {
          if (event.name.includes(eventName)) {
            console.log("Evento encontrado");
            console.log(event);
          } else {
            console.log("Evento no encontrado");
          }
        }
      };
      let eventName = prompt("Ingrese el nombre del evento a buscar:");
      searchEvent(eventName);
      break;

    // d. Actualización de Eventos --------------------------------------------------------------------------------------
    case "4":
      // Función para actualizar un evento
      const updateEvent = () => {
        let id = prompt("Ingrese el identificador del evento a actualizar:");

        // Se encuentra el evento en la lista de eventos
        // .find Returns the value of the first element in an array that pass a test / No muta / Return : Element
        let event = events.find((event) => event.id === id);

        if (event) {
          let fields = prompt(
            "Ingrese los campos del evento que desea modificar (id, name, date, description), separados por comas:"
          );

          // Se dividen los campos ingresados y se convierten en un array
          fields = fields.split(",");

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
              console.log(
                `El campo ${field} no es válido. Los campos válidos son: id, name, date, description.`
              );
            }
          }

          // Se actualiza el evento en la lista de eventos
          // findIndex Returns the index of the first element in an array that pass a test / No muta / Return: Boolean
          let index = events.findIndex((e) => e.id === id);
          // Se crea una copia del objeto event, y luego esa copia se asigna al elemento en el índice encontrado en el paso anterior
          events[index] = Object.assign({}, event);

          console.log(events);
        } else {
          console.log(
            "No se encontró un evento con el identificador ingresado."
          );
        }
      };
      updateEvent();
      break;

    // e. Eliminacion de Eventos --------------------------------------------------------------------------------------
    case "5":
      // Función para eliminar un evento
      const deleteEvent = () => {
        let id = prompt("Ingrese el identificador del evento a eliminar:");

        //Se verifica si el evento existe en la lista de eventos
        // 25. Array.some()
        // use case: to check if at least one element in an array passes a test
        // Mutates Array: NO ,Return Value: Boolean
        let eventExists = events.some((event) => event.id === id);

        if (eventExists) {
          // Se elimina el evento de la lista de eventos
          events = events.filter((event) => event.id !== id);

          /// Se muestra la lista de eventos actualizada
        if (events.length > 0) {
        console.log(Object.values(events[0]));
         }

        console.log("Evento eliminado");
        } else {
          console.log(
            "No se encontró un evento con el identificador ingresado."
          );
        }
      };
      deleteEvent();
      break;

    case "6":
      alert("Gracias por visitarnos, vuelve pronto");
      flag = false;
      break;
    default:
      console.log("Opción no válida. Por favor, intenta de nuevo.");
  }
}
