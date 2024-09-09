let aAplications = document.getElementsByClassName("aAplications")[0];
let aStore = document.getElementsByClassName("aStore")[0];
let aFAQ= document.getElementsByClassName("aFAQ")[0];
let aGetStarted = document.getElementsByClassName("aGetStarted")[0];

// Obtenemos clases de los divs de la seccion 1
let tituloS1 = document.getElementsByClassName("titulo")[0]
let parrafoS1 = document.getElementsByClassName("parrafo")[0]
let boton1 = document.getElementsByClassName("boton1")[0]
let boton2 = document.getElementsByClassName("boton2")[0]

// Obtenemos el contenedor de las aplicaciones
let divCartas = document.getElementsByClassName("cartas")[0]

function crearApp() {
    // Obtenemos el contenedor donde se crearan las aplicaciones
    let card1 = document.getElementsByClassName("card1")[0];
    let card2 = document.getElementsByClassName("card2")[0];
    let card3 = document.getElementsByClassName("card3")[0];

    // Creamos el contenedor de la imagen
    let appIMG = document.createElement("div");






    let imagenAPP = document.createElement("img");
    // Creamos el contenedor de informacion
    let divINFO = document.createElement("div")
    // Creamos el ancla de informacion
    let aINFO = document.createElement("a")

    // Agregamos contenido
<<<<<<< HEAD
    imagenAPP.src = "./imagenes2/card1.jpg"
=======
    imagenAPP.src = "../../imagenes2/card1.jpg"
>>>>>>> 2fedb879e92935681e3bc68d18230c0ae62342f1
    aINFO.textContent = "Mas informacion";
    aINFO.href = "# "

}

crearApp()


function seccion1(titulo, parrafo, textBotonStarted) {
    let divTitulo = document.createElement("h1");
    let divParrafo = document.createElement("p");
    let divStarted = document.createElement("a");
    let botonDC = document.createElement("img");


    divTitulo.innerHTML = titulo 
    divParrafo.textContent = parrafo
    divStarted.textContent = textBotonStarted
    divStarted.href = "#"
<<<<<<< HEAD
    botonDC.src = "./imagenes2/botonDC.png"
=======
    botonDC.src = "../../imagenes2/botonDC.png"
>>>>>>> 2fedb879e92935681e3bc68d18230c0ae62342f1

    tituloS1.appendChild(divTitulo)
    parrafoS1.appendChild(divParrafo)
    boton1.appendChild(divStarted)
    boton2.appendChild(botonDC)
}

seccion1("Your Nr. 1 Mods Repository", "Explore, download, and enjoy a seamless modding journey tailored to your desires!", "GET STARTED ↗")

function opciones(opcion1, href1, opcion2, href2, opcion3, href3, opcion4, href4){
    aAplications.textContent = opcion1
    aAplications.href = href1
    aStore.textContent = opcion2
    aStore.href = href2
    aFAQ.textContent = opcion3
    aFAQ.href = href3
    aGetStarted.textContent = opcion4
    aGetStarted.href = href4

}


opciones("Aplications", "https://www.frostchanger.de/applications" ,  "Store","https://www.frostchanger.de/store", "FAQ", "https://www.frostchanger.de/#uni_faq" , "Get Started", "http://127.0.0.1:5500/index.html#")



