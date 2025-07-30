let amigos = [];

function agregarAmigo () {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "") {
        alert("El nombre del amigo no puede ser un texto vacio!!!");
    }else{
        amigos.push(nombreAmigo);
        limpiarInput();
        console.log(amigos)
    }
}

function limpiarInput () {
    document.querySelector("#amigo").value = "";
}