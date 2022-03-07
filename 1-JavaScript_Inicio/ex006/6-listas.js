console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adiocionando um item na lista
console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //eliminando um item da lista
console.log(listaDeDestinos);

console.log(`Destino ${listaDeDestinos[1]} e ${listaDeDestinos[2]}`);