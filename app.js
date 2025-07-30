let amigos = [];

function agregarAmigo () {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "") {
        alert("El nombre del amigo no puede ser un texto vacio!!!");
    }else{
        amigos.push(nombreAmigo);
        limpiarInput();
        listaAmigos();
        console.log(amigos)
    }
}

function limpiarInput () {
    document.querySelector("#amigo").value = "";
}

function listaAmigos () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let nombre = amigos[i];
        let li = document.createElement("li");
        li.innerHTML = nombre;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Ingresa nombres para poder realizar el sorteo!!!");
    } else {
        let numero = parseInt(Math.floor((Math.random()*amigos.length)));
        console.log(numero);
        let amigoSorteado = amigos[numero];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigoSorteado;
        amigos = [];
        limpiarInput();
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
    }
}