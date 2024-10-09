function crearProducto(imagen, nombre, juego, descripcion, precio , urlProducto) {
    let contenedorPadre = document.getElementsByClassName("productos") [0];
    let contenedorProducto = document.createElement("a");
    let imagenProducto = document.createElement("img");
    let contenedorNombre_precio = document.createElement("div");
    let nombreProducto = document.createElement("h3");
    let juegoDelProducto = document.createElement("h4");
    let descripcionProducto = document.createElement("p");
    let precioProducto = document.createElement("span");

    
    
    contenedorProducto.classList.add("contenedorProducto");
    imagenProducto.classList.add("imagenProducto");
    nombreProducto.classList.add("nombreProducto");
    juegoDelProducto.classList.add("juegoProducto");
    descripcionProducto.classList.add("descripcionProducto");
    precioProducto.classList.add("precioProducto");
    contenedorNombre_precio.classList.add("contenedorNombre_precio");

    imagenProducto.src = imagen;
    imagenProducto.alt = "Imagen del producto";
    nombreProducto.textContent = nombre;
    juegoDelProducto.textContent = juego;
    descripcionProducto.textContent = descripcion;
    precioProducto.textContent = precio
    contenedorProducto.href = urlProducto;
    
    contenedorNombre_precio.appendChild(nombreProducto);
    contenedorNombre_precio.appendChild(precioProducto);
    contenedorProducto.appendChild(imagenProducto);
    contenedorProducto.appendChild(contenedorNombre_precio);
    contenedorProducto.appendChild(juegoDelProducto);
    contenedorProducto.appendChild(descripcionProducto);

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
