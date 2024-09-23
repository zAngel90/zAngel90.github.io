// Código para hábitos saludables
document.getElementById("habitoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const habitoInput = document.getElementById("nuevoHabito");
    const habitoTexto = habitoInput.value;
    
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = habitoTexto;
    tr.appendChild(td);
    document.getElementById("tablaHabitos").appendChild(tr);
    
    habitoInput.value = ""; // Limpiar el campo
});
