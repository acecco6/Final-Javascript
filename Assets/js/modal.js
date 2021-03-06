
$.getJSON( "../Assets/js/productos.json", function(data){
    let card__content=document.getElementById("card__content")
    for (const producto of data) {
        if (producto.tipo == tipo || tipo=="todos") {
            card__content.innerHTML+=`
            <div class="card">
                <div class="card__img" onclick="modal(${producto.id})">
                    <img src="${producto.img[0]}">
                </div>
                <div class="card__text">
                    <h3 class="">${producto.nombre}</h3>
                    <p class="">Medidas ${producto.medidas}</p>
                    <p class="">Precio $${producto.precio}</p>
                    <button class="btn-add" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            </div>`
        }
    }
    $(".btn-add").on("click",addCarrito)
   
}) 

function modalCarrito(tiempo){
    $("#modal").css("display", "flex");
    $("#modal").css("position", "fixed");
    $("#carrito__confirm").css("display", "flex");
    setTimeout(() => {
        $("#carrito__confirm").css("transform","translateY(0%)")
    },10)
    setTimeout(() => {
        CloseModal()
    },tiempo)
}

function Renderimg(producto){
    let img=document.getElementById("modal__img_option")
    producto.img.forEach(element => {
        img.innerHTML+=`
        <div class="img__option__content">
            <img style="object-fit: cover;" class="img__modal__option img_opacity" src="${element}" alt="">
        </div>
        `
    });
    
}
function modal(id) {
    let modal__content=document.getElementById("modal__content")
    $("#modal").css("display", "flex");
    $("#modal").css("position", "fixed");
    $("#modal").css("background-color", "rgba(0, 0, 0, 0.5)");
    $("#modal__content").css("display", "flex");
    $.getJSON( "../Assets/js/productos.json", function(data){
        for (const producto of data) {
            if (producto.id == id) {
                modal__content.innerHTML=`
                <div id="modal__img_option">
                </div>

                <div id="modal__img">
                    <img id="img__modal" src="${producto.img[0]}" alt="">
                </div>

                <div id="modal__info">
                    <div class="info__modal__text">
                        <h3>${producto.nombre}</h3>
                        <p>Medidas ${producto.medidas}</p>
                        <p>Tejido a Crochet</p>
                        <div class="li">
                        <li>Precios por mayor a partir 20 unidades</li>
                        <li>Consultar por otras Medidas</li>
                        <li>Consultar por otros colores</li>
                        </div>
                    
                    </div>
                    <div class="modal__line"></div>
                    <div class="modal__consulta">
                        <a href="./contacto.html"><button>Consultar</button></a>
                    </div>
                </div>
                <div id="close__modal" onclick="CloseModal()">
                    <i class="fas fa-times"></i>
                </div>
                `

                Renderimg(producto)
            }
            

        }
    }) 
        
        setTimeout(() => {
            let prueba=document.getElementsByClassName("img__modal__option")
            prueba[0].classList.remove("img_opacity")
            
            // $(".img__modal__option")[0].removeClass("img_opacity")
            $("#modal__content").css("transform","translateY(0%)")
            for (const img of $(".img__modal__option")) {
                img.addEventListener("click",function(){
                    for (const imgopaciti of $(".img__modal__option")){
                        $(imgopaciti).addClass("img_opacity")
                    }
                    $(img).removeClass("img_opacity")
                    let direccion=img.getAttribute("src")
                    let imagen=document.getElementById("img__modal")
                    imagen.setAttribute("src", direccion);
                })
            }
        },10)
}

function CloseModal(){   
    $("#modal").css("background-color", "rgba(255, 255, 255, 0)");
    $("#modal__content").css("transform","translateY(-150%)")
    $("#carrito__confirm").css("transform","translateY(-1000%)")
    setTimeout(() => {
        $("#modal").css("display", "none")
        $("#carrito__confirm").css("display", "none");
        $("#modal__content").css("display", "none");
    },100)
    
    
}






