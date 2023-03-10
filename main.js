//Feria Hemana - Tercera pre entrega

//Creacion de tarjetas de productos

class Producto {
  constructor(nombre, precio, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}

const campera = new Producto("Campera", 3000, "./asset/campera.jpeg");
const buzo = new Producto("Buzo", 2500, "./asset/buzo.jpeg");
const borcegos = new Producto("Borcegos", 7000, "./asset/borcegos.jpeg");
const pantalon = new Producto("Pantalon", 1500, "./asset/pantalon.jpeg");

const arrayProductos = [campera, buzo, borcegos, pantalon];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach((producto) => {
  const div = document.createElement("div");
  div.className = "tarjeta";
  div.innerHTML = `<p>Nombre: ${producto.nombre}</p>
  <p>Precio ${producto.precio}</p>
  <img class= 'producto 'src=' ${producto.img}'>
  <button>Agregar al carrito</button>`;
  contenedorProductos.appendChild(div);
});
