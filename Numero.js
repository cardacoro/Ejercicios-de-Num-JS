// - Una variable que contenga tu altura en centímetros (entero)
let altura = 180;


// - Una variable que contenga tu altura en metros (número de coma flotante)

let alturaMetros = 1.80

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let pesoKg = 80.0

// - Una variable que contenga tu altura en metros redondeada hacia arriba

let alturaRedondeada = alturaMetros.toFixed();
console.log(alturaRedondeada);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let pesoKgRedondeado = Math.floor(pesoKg);
console.log(pesoKgRedondeado);


// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

const max = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(max)

// Aqui debio haber dado false pero lo consoleamos y da true depronto es por Code Run debiamos usar Quoakka o no sabemos