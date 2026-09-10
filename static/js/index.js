const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const contactBtn = document.querySelector('.contactanos-car');
menuToggle.addEventListener('click',function(){
    navLinks.classList.toggle('abierto');
})


document.addEventListener('click',function(e){
    const clickDentroDelMenu=navLinks.contains(e.target);
    const clickEnBotonHamburguesa=menuToggle.contains(e.target);

    if(!clickDentroDelMenu && !clickEnBotonHamburguesa && navLinks.classList.contains('abierto')){
        navLinks.classList.remove('abierto');
    }
})