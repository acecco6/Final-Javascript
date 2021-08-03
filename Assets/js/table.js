if (localStorage.carrito !== undefined ) {
    $("#carrito__on").show()
}else{
    $("#carrito__empty").show()
}



// Mostrar Tabla
var tabla_body=document.getElementById("tabla__body")
for (const item of carrito) {
    tabla_body.innerHTML+=
    `
    <tr class="item__tabla" data-id="${item.id}">
        <td data-label="Producto">${item.nombre}</td>
        <td data-label="Precio">$${parseFloat(item.precio).toFixed("2")}</td>
        <td data-label="Cantidad">${item.cantidad}</td>
        <td data-label="Total">$${total=(item.precio*item.cantidad).toFixed(2)}</td>
        <td data-label="Opciones" data-id="${item.id}"> <button class="btn-delete" data-id="${item.id}">Eliminar</button> <button class="btn-comprar" data-id="${item.id}"><a rel="modal:open">Compar</a></button> </td>
    </tr>
    `
}
// fin



// Configuracion BOTON ELIMIAR DEL CARRITO
$(".btn-delete").each((index,element)=>{
    element.addEventListener("click",()=>{
        let id=$(element).attr("data-id")
        EliminarCarrito(id)
    })
})


// Boton Comprar
$(".btn-comprar").each((index,element)=>{
    element.addEventListener("click",()=>{
        let id=$(element).attr("data-id")
        Comprar(id)
    })
})

