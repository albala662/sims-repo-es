document.addEventListener("DOMContentLoaded", ()=>{

////////////HAMBURGUESA////////////
const burguer = document.querySelector(".burguir");
const menu = document.querySelector(".menu");

if (burguer && menu){
    burguer.addEventListener("click",()=>{
        menu.classList.toggle("active");
        burguer.setAttribute("aria-expanded", menu.classList.contains("active"));
    });
}

//////////////CARRUSEL//////////////
const carruselCont = document.querySelector("main > div");
if (carruselCont) {
    const images = carruselCont.querySelectorAll("img");
    const btnPrev = carruselCont.querySelector(".prev");
    const btnNext = carruselCont.querySelector(".next");
    const puntitosCont = carruselCont.querySelector(".puntitos");

    let indice = 0;
    let intervalo;

    function mostrarImagen(index){
        const puntos = puntitosCont.querySelectorAll("span");
        puntos.forEach((p, i)=>p.classList.toggle("active", i === index));

        images.forEach((img, i)=> img.style.display = i === index ? "block" : "none");
    }

    // PUNTITOS
    images.forEach((img, i)=>{
        const punto = document.createElement("span");
        if(i===0) punto.classList.add("active");
        punto.addEventListener("click", ()=>{
            indice = i;
            mostrarImagen(indice);
        });
        puntitosCont.appendChild(punto);
    });

    // BOTONES
    btnNext?.addEventListener("click", ()=>{
        indice = (indice+1)%images.length;
        mostrarImagen(indice);
    });

    btnPrev?.addEventListener("click", ()=>{
        indice = (indice-1 + images.length)%images.length;
        mostrarImagen(indice);
    });

    // AUTO
    function carruselStart(){
        intervalo = setInterval(()=>{
            indice = (indice+1)%images.length;
            mostrarImagen(indice);
        }, 5000);
    }
    function carruselStop(){ clearInterval(intervalo); }

    carruselCont.addEventListener("mouseenter", carruselStop);
    carruselCont.addEventListener("mouseleave", carruselStart);

    mostrarImagen(indice);
    carruselStart();
}

///////////BÚSQUEDA//////////
const buscador = document.getElementById("buscador");
const secciones = document.querySelectorAll("main section");

if (buscador) {
    buscador.addEventListener("input", e =>{
        const texto = e.target.value.toLowerCase();
        secciones.forEach(sec =>{
            const titulo = sec.querySelector("h2").textContent.toLowerCase();
            sec.style.display = titulo.includes(texto) ? "block" : "none";
        });
    });
}

//////// SCROLL Y VOLVER ARRIBA /////////
const arriba = document.getElementById("up");
if (arriba) {
    window.addEventListener("scroll", ()=>{
        arriba.style.display = window.scrollY > 100 ? "flex" : "none";
    });

    arriba.addEventListener("click", ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

//////////////FORMULARIO///////////
const nombre= document.getElementById("nombre");
const correo= document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

if (nombre){
    nombre.addEventListener("input",()=>{
        nombre.style.borderColor = nombre.value.length < 3 ? "red" : "green";
    });
}

if (correo){
    correo.addEventListener("input",()=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        correo.style.borderColor = regex.test(correo.value) ? "green" : "red";
    });
}

//////////////ACCESIBILIDAD SUBMENÚ////////
document.querySelectorAll(".submenu > a").forEach(link=>{
    link.addEventListener("click", e =>{
        if(window.innerWidth <=768){
            e.preventDefault();
            const parent =link.parentElement;
            parent.classList.toggle("open");
            const expanded =parent.classList.contains("open");
            link.setAttribute("aria-expanded", expanded);
        }
    });
    link.addEventListener("keydown", e=>{
        if (e.key === "Enter"||e.key ===""){
            e.preventDefault();
            const parent = link.parentElement;
            parent.classList.toggle("open");
            const expanded = parent.classList.contains("open");
            link.setAttribute("aria-expanded", expanded);
        }
    })
});

////////////// ÚLTIMA ACTUALIZACIÓN ////////////
const fecha = new Date().toLocaleDateString("es-ES");
const upd = document.createElement("p");
upd.textContent = `Última actualización: ${fecha}`;
upd.classList.add("ultima-actualizacion");
document.querySelector("main").prepend(upd);

});