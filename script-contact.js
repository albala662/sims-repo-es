document.addEventListener("DOMContentLoaded",()=>{
    let submenu = document.querySelectorAll(".submenu");

    submenu.forEach(submenu =>{
        submenu.addEventListener("mouseenter",()=>{
            lista.style.display = "block";
        });
        submenu.addEventListener("mouseleave",()=>{
            lista.style.display = "none";
        })
    })
})
document.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector("form");
    let nombre = document.querySelector("#nombre");
    let correoInput=document.querySelector("#correo");
    let mensajeInput=document.querySelector("#mensaje");

    let enlacesRedes = document.querySelectorAll("section p a");

    function validarFormulario(event){
        event.preventDefault();

        let errorMessages=[];

        if(nombreInput.value.trim()===""){
            errorMessages.push("No se puede dejar este campo en blanco")
        }

        let emailRegex=/^[a-aA-Z0-9._-]+@[a-zA-Z]{2,6}$/;
        if(!emailRegex.test(correoInput.value.trim())){
            errorMessages.push("Por favor, ingrese una dirección de correo válida");
        }
        if(mensajeInput.value.trim()===""){
            errorMessages.push("No se puede dejar este campo en blanco");
        }
        
        if (errorMessages.length>0){
            alert("No se ha podido enviar el formulario.")
        } else{
            alert("¡Gracias por su mensaje! Le contactaremos con cualquier actualización sobre lo tratado en el mensaje");
            form.reset();
        }
    }
    form.addEventListener("submit",validarFormulario);

    enlacesRedes.forEach(enlace=>{
        enlace.addEventListener("click",function(event){
            event.preventDefault();
            let targetId = enlace.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);
            if(targetElement){
                targetElement.scrollIntoView({
                    behavior: "smooth";
                })
            }
        })
    })
})