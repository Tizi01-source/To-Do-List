const form = document.getElementById('formulario')
const tarea = document.getElementById('tarea')
const lista = document.getElementById("lista-tareas");
const fondo = document.getElementsByTagName("ul");



form.addEventListener("submit", function (event) {
    event.preventDefault();

    const textoTarea = tarea.value;
    
    if (textoTarea !== ""){
        const li = document.createElement("li");
        li.textContent = textoTarea;

        

        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar"
        btnBorrar.classList.add("btn-borrar");

        btnBorrar.addEventListener("click", function () {
            lista.removeChild(li);
        });

        li.appendChild(btnBorrar);
        lista.appendChild(li);

        tarea.value = "";
        
    }
});
