function verificaStringa(stringa) {
    stringa = stringa.replace(/\W/g, '');

  let inversa = stringa.split('').reverse().join('');

if (stringa == inversa) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaStringa('i nasi sani '));