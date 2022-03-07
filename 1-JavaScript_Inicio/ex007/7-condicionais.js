console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //eliminando um item da lista
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //eliminando um item da lista
// } else {
//     console.log("Comprador não é maior de idade e não podemos vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!! \n\n");
    listaDeDestinos.splice(1, 1); //eliminando um item da lista
}
 else {
    console.log("Comprador não é maior de idade e não podemos vender \n\n");
}


console.log(listaDeDestinos);


console.log("Embarque: ")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Pode embarcar, boa viagem");
}else{
    console.log("Você não pode embarcar");
} 

//console.log(`Destino ${listaDeDestinos[1]} e ${listaDeDestinos[2]}`);