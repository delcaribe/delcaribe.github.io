'use strict' //you can not, for example, use undeclared variables.
let losCampos = [
    {id:'nombre',patron:false,min:3,max:20,requerido:true},
    {id:'correo',patron:patronCorreo,min:8,max:50,requerido:true},
    {id:'telefono',patron:patronTelefono,min:11,max:13,requerido:true},
    {id:'mensaje',patron:false,min:10,max:500,requerido:true},
]
// document.addEventListener('DOMContentLoaded', enviarFormulario(losCampos))
// document.addEventListener('DOMContentLoaded', function(){
//     console.log('cargado')
// })
function isElementScrolledOut(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Completely above or below the viewport
    return rect.bottom < 0 || rect.top > windowHeight;
  }

document.addEventListener('DOMContentLoaded', function() {
    // const navbar = document.querySelector('.navbar');
    // const miniContact = document.getElementById('miniContact');
    // const originalOffset = navbar.offsetTop;
    const backTop = document.getElementById('back-top')
    const triggerElement = document.getElementById('slider')
    // const miElemento = document.getElementById('nosotros');
    // miElemento.scrollIntoView(true);
    
    window.addEventListener('scroll', function() {
        // console.log(window.scrollX)
        // let alturaElementoUno = miniContact.offsetHeight;
        /*
        if (window.pageYOffset > originalOffset) {
            // navbar.style = 'position:fixed;top:'+alturaElementoUno + 'px'
            // navbar.classList.add('fixed-top', 'fixed-nav');
            // miniContact.classList.add('fixed-top');
        } else {
            // navbar.style = ''
            // navbar.classList.remove('fixed-top', 'fixed-nav');
            // miniContact.classList.remove('fixed-top');
        }
            */
        // if(window.pageYOffset > 350){
        if(isElementScrolledOut(triggerElement)){
            backTop.classList.remove('d-none');
        }else{
            backTop.classList.add('d-none');
        }
    });
});