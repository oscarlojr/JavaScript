import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo",11122233309);

const conta1 = new ContaCorrente(0,cliente1,1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50,cliente1,1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);


//console.log(contaTeste);
console.log(contaSalario);


