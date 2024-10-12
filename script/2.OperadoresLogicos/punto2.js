let numeroIngresado = prompt("Ingrese un número:");


numeroIngresado = parseInt(numeroIngresado);


if (numeroIngresado % 2 === 0) {
    console.log("El número " + numeroIngresado + " es par");
} else {
    console.log("El número " + numeroIngresado + " es impar");
}