import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente,agencia){
       super(0,cliente,agencia);
       ContaCorrente.numeroDeContas ++;
    }
    
    //Sobrescrevendo o comportamento do método sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,taxa);  //pode ser usado o this ou super
    }
}