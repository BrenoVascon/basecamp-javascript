/*

Utilization Set

function getAdmins(map) { 
  let admins = [];
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios)); */


// Utilization Array

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(valoresUnicos(meuArray));



//throw

function verificaPalindromo(string) {
  if (!string) return "String inválida"

  return string === string.split('').reverse().join('');
}
verificaPalindromo('cat');
// utilizando o return ele retorna uma string qualquer

function verificaPalindromo(string) {
  if (!string) throw "String inválida"

  return string === string.split('').reverse().join('');
}
verificaPalindromo('cat');

// se usar o throw ele mostra todas as propiedades de um erro no JavaScript.

/* Try... catch
function verificaPalindromo(string) {
  if (!string) throw "String inválida"

  return string === string.split('').reverse().join('');
}

function tryCatExemplo(string) {
  try { 
  verificaPalindromo(string)
  }
  catch(e) {
    console.log(e)
  }
}
tryCatchExemplo('');
String inválida*/