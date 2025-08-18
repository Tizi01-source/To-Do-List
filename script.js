const form = document.getElementById('formulario')
const tarea = document.getElementById('tarea')
const lista = document.getElementById("lista-tareas");

function capitalizar(texto){
    if(!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let textoTarea = tarea.value;
    if (textoTarea === "") return;

    textoTarea = capitalizar(textoTarea)
    
    if (textoTarea !== ""){
        const li = document.createElement("li");
        li.classList.add("tarea");

        const textoSpan = document.createElement("span");
        textoSpan.textContent = textoTarea;

        const textoFecha = document.createElement("span");
        const ahora = new Date();
        const hora = ahora.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        textoFecha.textContent = hora;
        textoFecha.style.margin = "0 10px";

        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar"
        btnBorrar.classList.add("btn-borrar");

        btnBorrar.addEventListener("click", function () {
            lista.removeChild(li);
        });

        li.appendChild(textoSpan);
        li.appendChild(textoFecha);
        li.appendChild(btnBorrar);
        lista.appendChild(li);

        tarea.value = "";
        
    }
});
