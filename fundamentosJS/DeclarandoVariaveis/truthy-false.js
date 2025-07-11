// BOOLEAN

const usuarioLogado = true;
const contaPaga = true;

if (usuarioLogado == true) {
    console.log("Usuário está logado!");
} else {
    console.log("Usuário não está logado!");
}

if (contaPaga == true) {
    console.log("A conta está paga!");
} else {
    console.log("A conta ainda não está paga!");
}

// TRUTHY OU FALSY
// 0 = false     1 = true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// NULL e UNDEFINED

let minhaVar;
let varNull = null;

console.log(minhaVar); // undefined
console.log(varNull); // null

// TYPEOF

let varNumero = 4;
let varString = "Dia";

console.log(typeof varNumero);
console.log(typeof varString);

