
// Scripts

window.addEventListener('DOMContentLoaded', event => {

    // CAMBIO: mantengo la función de la plantilla para el menú
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');

        if (!navbarCollapsible) {
            return;
        }

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // CAMBIO: ejecuto la función al cargar la página
    navbarShrink();

    // CAMBIO: mantengo el efecto al hacer scroll
    document.addEventListener('scroll', navbarShrink);

    // CAMBIO: esta parte viene de la plantilla Bootstrap.
    const mainNav = document.body.querySelector('#mainNav');

    if (mainNav && typeof bootstrap !== "undefined") {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // CAMBIO: cierro el menú responsive si existe.
    // En mi diseño no siempre aparece, por eso compruebo antes si existe.
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// CAMBIO: añado mi propia función para abrir el modal de las obras.
// Esta parte no estaba en la plantilla original.
function abrirModal(imagen, titulo, descripcion){
    document.getElementById("modal-obras").style.display = "block";
    document.getElementById("imagen-grande").src = imagen;
    document.getElementById("titulo-modal").innerText = titulo;
    document.getElementById("descripcion-modal").innerText = descripcion;
}


// CAMBIO: añado función para cerrar el modal al pulsar la X.
function cerrarModal(){
    document.getElementById("modal-obras").style.display = "none";
}


// CAMBIO: añado cierre del modal al pulsar fuera de la caja blanca.
window.onclick = function(event){
    var modal = document.getElementById("modal-obras");

    if(event.target == modal){
        modal.style.display = "none";
    }
}