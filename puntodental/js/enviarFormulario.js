//'use strict' //you can not, for example, use undeclared variables.
const patronCorreo = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
const patronTelefono = new RegExp('[0-9]{3,4}(-)?[0-9]{7}')

const enviarFormulario = (losCampos) =>{
    const form = document.getElementById('elFormulario')
    const responseDiv = document.getElementById('respuesta')
    let mensaje = "El mensaje no fue enviado, por favor envíenos su solicitud por correo o teléfono."
    
    let form_validar = () => {
        let validos = 0,elCampo,elContenido,checkPatron,laLongitud,esteEsValido,elInput,laClase
        for(let i=0;i<losCampos.length;i++){
            // elInput.classList.add('navbarsticky')
            elCampo = losCampos[i]
            elInput = document.getElementById(elCampo.id)
            elContenido = elInput.value
            laLongitud = elContenido.length
            esteEsValido = false
            if(!elCampo.requerido && elContenido == undefined){
                validos++
                esteEsValido = true
            }else if(elCampo.requerido){
                checkPatron = elCampo.patron?elCampo.patron.test(elContenido):true
                if(checkPatron && laLongitud >= elCampo.min && laLongitud <= elCampo.max){
                    validos++
                    esteEsValido = true
                }
            }
            elInput.classList.remove('is-valid')
            elInput.classList.remove('is-invalid')
            laClase = esteEsValido?'is-valid':'is-invalid'
            elInput.classList.add(laClase)
        }
        let resultado = validos == losCampos.length?true:false
        return resultado
    }
    let mostrarResultado = () => {
        form.classList.add('d-none')
        responseDiv.innerHTML = mensaje
    }
    form.addEventListener('submit', function(event) {
        event.preventDefault() // Prevent the form from submitting normally
        // event.stopPropagation()
    
        // Create a FormData object from the form
        const formData = new FormData(form)
    
        // Create an XMLHttpRequest object
        const xhr = new XMLHttpRequest()
    
        // Configure the request
        xhr.open('POST', 'http://localhost/bootstrapTemplates/_000php/contacto.php', true)
    
        // Set up a callback function to handle the response
        
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Success: Display the response
                const enviado = parseInt(xhr.responseText)
                if(enviado){
                    mensaje = "Mensaje enviado!"
                }
            }
            mostrarResultado()
        }
    
        // Handle network errors
        xhr.onerror = function() {mostrarResultado()}
        if(form_validar()){xhr.send(formData)}        
    })

}
