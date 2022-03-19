// Classe abstrata
export class Conta{
    constructor(saldoInicial,cliente,agencia){
        if(this.constructor == Conta ){
            throw new Error ("Você não deveria instanciar um objeto do tipo conta diretamente.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

       
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }        
    }
    
    get cliente(){
        return this._cliente;
    }
   
    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        let taxa = 1;
        return this._sacar(valor,taxa);
    }

    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
    depositar(valor){
        if(valor <= 0) return;
        
        this._saldo += valor;
    }

    tansferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); 
        
    }
}