// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    window.agregarAmigo = function() {
        let input = document.getElementById("amigo");
        let nombre = input.value.trim();
        
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    };

    function actualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }

    window.sortearAmigo = function() {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agregue al menos un nombre antes de sortear.");
            return;
        }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let ganador = amigos[indiceAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${ganador}</strong>!</li>`;
    };
});

