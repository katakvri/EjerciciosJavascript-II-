// La funcion del primer dado, que a su vez invocandola ya da un numero aleatorio entre el 1 y el 6
const dado1 = (numero1 = 1, numero2 = 6) => Math.round(Math.random() * (numero2 - numero1) + numero1);

// el segundo dado que hace lo mismo que el primero
const dado2 = (numero1 = 1, numero2 = 6) => Math.round(Math.random() * (numero2 - numero1) + numero1);

console.log(dado1(), dado2())