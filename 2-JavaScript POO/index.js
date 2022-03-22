import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo",10000,123456789);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo",5000,987654321);
gerente.cadastrarSenha("654321");

const cliente = new Cliente("Lais", 852741963,"456")

const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"654321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");

console.log(diretorEstaLogado,gerenteEstaLogado,clienteEstaLogado);