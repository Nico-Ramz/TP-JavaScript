let a = 10;
let b = 20;
let c = 15;
let mayor;

if (a >= b && a >= c) {
    mayor = a;
} else if (b >= a && b >= c) {
    mayor = b;
} else {
    mayor = c;
}

console.log("El mayor valor es:", mayor);
