class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    return valor;
    }

    depositar(valor){
        if(valor <= 0) return;
        
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
const valorDepositado = contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(`Este foi o valor sacado: ${valorSacado}`);
console.log(`O valor depositado foi de: ${valorDepositado}`)
console.log(contaCorrenteRicardo);
