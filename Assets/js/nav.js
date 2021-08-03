
$("#down").on("click", function() {
    $("#down__option").toggle(duration=200);
  })

$("#header__button__active").on("click",function() {
  $("#header__menu").fadeIn(duration=200);
})
$("#header__button__close").on("click",function() {
  $("#header__menu").fadeOut(duration=200);
})

var carrito_cantidad=0
if (localStorage.carrito == undefined ) {
  var carrito=[]
}else{
  var carrito=JSON.parse(localStorage.getItem("carrito"))
  carrito_cantidad=carrito.length
}

var numero__carrito=document.getElementById("numero__carrito")
var numero__carrito2=document.getElementById("numero__carrito_")
function ActualizarCantidad(){
    carrito_cantidad=carrito.length
    numero__carrito.innerText=carrito_cantidad
    numero__carrito2.innerText=carrito_cantidad
}
ActualizarCantidad()