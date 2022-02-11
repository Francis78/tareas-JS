
const productos = [
    {
        imagenPrincipal: "https://picsum.photos/id/0/200/300",
        imagenFondo:"https://picsum.photos/id/1/200/300",
        nombre: "Computadora portatil",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/1062/200/300",
        imagenFondo:"https://picsum.photos/id/1025/200/300",
        nombre: "Cobija para perro",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/111/200/300",
        imagenFondo:"https://picsum.photos/id/133/200/300",
        nombre: "Automovil",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/250/200/300",
        imagenFondo:"https://picsum.photos/id/319/200/300",
        nombre: "Camara",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/30/200/300",
        imagenFondo:"https://picsum.photos/id/326/200/300",
        nombre: "Taza",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/75/200/300",
        imagenFondo:"https://picsum.photos/id/674/200/300",
        nombre: "Kilo de uva",
        precio: "1500",
    }
]



/*
    <div class="card">
        <div class="img-wrapper">
            <img class="principal-img" src="https://picsum.photos/200/300" alt="imagen">
            <img src="https://picsum.photos/id/175/200/300" alt="">
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, repellendus.</p>
        <button>Comprar</button>
    </div>
*/
const section = document.getElementsByTagName("section")[0]
/*
const card = document.createElement( "div" )
card.classList.add( "card" )

const imagesWrapper = document.createElement("div")
imagesWrapper.classList.add( "img-wrapper" )

const firstImg = document.createElement( "img" )
firstImg.src = "https://picsum.photos/200/300"
firstImg.classList.add("principal-img")

const secondImg = document.createElement("img")
secondImg.src = "https://picsum.photos/id/175/200/300"

const paragraph = document.createElement("p")
paragraph.textContent = "Nombre del producto"

const button = document.createElement("button")
button.textContent = "Comprar"

card.appendChild( imagesWrapper )
card.appendChild( paragraph )
card.appendChild( button )

imagesWrapper.appendChild( firstImg )
imagesWrapper.appendChild( secondImg )

section.appendChild( card )
console.log( card )
*/
function crearCard(productoInfo) {
    const card = document.createElement( "div" )
    card.classList.add( "card" )

    const imagesWrapper = document.createElement("div")
    imagesWrapper.classList.add( "img-wrapper" )

    const firstImg = document.createElement( "img" )
    firstImg.src = productoInfo.imagenPrincipal
    firstImg.classList.add("principal-img")

    const secondImg = document.createElement("img")
    secondImg.src = productoInfo.imagenFondo

    const paragraph = document.createElement("p")
    paragraph.textContent = productoInfo.nombre

    const button = document.createElement("button")
    button.textContent = "Comprar"

    card.appendChild( imagesWrapper )
    card.appendChild( paragraph )
    card.appendChild( button )

    imagesWrapper.appendChild( firstImg )
    imagesWrapper.appendChild( secondImg )

    //section.appendChild( card )
    //console.log( card )
    return card
}

let fragmento = new DocumentFragment


for (let i = 0; i < productos.length; i++) {

    let card = crearCard(productos[i])

    fragmento.appendChild(card)
    
}
section.appendChild(fragmento)
/*
//body.appendChild(section)
const div = document.querySelector('div').classList.add('card')
//section.appendChild(div)
const div1 = document.querySelectorAll('div').classList.add("img-wrapper")
//const card = document.getElementsByClassName("card")
//div.appendChild(div1)
const imagen = document.querySelector('img').classList.add(principal-img)
const elementWithSrc = document.createQuerySelector("[src]")
elementWithSrc.src = "https://picsum.photos/id/1019/200/300" 
const imagenes = document.querySelectorAll('img')
const imagen2 = document.createQuerySelector('[src]')
imagen2.src = "https://picsum.photos/id/175/200/300"
const parrafo = document.querySelector('p')
parrafo.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, repellendus.'
const boton = document.querySelector('button')
boton.textContent = 'Comprar'
imagenes.appendChild(elementWithSrc, imagen2)

//body.appendChild(elementWithSrc)
*/