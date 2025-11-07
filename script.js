//CARRUSEL
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

//PUNTITOS
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

//BOTONES 
btnNext.addEventListener("click", ()=>{
    indice = (indice+1)%images.length;
    mostrarImagen(indice);
})

btnPrev.addEventListener("click", ()=>{
    indice = (indice-1 + images.length)%images.length;
    mostrarImagen(indice);
})

//PASAR AUTOMÁTICAMENTE LAS IMÁGENES
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
