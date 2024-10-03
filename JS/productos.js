function crearProducto(imagen, nombre, juego,  descripcion,precio ,bootntexto, urlProducto) {
    let contenedorPadre = document.getElementsByClassName("productos") [0];
    let contenedorProducto = document.createElement("article");
    let imagenProducto = document.createElement("img");
    let nombreProducto = document.createElement("h3");
    let juegoDelProducto = document.createElement("h4");
    let descripcionProducto = document.createElement("p");
    let precioProducto = document.createElement("span");
    let botonnProducto = document.createElement("a");

    
    
    contenedorProducto.classList.add("contenedorProducto");
    imagenProducto.classList.add("imagenProducto");
    nombreProducto.classList.add("nombreProducto");
    juegoDelProducto.classList.add("juegoProducto");
    descripcionProducto.classList.add("descripcionProducto");
    precioProducto.classList.add("precioProducto");
    botonnProducto.classList.add("botonProducto");

    imagenProducto.src = imagen;
    imagenProducto.alt = "Imagen del producto";
    nombreProducto.textContent = nombre;
    juegoDelProducto.textContent = juego;
    descripcionProducto.textContent = descripcion;
    precioProducto.textContent = precio
    botonnProducto.textContent = bootntexto;
    botonnProducto.href = urlProducto;

    contenedorProducto.appendChild(imagenProducto);
    contenedorProducto.appendChild(nombreProducto);
    contenedorProducto.appendChild(juegoDelProducto);
    contenedorProducto.appendChild(descripcionProducto);
    contenedorProducto.appendChild(precioProducto);
    contenedorProducto.appendChild(botonnProducto);

    contenedorPadre.appendChild(contenedorProducto);

}

crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card1.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card2.webp", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/hero.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card1.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card2.webp", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/hero.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card1.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card2.webp", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/hero.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card1.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card2.webp", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/hero.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card1.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card2.webp", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/hero.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card1.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/card2.webp", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/hero.jpg", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
crearProducto("imagenes/logo.png", "Minecraft Mod", "Minecraft", "Es un juego tal tal tla lkj fñlk jdaskkdj asñldk jasñlkdj ñaslkdj", "$ 1000", "Mas imformacion", "https://youtube.com");
