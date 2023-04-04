//Creacion de tarjetas de productos
class Productos {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
  }
}
const campera = new Productos(1, "Campera", 3000, "./asset/campera.jpeg");
const buzo = new Productos(2, "Buzos", 2500, "./asset/buzo.jpeg");
const borcegos = new Productos(3, "Borcegos", 7000, "./asset/borcegos.jpeg");
const pantalon = new Productos(4, "Pantalon", 1500, "./asset/pantalon.jpeg");
const remera = new Productos(5, "Remera", 1500, "./asset/remera.jpg");
const jardinera = new Productos(6, "jardinera", 2000, "./asset/jardinera.jpg");
const chaleco = new Productos(7, "Chaleco", 2000, "./asset/chaleco.jpg");
const gorras = new Productos(8, "Gorras", 800, "./asset/gorras.jpg");
const medias = new Productos(9, "Medias", 650, "./asset/medias.jpg");

const productos = [
  campera,
  buzo,
  borcegos,
  pantalon,
  remera,
  jardinera,
  chaleco,
  gorras,
  medias,
];
let carrito = [];

//Cargar carrito desde el localStorage
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

//Función para mostrar productos
const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("tarjeta");
    card.innerHTML = `<div>
                            <div>
                                <h2>Nombre: ${producto.nombre}</h2>
                                <p> Precio $${producto.precio}</p>
                            </div>
                            <img src = '${producto.img}' class = 'imgProductos'>
                            <button id = 'boton${producto.id}'class ='btn botones agregadoAlCarrito'> Agregar al carrito</button>
                        </div>`;
    contenedorProductos.appendChild(card);

    //Agregar los productos al carrito

    const boton = document.getElementById(`boton${producto.id}`);

    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
};

mostrarProductos();

//Función para agregar al carrito
const agregarAlCarrito = (id) => {
  const productosEnCarrito = carrito.find((producto) => producto.id === id);
  if (productosEnCarrito) {
    productosEnCarrito.cantidad++;
  } else {
    const producto = productos.find((producto) => producto.id === id);
    carrito.push(producto);
  }
  calcularTotal();
  //Guardamos en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Función para ver el carrito
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
  mostrarCarrito();
});

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("tarjeta");
    card.innerHTML = `<div>
                            <div>
                                <h2>Nombre:${producto.nombre}</h2>
                                <p>Precio por unidad $${producto.precio}</p>
                                <p> Cantidad:${producto.cantidad}</p>
                            </div>
                            <img src = '${producto.img}' class = 'imgProductos'>
                            <button class ='btn botones' id ='eliminar${producto.id}'> Eliminar del carrito</button>
                        </div>`;
    contenedorCarrito.appendChild(card);

    //Eliminar productos
    const botonEliminar = document.getElementById(`eliminar${producto.id}`);
    botonEliminar.addEventListener("click", () => {
      eliminarDelCarrito(producto.id);
    });
  });
  calcularTotal();
};

//Función para eliminar productos del carrito
const eliminarDelCarrito = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  const indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
  mostrarCarrito();

  //Guardamos en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Función para vaciar el carrito
const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
  eliminarTodoElCarrito();
});

const eliminarTodoElCarrito = () => {
  carrito = [];
  mostrarCarrito();

  //Limpiar localStorage
  localStorage.clear();
};

//Mostrar un mensaje con el total de la compra

const totalCarro = document.getElementById("totalCarro");
const calcularTotal = () => {
  let totalCompra = 0;
  carrito.forEach((producto) => {
    totalCompra += producto.precio * producto.cantidad;
  });
  totalCarro.innerHTML = `${totalCompra}`;
};

//Boton para comprar

const botonCompra = document.getElementById("botonCompra");

botonCompra.addEventListener("click", () => {
  Swal.fire({
    title: "¿Quieres finalizar la compra?",
    confirmButtonText: "Aceptar",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: "Compra finalizada",
        icon: "success",
      });
    }
  });
});

//Alerta añadido al carrito

vaciarCarrito.addEventListener("click", () => {
  Toastify({
    text: "Carrito vaciado correctamente",
    duration: 1000,
  }).showToast();
});