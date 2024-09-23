// Código para la lista de tareas
document.getElementById("tareaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const tareaInput = document.getElementById("nuevaTarea");
    const tareaTexto = tareaInput.value;
    
    const li = document.createElement("li");
    li.textContent = tareaTexto;
    document.getElementById("listaTareas").appendChild(li);
    
    tareaInput.value = ""; // Limpiar el campo
});
