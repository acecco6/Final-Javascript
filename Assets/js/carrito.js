

function addCarrito(data) {
    let id=$(this).attr("data-id") 
    $.getJSON("../Assets/js/productos.json", function(data){
        for (const producto of data) {
            if(id == producto.id){
                modalCarrito(1500)
                var item=carrito.filter(item=>item.id == id)
                if (item==""){
                    carrito.push({id:producto.id,nombre:producto.nombre,cantidad:1,precio:producto.precio})
                    console.log(carrito)
                    let enJson=JSON.stringify(carrito)
                    console.log(enJson)
                    localStorage.setItem("carrito",enJson)
                    ActualizarCantidad()
                    return
                }
                item=item[0]
                for (const ItemCar of carrito) {
                    if (ItemCar.id==item.id) {
                        ItemCar.cantidad=ItemCar.cantidad+1
                        localStorage.setItem('carrito', JSON.stringify(carrito));
                        ActualizarCantidad()
                    }
                }
            }
        }
    })
}

// Borrado de la tabla
EliminarCarrito=(id)=>{
    for (const content of $(".item__tabla")) {
        if (content.dataset.id == id) {
            tabla_body.removeChild(content)
        }
    }
    let filtrado=carrito.filter(item => item.id != id)
    carrito=filtrado
    if (carrito.length==0) {
        localStorage.removeItem("carrito")
        $("#carrito__on").hide()
        $("#carrito__empty").show()
    }else{
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    ActualizarCantidad()
}

Comprar=(id)=>{
    modalCarrito(3000)
    console.log("comprar")
    for (const content of $(".item__tabla")) {
        if (content.dataset.id == id) {
            tabla_body.removeChild(content)
        }
    }
    let filtrado=carrito.filter(item => item.id != id)
    carrito=filtrado
    
    if (carrito.length==0) {
        localStorage.removeItem("carrito")
        $("#carrito__on").hide()
        $("#carrito__empty").show()
    }else{
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    ActualizarCantidad()
}