/* Slider */

const slider            = document.querySelector("#slider");
const btnLeft           = document.querySelector(".slider__btn-left");
const btnRight          = document.querySelector(".slider__btn-right");
var sliderSection       = document.querySelectorAll(".slider__section");
var sliderSectionLast   = sliderSection[sliderSection.length - 1];
var imagenActual        = 1;
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function proximaImagen(velocidad) {
    var sliderSection       = document.querySelectorAll(".slider__section");
    var sliderSectionFirst  = sliderSection[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = `all ${velocidad}ms`;

    setTimeout(()=>{
        slider.style.transition = "none"
        slider.style.marginLeft = "-100%";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    }, velocidad);

    switch (imagenActual) {
        case 1:
            imagenActual++;
            break;
        case 2:
            imagenActual++;
            break;
        case 3:
            imagenActual++;
            break;
        case 4:
            imagenActual = 1;
            break;
    }
    return imagenActual;
}

function anteriorImagen(velocidad) {
    var sliderSection       = document.querySelectorAll(".slider__section");
    var sliderSectionLast   = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = `all ${velocidad}ms`;

    setTimeout(()=>{
        slider.style.transition = "none";
        slider.style.marginLeft = "-100%";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    }, velocidad);

    switch (imagenActual) {
        case 1:
            imagenActual = 4;
            break;
        case 2:
            imagenActual--;
            break;
        case 3:
            imagenActual--;
            break;
        case 4:
            imagenActual--;
            break;
    }
}

btnRight.addEventListener("click", () => {
    proximaImagenEspera(1000, 1000);
});
btnLeft.addEventListener("click", () => {
    anteriorImagenEspera(1000, 1000);
});

/* Tiempo de espera */

let ultimoClic = 0;

function proximaImagenEspera(velocidad, espera) {
  const ahora = Date.now();
  if (ahora - ultimoClic > espera) {
    proximaImagen(velocidad);
    ultimoClic = ahora;
  }   
}

function anteriorImagenEspera(velocidad, espera) {
    const ahora = Date.now();
    if (ahora - ultimoClic > espera) {
      anteriorImagen(velocidad);
      ultimoClic = ahora;
    }
}

/* Auto Slider */

var imagen = document.querySelector(".container-slider");
var intervalID = setInterval( ()=> {
    proximaImagenEspera(2000, 1000)
}, 5000);
  

imagen.addEventListener('mouseover', () => {
    clearInterval(intervalID);
});

imagen.addEventListener('mouseout', () => {
    intervalID = setInterval( ()=> {
        proximaImagenEspera(2000, 1000)
    }, 5000);
});

/* Selector de imagen */

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

btn1.addEventListener("click", () => {
    if (imagenActual == 1) {
        
    }
    else if (imagenActual == 2) {
        btnLeft.click();
    } else if (imagenActual == 3) {
       
        proximaImagenEspera(300, 1000);

        setTimeout(()=>{
            proximaImagenEspera(300, 300);
        }, 350);
    } else {
        btnRight.click();
    }
});

btn2.addEventListener("click", () => {
    if (imagenActual == 1) {
        btnRight.click()
    }
    else if (imagenActual == 2) {
        // pass
    } else if (imagenActual == 3) {
        btnLeft.click();
    } else {
        proximaImagenEspera(300, 1000);
        setTimeout(()=>{
            proximaImagenEspera(300, 300);
        }, 350);
    }
});

btn3.addEventListener("click", () => {
    if (imagenActual == 1) {
        proximaImagenEspera(300, 1000);
        setTimeout(()=>{
            proximaImagenEspera(300, 300);
        }, 350);
    }
    else if (imagenActual == 2) {
        btnRight.click();
    } else if (imagenActual == 3) {
        // pass
    } else {
       btnLeft.click();
    }
});

btn4.addEventListener("click", () => {
    if (imagenActual == 1) {
        btnLeft.click();
    }
    else if (imagenActual == 2) {
        proximaImagenEspera(300, 1000);
        setTimeout(()=>{
            proximaImagenEspera(300, 300);
        }, 350);
    } else if (imagenActual == 3) {
        btnRight.click();
    } else {
        // pass
    }
});

/* *Agrandar flechas */

const botonSliderIzquierda = document.querySelector(".slider__btn-left");
const botonSliderDerecha   = document.querySelector(".slider__btn-right");

botonSliderIzquierda.addEventListener('mouseover', () => {
    botonSliderIzquierda.style.transform ="scale(1.25)";
});

botonSliderIzquierda.addEventListener('mouseout', () => {
    botonSliderIzquierda.style.transform = "";
});

botonSliderDerecha.addEventListener('mouseover', () => {
    botonSliderDerecha.style.transform ="scale(1.25)";
});


botonSliderDerecha.addEventListener('mouseout', () =>  {
    botonSliderDerecha.style.transform = "";
});