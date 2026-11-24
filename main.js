function invertiNumeri(numeri) {
  let invertiti = numeri.reverse();
  return invertiti;
}

let decrescente = [40, 28, 19, 12, 6, 2, -3, -8, -15, -22];
let crescenti = invertiNumeri(decrescente);

console.log(crescenti);