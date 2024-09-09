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

    


    // Creamos todo el contenido
    let contenedorIMG1 = document.createElement("div"); // agregar img por cada aplicacion
    let contenedorIMG2 = document.createElement("div"); // agregar img por cada aplicacion
    let contenedorIMG3 = document.createElement("div"); // agregar img por cada aplicacion

    let appImagen1 = document.createElement("img");
    let appImagen2 = document.createElement("img");
    let appImagen3 = document.createElement("img");

    let contenedorINFO1 = document.createElement("div");
    let contenedorINFO2 = document.createElement("div");
    let contenedorINFO3 = document.createElement("div");

    let botonINFO1 = document.createElement("a");
    let botonINFO2 = document.createElement("a");
    let botonINFO3 = document.createElement("a");


    // Asignamos clases
    contenedorIMG1.classList.add("contenedorIMG1")
    contenedorIMG2.classList.add("contenedorIMG2")
    contenedorIMG3.classList.add("contenedorIMG3")

    appImagen1.classList.add("appImg1");
    appImagen2.classList.add("appImg2");
    appImagen3.classList.add("appImg3");

    contenedorINFO1.classList.add("contenedorINFO1");
    contenedorINFO2.classList.add("contenedorINFO2");
    contenedorINFO3.classList.add("contenedorINFO3");

    // Agregamos el contenido a los contenedores de las cartas 
    appImagen1.src = "../imagenes2/card2.webp"
    appImagen1.alt = "Imagen carta1"
    appImagen2.src = "../imagenes2/card1.jpg"
    appImagen2.alt = "Imagen carta2"
    appImagen3.src = "../imagenes2/juego1.jpg"
    appImagen3.alt = "Imagen carta3"
    
    contenedorIMG1.appendChild(appImagen1);
    contenedorIMG2.appendChild(appImagen2);
    contenedorIMG3.appendChild(appImagen3);

    // Agregamos hijos a contenedor card1
    card1.appendChild(contenedorIMG1);
    card1.appendChild(contenedorINFO1);
    card1.appendChild(botonINFO1);
    // Agregamos hijos a contenedor card2
    card2.appendChild(contenedorIMG2);
    card2.appendChild(appImagen2);
    card2.appendChild(contenedorINFO2);
    card2.appendChild(botonINFO2);
    // Agregamos hijos a contenedor card1
    card3.appendChild(contenedorIMG3);
    card3.appendChild(appImagen3);
    card3.appendChild(contenedorINFO3);
    card3.appendChild(botonINFO3);

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
    botonDC.src = "imagenes2/botonDC.png"

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



