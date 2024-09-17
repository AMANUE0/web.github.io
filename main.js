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

function crearApp(indiceCLase,nombrec, descargasc, estadoc, imgSrc, imgAlt, cardNumber, link) {
    // Obtenemos el contenedor de la aplicación correspondiente (card1, card2 o card3)
    let card = document.getElementsByClassName(`card${cardNumber}`)[indiceCLase];

    // Creamos todo el contenido
    let contenedorIMG = document.createElement("div"); 
    let appImagen = document.createElement("img");
    let contenedorINFO = document.createElement("div");

    // Información que queremos mostrar
    let informacion = {
        nombre: nombrec,
        descargas: descargasc,
        estado: estadoc
    }

    // Función para añadir información a la tarjeta
    function informaciondeApps(contenedorINFO, info) {
        let nombre = document.createElement("h3");
        nombre.classList.add("nombre")
        nombre.innerHTML = `${info.nombre}   <span class="descargas"><span>&#128229;</span> ${info.descargas}</span>`;

        
        let estado = document.createElement("p");
        estado.innerHTML = `STATUS <span style="color: ${info.estado === 'WORKING' ? 'green' : 'red'}">${info.estado}</span>`;

        let botonDescarga = document.createElement("a");
        botonDescarga.classList.add("masInfo")
        botonDescarga.textContent  = "Mas informacion";
        botonDescarga.classList.add("botonDescarga");

        contenedorINFO.appendChild(nombre);
        contenedorINFO.appendChild(estado);
        contenedorINFO.appendChild(botonDescarga);
    }

    // Asignamos clases
    contenedorIMG.classList.add(`contenedorIMG${cardNumber}`);
    appImagen.classList.add(`appImg${cardNumber}`);
    contenedorINFO.classList.add(`contenedorINFO${cardNumber}`);

    // Agregamos la imagen
    appImagen.src = imgSrc;
    appImagen.alt = imgAlt;

    contenedorIMG.appendChild(appImagen);

    // Llenamos la información para el contenedor
    informaciondeApps(contenedorINFO, informacion);

    // Agregamos hijos al contenedor correspondiente
    card.appendChild(contenedorIMG);
    card.appendChild(contenedorINFO);
}

// Llamadas para cada aplicación con información diferente
crearApp(0, "Elsify", "374.657", "WORKING", "imagenes2/card2.webp", "Imagen carta1", 1,);
crearApp(0, "App2", "215.839", "NOT WORKING", "imagenes2/card1.jpg", "Imagen carta2", 2,);
crearApp(0, "App3", "142.467", "WORKING", "imagenes2/juego1.jpg", "Imagen carta3", 3,);

crearApp(1, "Elsify", "374.657", "WORKING", "imagenes2/card2.webp", "Imagen carta1", 1,);
crearApp(1, "App2", "215.839", "NOT WORKING", "imagenes2/card1.jpg", "Imagen carta2", 2,);
crearApp(1, "App3", "142.467", "WORKING", "imagenes2/juego1.jpg", "Imagen carta3", 3,);



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

seccion1('Your Nr. 1 <span class="texto-degradado">Mods Repository</span>', "Explore, download, and enjoy a seamless modding journey tailored to your desires!", "GET STARTED ↗")

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

function contenidoJustificacion () {
    let contenido1 = document.getElementsByClassName("contenido1")[0];
    let contenido2 = document.getElementsByClassName("contenido2")[0];
    let contenido3 = document.getElementsByClassName("contenido3")[0];
    
    
    if (contenido1.innerHTML.trim() === "") {
        contenido2.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus suscipit praesentium blanditiis unde, eveniet recusandae eligendi repudiandae! Optio molestiae pariatur error incidunt illum architecto quia ipsum doloremque velit nobis!"
        console.log("El elemento <p> está vacío.");
    } else {
        console.log("El elemento <p> tiene contenido.");
    }

}

contenidoJustificacion()

function creandoDivicion() {
    let divicion = document.getElementsByClassName("divicion");
    // Creando Elementos para la divicion
    /*let iconoCentro = document.createElement("div");
    let izquierda = document.createElement("div");
    let derecha = document.createElement("div");
    // Asignando Clases
    

    divicion.appendChild(iconoCentro);
    divicion.appendChild(izquierda);
    divicion.appendChild(derecha);*/
    
    
}