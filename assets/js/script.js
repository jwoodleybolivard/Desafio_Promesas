// Requerimiento 1: Implementar ES6 para toda la estructura del código.
// Requerimiento 2: Crear una función asíncrona para obtener los datos de la URL.
async function obtenerDatos(url) {
    try {
        // Requerimiento 3: Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await para recibir el valor directamente de la promesa.
        let response = await fetch(url);
        let data = await response.json();

        // Obtenemos una referencia al elemento donde queremos mostrar los resultados
        let divResultados = document.getElementById('contenedor-resultados'); // Cambia el nombre para ser más descriptivo

        // Limpiamos los resultados anteriores
        divResultados.innerHTML = '';

        // Requerimiento 4: Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos.
        data.slice(0, 20).forEach(album => {
            // Creamos un nuevo elemento p para cada título
            let p = document.createElement('p');
            p.textContent = album.title;

            // Añadimos el nuevo elemento p al div de resultados
            divResultados.appendChild(p);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Requerimiento 5: Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”.
function enviarInformacion() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
}

// Requerimiento 6: Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.
async function mostrarMensaje() {
    try {
        let mensaje = await enviarInformacion();
        console.log('Mensaje:', mensaje); // Agrega un mensaje descriptivo
    } catch (error) {
        console.error('Error al mostrar el mensaje:', error);
    }
}

// Llamada a las funciones principales
obtenerDatos('https://jsonplaceholder.typicode.com/photos');
mostrarMensaje();
