/* ***************** MENU DESPLEGABLE ************************** */

const botonMenu       = document.querySelector("#boton-menu");
const menuDesplegable = document.querySelector("#menu-desplegable");

var menuEstaAbierto = false;

botonMenu.addEventListener("click", () => {
    menuEstaAbierto = usarMenu(menuEstaAbierto)
});

function usarMenu(menuEstaAbierto) {
    console.log(menuEstaAbierto);
    if (menuEstaAbierto) {
        menuDesplegable.style.left = "-80em";
        menuDesplegable.style.opacity = "0";
    } else {
        menuDesplegable.style.left = "0em";
        menuDesplegable.style.opacity = "1";
    }
    menuEstaAbierto = !menuEstaAbierto;
    console.log(menuEstaAbierto);
    return menuEstaAbierto;
}



/* ***************** FOOTER ************************** */

// El ícono de Whatsapp es un caso especial porque éste tiene fondo transparente, par lo que las transformaciones
// al logo también deben aplicarse a su background blanco

var whatsappLogo = document.querySelector("#whatsapp");
var whatsappBack = document.querySelector(".whatsapp-container");

whatsappLogo.addEventListener("mouseover", () => {    
    whatsappBack.style.transform = "scale(1.09) translateY(-0.4em)";
    whatsappLogo.style.transform = "translateY(0em)" 
});

whatsappLogo.addEventListener("mouseout", () => {
    whatsappBack.style.transform = "scale(1)"
});

/* *************************** ******************************* */