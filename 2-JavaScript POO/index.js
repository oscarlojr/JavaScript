import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Alice",987654321);

const conta1 = new ContaCorrente(cliente1,1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2,102);

conta1.tansferir(200, conta2);
console.log(conta1, conta2,ContaCorrente.numeroDeContas);


