let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let posicionModificar = null;

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let descripcionGastos = document.getElementById("descripcionGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;

    if (posicionModificar !== null) {

        listaNombresGastos[posicionModificar] = nombreGasto;
        listaDescripcionGastos[posicionModificar] = descripcionGastos;
        listaValoresGastos[posicionModificar] = valorGasto;

        posicionModificar = null;
    } else {
    
        listaNombresGastos.push(nombreGasto);
        listaDescripcionGastos.push(descripcionGastos);
        listaValoresGastos.push(valorGasto);
    }

    actualizarListaDeGastos();
}

function actualizarListaDeGastos() {
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");

    let htmlLista = "";
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGastos = listaDescripcionGastos[posicion];

        htmlLista += `<li class="gasto-item">${elemento} - USD ${valorGasto.toFixed(2)} (${descripcionGastos})
            <span class="gasto-alert">${valorGasto > 150 ? '¡Gasto elevado!' : ''}</span>
            <button onclick="modificarGasto(${posicion});">Modificar</button>
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
            </li>`;

        totalGastos += valorGasto;
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
    document.getElementById("descripcionGasto").value = "";
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion, 1);
    actualizarListaDeGastos();
}

function modificarGasto(posicion) {
    document.getElementById("nombreGasto").value = listaNombresGastos[posicion];
    document.getElementById("valorGasto").value = listaValoresGastos[posicion];
    document.getElementById("descripcionGasto").value = listaDescripcionGastos[posicion];
    
    posicionModificar = posicion;
}