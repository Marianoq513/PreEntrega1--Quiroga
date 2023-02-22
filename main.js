//Feria Hemana - Segunda pre entrega

//Clases

class Cliente {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellidp = apellido;
  }
}

class Productos {
  constructor(marca, precio) {
    this.marca = marca;
    this.precio = precio;
  }
}
const arrayClientes = [];
const carrito = [];
const productos = [];
let suma = 0;

//Funciones

function crearUsuario() {
  let nombre = prompt("ingrese nombre del cliente");
  let apellido = prompt("ingrese apellido del cliente");
  let cliente = new Cliente(nombre, apellido);
  arrayClientes.push(cliente);
  console.log(arrayClientes);
}

function menu() {
  let opcion = parseInt(
    prompt(
      "Ingrese una de las siguientes opciones \n 1)Elejir productos \n 2)Ver carrito \n 3)Ver total \n 4)Salir"
    )
  );
  return opcion;
}

//Funcion Elejir productos

//ELEJIR REMERA
function elejirProductos() {
  let remera = parseInt(
    prompt(
      "Ingresa una de las siguientes opciones \n 1)Remera Nike $8.000 \n 2)Remera Adidas $6.000 \n 3)Remera Puma $4.000 \n En caso de no querer ninguna digite cualquier tecla"
    )
  );

  switch (remera) {
    case 1:
      marca = "Remera nike";
      precio = 8000;
      let remeraNike = new Productos(marca, precio);
      carrito.push(remeraNike.precio);
      productos.push(remeraNike.marca);
      break;
    case 2:
      marca = "Remera Adidas";
      precio = 6000;
      let remeraAdidas = new Productos(marca, precio);
      carrito.push(remeraAdidas.precio);
      productos.push(remeraAdidas.marca);
      break;
    case 3:
      marca = "Remera Puma";
      precio = 4000;
      let remeraPuma = new Productos(marca, precio);
      carrito.push(remeraPuma.precio);
      productos.push(remeraPuma.marca);
      break;
    default:
      break;
  }

  //ELEJIR REMERA

  let pantalon = parseInt(
    prompt(
      "Ingresa una de las siguientes opciones \n 1)Pantalon Nike $15.000 \n 2)Pantalon Adidas $10.000 \n 3)Pantalon Puma $9.000 \n En caso de no querer ninguna digite cualquier tecla"
    )
  );

  switch (pantalon) {
    case 1:
      marca = "Pantalon nike";
      precio = 15000;
      let pantalonNike = new Productos(marca, precio);
      carrito.push(pantalonNike.precio);
      productos.push(pantalonNike.marca);
      break;
    case 2:
      marca = "Pantalon Adidas";
      precio = 10000;
      let pantalonAdidas = new Productos(marca, precio);
      carrito.push(pantalonAdidas.precio);
      productos.push(pantalonAdidas.marca);
      break;
    case 3:
      marca = "Pantalon Puma";
      precio = 9000;
      let pantalonPuma = new Productos(marca, precio);
      carrito.push(pantalonPuma.precio);
      productos.push(pantalonPuma.marca);
      break;
    default:
      break;
  }
}

//Fucion 2 ver carrito

function verProductos() {
  alert(productos);
}

//Funcion 3 Ver total

function total() {
  let totalCompra = carrito.reduce((a, b) => a + b, 0);

  alert("El total de su compra es de: " + totalCompra);
}

//Funcion 4 salir

function salir() {
  alert("Gracias, vuelva pronto");
}

//Ejecucion del programa

let opcion = menu();
while (opcion != 4) {
  switch (opcion) {
    case 1:
      elejirProductos();
      break;
    case 2:
      verProductos();
      break;
    case 3:
      total();
      break;
    case 4:
      salir();
    default:
      alert("Numero incorrecto");
      break;
  }
  opcion = menu();
}
