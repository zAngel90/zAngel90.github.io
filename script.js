// Botón para mostrar un nuevo consejo aleatorio
const consejos = [
    "Consejo 1: Toma descansos regulares de las pantallas",
    "Consejo 2: Practica la atención plena antes y después de usar tecnología",
    "Consejo 3: Usa apps que te ayuden a controlar el tiempo frente a la pantalla",
    "Consejo 4: Establece zonas libres de tecnología en casa"
];

document.getElementById("nuevoConsejo").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * consejos.length);
    document.getElementById("consejo1").innerText = consejos[randomIndex];
});
