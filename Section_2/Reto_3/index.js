alert("Bienvenido al sistema de gestion de inventario")
// Nuestro inventario
let products = []; 

//a. Creación de Productos:----------------------------------------------------------------------------------------------------------------
function createProduct() {
    let name = prompt('Introduce el nombre del producto: ');
    let price = prompt('Introduce el precio del producto: ');
    let quantity = prompt('Introduce la cantidad del producto: ');
    let description = prompt('Introduce la descripción del producto: ');

    let product = {
        //se un identificador único para cada producto nuevo que se agrega a la lista de productos.
        id: products.length + 1,
        name: name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        description: description
    };

    products.push(product);
    console.log(`Producto creado: ${product.name}`);
}



//b. Duplicacion de Productos: -----------------------------------------------------------------------------------------------------------
function duplicateProduct() {
    let id = prompt('Introduce el id del producto que quieres duplicar: ');

    // Buscar el producto en el array de productos
    let product = products.find(product => product.id == id);

    if (product) {
        // Crear una copia del producto
        // Object.assign(): copy the properties from one object to another
        let duplicate = Object.assign({}, product);
        duplicate.id = products.length + 1;
        duplicate.name = product.name + ' Copy';

        // Añadir el producto duplicado al array de productos
        products.push(duplicate);

        console.log('Producto duplicado:');
    } else {
        console.log('No se encontró ningún producto con ese id.');
    }
}



//c. Visualización y Búsqueda de Productos -----------------------------------------------------------------------------------------------
let viewProducts = () => {
    console.log('Productos en el inventario:');
    products.forEach(product => {
        console.log('ID: ' + product.id);
        console.log('Nombre: ' + product.name);
        console.log('Precio: ' + product.price);
        console.log('Cantidad: ' + product.quantity);
        console.log('Descripción: ' + product.description);
        console.log('------------------------');
    });
}

let searchProductByName = () => {
    let name = prompt('Introduce el nombre del producto que quieres buscar: ');

    // Buscar el producto en el array de productos
    let product = products.find(product => product.name === name);

    if (product) {
        console.log('Producto encontrado:');
        console.log('ID: ' + product.id);
        console.log('Nombre: ' + product.name);
        console.log('Precio: ' + product.price);
        console.log('Cantidad: ' + product.quantity);
        console.log('Descripción: ' + product.description);
    } else {
        console.log('No se encontró ningún producto con ese nombre.');
    }
}

let searchProductByPrice = () => {
    let minPrice = prompt('Introduce el precio mínimo: ');
    let maxPrice = prompt('Introduce el precio máximo: ');

    // Filtrar los productos en el array de productos por precio
    let filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

    if (filteredProducts.length > 0) {
        console.log('Productos encontrados:');
        filteredProducts.forEach(product => {
            console.log('ID: ' + product.id);
            console.log('Nombre: ' + product.name);
            console.log('Precio: ' + product.price);
            console.log('Cantidad: ' + product.quantity);
            console.log('Descripción: ' + product.description);
            console.log('------------------------');
        });
    } else {
        console.log('No se encontraron productos en ese rango de precios.');
    }
}


//d. Actualización de Productos -----------------------------------------------------------------------------------------------------

let updateProduct = () => {
    // Solicitar al usuario el identificador del producto a actualizar
    let id = prompt("Ingrese el identificador del producto a actualizar:");

    // Se encuentra el producto en la lista de productos
    let product = products.find(product => product.id == id);

    if (product) {
        let fields = prompt("Ingrese los campos del producto que desea modificar (name, price, quantity, description), separados por comas:");

        // Se dividen los campos ingresados en un array
        fields = fields.split(',');

        for (let field of fields) {
            field = field.trim();

            // Se verifica si el campo es válido
            if (Object.keys(product).includes(field)) {
                // Se solicita el nuevo valor
                let newValue = prompt(`Ingrese el nuevo valor para ${field}:`);
                // Se actualiza el campo
                product[field] = newValue.trim();
            } else {
                console.log(`El campo ${field} no es válido. Los campos válidos son: name, price, quantity, description.`);
            }
        }

        // Se actualiza el producto en la lista de productos
        let index = products.findIndex(p => p.id == id);
        products[index] = Object.assign({}, product);

        console.log('Producto actualizado:');
        console.log('ID: ' + product.id);
        console.log('Nombre: ' + product.name);
        console.log('Precio: ' + product.price);
        console.log('Cantidad: ' + product.quantity);
        console.log('Descripción: ' + product.description);
    } else {
        console.log("No se encontró un producto con el identificador ingresado.");
    }
}



//e. Eliminación de Productos: -----------------------------------------------------------------------------------------------------
let deleteProduct = () => {
    // Solicitar al usuario el identificador del producto a eliminar
    let id = prompt("Ingrese el identificador del producto a eliminar:");

    // Verificar si el producto existe en la lista de productos
    let productExists = products.some(product => product.id == id);

    if (productExists) {
        // Eliminar el producto de la lista de productos
        products = products.filter(product => product.id != id);

        console.log('Producto eliminado. Lista de productos actualizada:');
        console.log(products);
    } else {
        console.log("No se encontró un producto con el identificador ingresado.");
    }
}


//f. Verificación de Existencia de Productos e inventario: -------------------------------------------------------------------------------
let checkProductExistenceAndInventory = () => {
    // Solicitar al usuario el identificador del producto a verificar
    let id = prompt("Ingrese el identificador del producto a verificar:");

    // Verificar si el producto existe en la lista de productos
    let productExists = products.some(product => product.id == id);

    if (productExists) {
        // Si el producto existe, verificar si hay suficiente cantidad disponible
        let sufficientQuantity = products.filter(product => product.id == id && product.quantity > 0);

        if (sufficientQuantity.length > 0) {
            console.log('El producto existe y hay suficiente cantidad disponible.');
        } else {
            console.log('El producto existe pero la cantidad disponible es insuficiente.');
        }
    } else {
        console.log("No se encontró un producto con el identificador ingresado.");
    }
}


//g. Venta de Productos: -----------------------------------------------------------------------------------------------------------------
let sellProduct = () => {
    // Solicitar al usuario el identificador del producto a vender
    let id = prompt("Ingrese el identificador del producto a vender:");

    // Buscar el producto en el array de productos
    let product = products.find(product => product.id == id);

    if (product) {
        // Solicitar al usuario la cantidad a vender
        let quantity = prompt("Ingrese la cantidad del producto a vender:");

        if (product.quantity >= quantity) {
            // Si hay suficiente cantidad, realizar la venta
            // Actualizar la cantidad del producto
            product.quantity -= quantity;
            console.log('Venta realizada. Producto actualizado:');
            console.log('ID: ' + product.id);
            console.log('Nombre: ' + product.name);
            console.log('Precio: ' + product.price);
            console.log('Cantidad: ' + product.quantity);
            console.log('Descripción: ' + product.description);
        } else {
            console.log('No hay suficiente cantidad del producto para vender.');
        }
    } else {
        console.log("No se encontró un producto con el identificador ingresado.");
    }
}



//h. Compra de Productos: ---------------------------------------------------------------------------------------------------------------------
let buyProduct = () => {
    // Solicitar al usuario el identificador del producto a comprar
    let id = prompt("Ingrese el identificador del producto a comprar:");

    // Buscar el producto en el array de productos
    let product = products.find(product => product.id == id);

    if (product) {
        // Solicitar al usuario la cantidad a comprar
        let quantity = prompt("Ingrese la cantidad del producto a comprar:");

        // Actualizar la cantidad del producto
        product.quantity += parseInt(quantity);

        console.log('Compra realizada. Producto actualizado:');
        console.log('ID: ' + product.id);
        console.log('Nombre: ' + product.name);
        console.log('Precio: ' + product.price);
        console.log('Cantidad: ' + product.quantity);
        console.log('Descripción: ' + product.description);
    } else {
        console.log("No se encontró un producto con el identificador ingresado.");
    }
}

//i. Cálculo de Valor Total del Inventario: --------------------------------------------------------------------------------------------------

let calculateTotalInventoryValue = () => {
    // Calcular el valor total del inventario
    let totalValue = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0); 
        // 'total' es el acumulador que almacena el valor total hasta ahora
        // 'product' es el elemento actual del array que estamos procesando
        // 'product.price * product.quantity' calcula el valor del producto actual
        // Sumamos este valor al total acumulado y devolvemos el resultado
        // Este resultado se utilizará como 'total' en la próxima iteración
        // '0' es el valor inicial de 'total'

    console.log('El valor total del inventario es: ' + totalValue);
}


//j. Ordenamiento de Productos --------------------------------------------------------------------------------------------------------------


//k. Identificacion de productos con posibles malas palabras en la descripción ----------------------------------------------------------------

// RegExp es un objeto en JavaScript que se utiliza para representar expresiones regulares, que son patrones que puedes usar para hacer coincidir combinaciones de caracteres en strings. En este caso, se utiliza para buscar palabras malas en la descripción del producto.

// Aquí te dejo un desglose de cómo funciona:

// new RegExp(word, 'gi'): Esto crea un nuevo objeto RegExp. El primer argumento es el patrón que quieres buscar, en este caso, cada palabra mala. El segundo argumento son las banderas que modifican la búsqueda.
// Las banderas son las siguientes:
// g: Esta es la bandera de “global”. Esto significa que buscará todas las ocurrencias de la palabra en la cadena, no solo la primera.
// i: Esta es la bandera de “insensitive”. Esto significa que la búsqueda no distinguirá entre mayúsculas y minúsculas.
// Por lo tanto, new RegExp(word, 'gi') creará un objeto RegExp que buscará todas las ocurrencias de una palabra mala en la descripción del producto, sin importar si están en mayúsculas o minúsculas.

let identifyProductsWithBadWords = () => {
    // Lista de malas palabras
    let badWords = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];

    // Filtrar los productos que contienen malas palabras en la descripción
    let blacklistedProducts = products.filter(product => {
        for (let word of badWords) {
            if (product.description.includes(word)) {
                return true;
            }
        }
        return false;
    });

    // Crear una copia profunda de los productos con malas palabras
    // .map to map each element in an array and return a new array
    blacklistedProducts = blacklistedProducts.map(product => Object.assign({}, product));

    // Reemplazar las malas palabras en la descripción por asteriscos
    for (let product of blacklistedProducts) {
        for (let word of badWords) {
            let regex = new RegExp(word, 'gi');
            //'gi': Estas son las banderas para la búsqueda. La bandera 'g' significa “global”, lo que significa que buscará todas las ocurrencias de la cadena de texto en lugar de detenerse después de la primera coincidencia. La bandera 'i' significa “insensible a mayúsculas y minúsculas”, lo que significa que no distinguirá entre mayúsculas y minúsculas.
            product.description = product.description.replace(regex, '****');
        }
    }

    console.log('Productos con posibles malas palabras en la descripción:');
    blacklistedProducts.forEach(product => {
        console.log('ID: ' + product.id);
        console.log('Nombre: ' + product.name);
        console.log('Precio: ' + product.price);
        console.log('Cantidad: ' + product.quantity);
        console.log('Descripción: ' + product.description);
        console.log('------------------------');
    });
}


//l. Reporte general de Productos -----------------------------------------------------------------------------------------------------

let generateProductReport = () => {
    // Cantidad de productos
    let productCount = products.length;

    // Valor total del inventario
    let totalInventoryValue = products.reduce((total, product) => total + (product.price * product.quantity), 0);

    // Cantidad de productos más caros
    let mostExpensiveProductPrice = products[0].price;
    products.forEach(product => {
        if (product.price > mostExpensiveProductPrice) {
            mostExpensiveProductPrice = product.price;
        }
    });
    let mostExpensiveProductsCount = products.filter(product => product.price === mostExpensiveProductPrice).length;

    // Cantidad de productos más baratos
    let cheapestProductPrice = products[0].price;
    products.forEach(product => {
        if (product.price < cheapestProductPrice) {
            cheapestProductPrice = product.price;
        }
    });
    let cheapestProductsCount = products.filter(product => product.price === cheapestProductPrice).length;

    // Cantidad de productos con mayor cantidad disponible
    let mostAvailableProductQuantity = products[0].quantity;
    products.forEach(product => {
        if (product.quantity > mostAvailableProductQuantity) {
            mostAvailableProductQuantity = product.quantity;
        }
    });
    let mostAvailableProductsCount = products.filter(product => product.quantity === mostAvailableProductQuantity).length;

    // Cantidad de productos con menor cantidad disponible
    let leastAvailableProductQuantity = products[0].quantity;
    products.forEach(product => {
        if (product.quantity < leastAvailableProductQuantity) {
            leastAvailableProductQuantity = product.quantity;
        }
    });
    let leastAvailableProductsCount = products.filter(product => product.quantity === leastAvailableProductQuantity).length;

    // Cantidad de productos con posibles malas palabras en la descripción
    let badWords = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];
    let blacklistedProductsCount = products.filter(product => {
        for (let word of badWords) {
            if (product.description.includes(word)) {
                return true;
            }
        }
        return false;
    }).length;

    // Imprimir el reporte en consola
    console.log('Reporte General de Productos:');
    console.log('Cantidad de productos:', productCount);
    console.log('Valor total del inventario:', totalInventoryValue);
    console.log('Cantidad de productos más caros:', mostExpensiveProductsCount);
    console.log('Cantidad de productos más baratos:', cheapestProductsCount);
    console.log('Cantidad de productos con mayor cantidad disponible:', mostAvailableProductsCount);
    console.log('Cantidad de productos con menor cantidad disponible:', leastAvailableProductsCount);
    console.log('Cantidad de productos con posibles malas palabras en la descripción:', blacklistedProductsCount);
}

//Funcion principal
let main = () => {
    createProduct();
    duplicateProduct();
    viewProducts();
    searchProductByName();
    searchProductByPrice();
    updateProduct();
    deleteProduct();
    checkProductExistenceAndInventory();
    sellProduct();
    buyProduct();
    calculateTotalInventoryValue();
    identifyProductsWithBadWords();
    generateProductReport();
}

main();

// FOR EACH - FOR OF
// forEach es un método de los arrays en JavaScript que ejecuta una función proporcionada una vez por cada elemento del array. Es útil cuando necesitas ejecutar una función que tiene efectos secundarios (como modificar variables externas o imprimir en la consola) en cada elemento del array.

// for...of es una declaración que crea un bucle que itera sobre objetos iterables (incluyendo arrays, mapas, conjuntos, argumentos de funciones, y otros objetos similares). Es útil cuando necesitas un bucle más tradicional donde puedes usar break para salir del bucle antes de tiempo, o cuando necesitas acceder al índice del elemento actual.