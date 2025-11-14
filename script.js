document.addEventListener("DOMContentLoaded", ()=>{
////////////HAMBURGUESA////////////
const burguer = document.querySelector(".burguir");
const menu = document.querySelector(".menu");

if (burguer && menu){
    burguer.addEventListener("click",()=>{
        menu.classList.toggle("active");
    })
}
//////////////CARRUSEL
const carruselCont = document.querySelector("main>div");
const images = carruselCont.querySelectorAll("img");
const btnPrev = carruselCont.querySelector(".prev");
const btnNext = carruselCont.querySelector(".next");
const puntitosCont = carruselCont.querySelector(".puntitos");

let indice = 0;
let intervalo;

function mostrarImagen(index){
    images.forEach((img, i)=>{
        img.style.display = i === index ? "block":"none";
    })
}

/////////////////PUNTITOS
images.forEach((img, i)=>{
    const punto = document.createElement("span");
    if(i===0) punto.classList.add("active");
    punto.addEventListener("click", ()=>{
        indice= i;
        mostrarImagen(indice);
    })
    puntitosCont.appendChild(punto);
})
const puntos = puntitosCont.querySelectorAll("span");

///////////////////////////////BOTONES 
btnNext.addEventListener("click", ()=>{
    indice = (indice+1)%images.length;
    mostrarImagen(indice);
})

btnPrev.addEventListener("click", ()=>{
    indice = (indice-1 + images.length)%images.length;
    mostrarImagen(indice);
})

///////////////////////////PASAR AUTOMÁTICAMENTE LAS IMÁGENES
function carruselStart(){
    intervalo= setInterval(()=>{
        indice=(indice+1)%images.length;
        mostrarImagen(indice);
    },5000);
}

function carruselStop(){
    clearInterval(intervalo);
}

carruselCont.addEventListener("mouseenter", carruselStop);
carruselCont.addEventListener("mouseleave", carruselStart);

mostrarImagen(indice);
carruselStart();

///////////BÚSQUEDA//////////
const buscador= document.getElementById("buscador");
const seccion = document.querySelectorAll("main section");

buscador.addEventListener("input", e =>{
    const texto = e.target.value.toLowerCase();
    secciones.forEach(sec =>{
        const titulo = sec.querySelector("h2").textContent.toLowerCase();
        sec.style.display = titulo.includes(texto) ? "block":"none";
    })
})
////////SCROLL Y VOLVER ARRIBA///////////
    const arriba = document.getElementById("up");

    window.addEventListener("scroll", ()=>{
        if(window.scrollY>100){
            arriba.style.display="flex";
        } else{
            arriba.style.display="none";
        }
    })
    arriba.addEventListener("click", ()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"        
        })
    })
})
//////////////FORMULARIO///////////
const nombre= document.getElementById("nombre");
const correo= document.getElementById("email");
const mensaje = document.getElementById("mensaje");

nombre.addEventListener("input",()=>{
    if(nombre.value.length <3){
        nombre.style.borderColor="red";
    }else{
        nombre.style.borderColor = "green";
    }
})
correo.addEventListener("input",()=>{
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    correo.style.borderColor = regex.test(correo.value) ? "green":"red";
})

//////////////ACCESIBILIDAD CON TOGGLE PARA MENÚS EN MÓVILES////////
document.querySelectorAll(".submenu > a").forEach(link=>{
    link.addEventListener("click", e =>{
        if(window.innerWidth <=768){
            e.preventDefault();
            link.parentElement.classList.toggle("open");
        }
    })
})    
