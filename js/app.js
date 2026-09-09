// Controlador: usa el Modelo y actualiza la Vista
const contenedor = document.querySelector("#menu-items");

menu.forEach(plato => {
    contenedor.innerHTML += `<div class="menu-item">${plato.nombre}
    - $${plato.precio}</div>`;
});

// Elementos del formulario
const inputNombre = document.getElementById("nombre");
const selectPlato = document.getElementById("plato");
for (let i=0; i < menu.length; i++){
    const opcion = document.createElement("option");
    opcion.value = menu[i].nombre;
    opcion.textContent = `${menu[i].nombre} - $${menu[i].precio}`;
    selectPlato.appendChild(opcion);
}
const inputCantidad = document.getElementById("cantidad");

// Botón y Tabla
const btnAgregar = document.getElementById("btn-agregar");
const tablaPedidos = document.getElementById("tabla-pedidos");

function agregarPedido() {
    // 1. Leer los valores actuales de los campos
    const nombre = inputNombre.value;
    const plato = selectPlato.value;
    const cantidad = inputCantidad.value;

    // 2. Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Ingresa el nombre del cliente");
        return;
    }

    // 3. Insertar la fila y limpiar el formulario
    const fila = document.createElement("tr");
    fila.innerHTML =
    `<td>${nombre}</td>
    <td>${plato}</td>
    <td>${cantidad}</td>`;
    tablaPedidos.appendChild(fila);

    // Limpiar los campos
    inputNombre.value = "";
    inputCantidad.value = "1";
    inputNombre.focus();
}

btnAgregar.addEventListener("click", agregarPedido);