let iconos = {
    gamepad:'<i class="fa-solid fa-gamepad"></i>'
}

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

    contenedorINFO.classList.add("contenedorINFO");

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
        botonDescarga.textContent  = "More information";
        botonDescarga.href = "info-aplicacion.html";
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

crearApp(0, "Elsify", "374.657", "WORKING", "imagenes/card2.webp", "Imagen carta1", 1,);
crearApp(0, "App2", "215.839", "NOT WORKING", "imagenes/hero.jpg", "Imagen carta2", 2,);
crearApp(0, "App3", "142.467", "WORKING", "imagenes/juego1.jpg", "Imagen carta3", 3,);

crearApp(1, "Delusion", "374.657", "WORKING", "imagenes/card2.webp", "Imagen carta1", 1,); // Delusion  color normal
crearApp(1, "Notir+", "215.839", "Desarrollando", "imagenes/hero.jpg", "Imagen carta2", 2,);
crearApp(1, "SOON", "142.467", "WORKING", "imagenes/juego1.jpg", "Imagen carta3", 3,); // PROXIMAMENTE color rosa claro



function seccion1(titulo,textBotonStarted) {
    let divTitulo = document.createElement("h1");
    let divStarted = document.createElement("a");
    let DCimage = document.createElement("a");
    let botonDC = document.createElement("img");


    divTitulo.innerHTML = titulo 
    divStarted.innerHTML = textBotonStarted
    divStarted.href = "./login.html"
    DCimage.href = "https://discord.gg/nWy4TtsSgu"
    botonDC.src = "imagenes/botonDC.png"
    
    tituloS1.appendChild(divTitulo)
    boton1.appendChild(divStarted)
    //boton2.appendChild(DCimage) Momentaniamente 
    DCimage.appendChild(botonDC)
}

seccion1('Your Nr. 1 <span class="texto-degradado">Mods Repository</span>', "GET STARTED <i class='fa-solid fa-arrow-up-right-from-square'></i>")


// Aplicaciones de tendencia
function aplicacionesTendencia(titulo, hrefBoton, textoBoton) { 
    let ETitulo = document.getElementsByClassName("titulo-aplicaciones-tendencia")[0];
    let EBoton = document.getElementsByClassName("ver-aplicaciones")[0];
    // Agregando contenido a elementos
    ETitulo.innerHTML = titulo;
    EBoton.innerHTML = textoBoton;
    EBoton.href = hrefBoton;
}

aplicacionesTendencia("TREDING <span class='texto-degradado'>APLICATIONS</span>", "productos.html", "View Aplications <i class='fa-solid fa-arrow-up-right-from-square'>");




function contenidoJustificacion () {
    // Titulo 
    let tituloJustificacion = document.createElement("h2");
    tituloJustificacion.classList.add("tituloJustificacion");
            
    tituloJustificacion.innerHTML = '<span class="texto-degradado">Norti Mods?</span>'
    let contenido1 = document.getElementsByClassName("contenido1")[0];
    let contenido2 = document.getElementsByClassName("contenido2")[0];
    let contenido3 = document.getElementsByClassName("contenido3")[0];
    
    
    if (contenido1.innerHTML.trim() === "") {
        contenido1.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus suscipit praesentium blanditiis unde, eveniet recusandae eligendi repudiandae! Optio molestiae pariatur error incidunt illum architecto quia ipsum doloremque velit nobis!"
        contenido2.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus suscipit praesentium blanditiis unde, eveniet recusandae eligendi repudiandae! Optio molestiae pariatur error incidunt illum architecto quia ipsum doloremque velit nobis!"
        contenido3.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus suscipit praesentium blanditiis unde, eveniet recusandae eligendi repudiandae! Optio molestiae pariatur error incidunt illum architecto quia ipsum doloremque velit nobis!"
        console.log("El elemento <p> está vacío.");
    } else {
        console.log("El elemento <p> tiene contenido.");
    }

}

contenidoJustificacion()

function equipo (nombreI, imagenI) {
    let contenedorEquipo = document.getElementsByClassName("equipo")[0];
    let contenedorIntegrante = document.createElement("artcle");
    let contenedorImagen = document.createElement("div");

    let imagen = document.createElement("img")
    let nombre = document.createElement("h3");

    imagen.src= imagenI;
    imagen.alt = "Imagen de intefrante";

    nombre.innerHTML = nombreI;


    contenedorIntegrante.classList.add("contenedor-integrante");
    imagen.classList.add("imagenEquipo");
    contenedorImagen.classList.add("contenedorImagen");
    nombre.classList.add("nombreEquipo");

    contenedorImagen.appendChild(imagen);
    contenedorIntegrante.appendChild(contenedorImagen);
    contenedorIntegrante.appendChild(nombre);

    contenedorEquipo.appendChild(contenedorIntegrante);
};

equipo("NORIs", "imagenes/card1.jpg");
equipo(`Manuel ${iconos.gamepad}`, "imagenes/logo.png");
equipo("Alexander", "imagenes/logo.png");
const temaButton = document.querySelector('.tema');

let currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme);

temaButton.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);

    
    if (currentTheme === 'dark') {
        temaButton.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Ícono de sol para modo oscuro
    } else {
        temaButton.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Ícono de luna para modo claro
    }


    localStorage.setItem('theme', currentTheme);
});
