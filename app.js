// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres
let nombres = [];

// Función para adicionar un nombre a la lista
function adicionarNombre() {
    let inputNombre = document.getElementById("nombreAmigo");
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = ""; // Limpiar el campo de texto
}

// Función para actualizar la lista visualmente
function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = ""; // Limpiar lista
    
    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = function() {
            eliminarNombre(index);
        };    
        
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}
// Función para eliminar un nombre a la lista
function eliminarNombre(index) {
    nombres.splice(index, 1); // Eliminar el nombre en la posición indicada
    actualizarLista();
}

// Función para sortear un nombre de forma aleatoria
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres primero.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];
    document.getElementById("resultado").textContent = `🎉 Amigo Secreto: ${amigoSecreto} 🎉`;
    
}

function crearEstrellas() {
    for (let i = 0; i < 100; i++) {
        let estrella = document.createElement("div");
        estrella.classList.add("estrella");
        estrella.style.left = Math.random() * 100 + "vw";
        estrella.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(estrella);
        setTimeout(() => estrella.remove(), 5000);
    }
}
setInterval(crearEstrellas, 1000);



