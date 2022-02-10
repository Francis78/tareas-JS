const body = document.getElementsByTagName("body")
const section = document.querySelector('section')
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
