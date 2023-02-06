alert(
  "Bienvenidos a feria hermana, si quieres comprar algo de ropa buena bonita y barata, crea tu usuario e ingresa"
);

//Crear usuario y contraseña
const usuarioAutorizado = prompt("crea tu nombre de usuario");
const passwordAutorizado = parseInt(
  prompt("crea tu contraseña, (solo numeros)")
);

let usuario = usuarioAutorizado;

let usuarioIngresado;
let passwordIngresado;

//Ciclo para ingresasr a la pagina
do {
  usuarioIngresado = prompt("Ingresa el usuario anteriormete creado");
  passwordIngresado = parseInt(
    prompt("Ingresa la contraseña anteriormente creada")
  );
} while (
  usuarioAutorizado != usuarioIngresado &&
  passwordAutorizado != passwordIngresado
);

//Saludo de bienvenida
alert("Bienvenido a Feria hermana " + usuario);

//Condicional para elijer los productos que va a comprar
let remera = prompt(
  "Que remera quieres comprar? Nike $8.000, Adidas $5.000, Puma $3.000 "
);
let precioRemera = 0;
if (remera == "nike") {
  precioRemera = 8000;
} else if (remera == "adidas") {
  precioRemera = 5000;
} else if (remera == "puma") {
  precioRemera = 3000;
}
let pantalon = prompt(
  "Que pantalon quieres comprar? Nike $12.000, Adidas $15.000, Puma $9.000 "
);
let precioPantalon = 0;
if (pantalon == "nike") {
  precioPantalon = 12000;
} else if (pantalon == "adidas") {
  precioPantalon = 15000;
} else if (pantalon == "puma") {
  precioPantalon = 9000;
}

//Función para calcular el total de la compra
let totalCompra = (remera, pantalon) => {
  return alert("El total de tu compra es de $" + (remera + pantalon));
};

//Llamado a la función
totalCompra(precioRemera, precioPantalon);
