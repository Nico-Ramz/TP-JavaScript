let C = prompt ("Ingrese la temperatura en Celsius");

console.log(C,"°C son equivalentes a ", convertirCelsiusAFaherenheit(C), "°F" );
function convertirCelsiusAFaherenheit(C) {
  C = C*1.8 + 32;
  return C;
}