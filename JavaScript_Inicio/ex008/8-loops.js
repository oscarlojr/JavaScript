console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let  temPassagemComprada = false;
const destino = "São Paulo";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador <3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
       
    }

    contador +=1;
}
console.log("Destino exixte: ", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem!");
} else{
    console.log("Desculpe, tivemos um erro.")
}

// for(let cont = 0 ;contador<3 ; cont +=1){
//     if(listaDeDestinos[cont] == destino){
//         destinoExiste = true;
//         break;
       
//     }
// }
