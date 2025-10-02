//Importando as classes criadas
import { GerenciadorFrota } from "./src/gerenciadorFrota";
import { Motorista } from "./src/motorista";
import { Carro } from "./src/carro";
import { Caminhao } from "./src/caminhao";

console.log("SISTEMA DE GERENCIAMENTO DE FROTA");

const frota = new GerenciadorFrota();

console.log("\nCadastrando Motoristas e Veículos");
const motoristaFabi = new Motorista("Fabiana Chaves", "897.654.121-11", "123456789");
const motoristaIas = new Motorista("Iasmin Corregozinho", "487.912.252-22", "987654321");

const fiatArgo = new Carro("Argo", "Fiat", "Branco", 2022, 2,"ABC-1234");
const scaniaV8 = new Caminhao("R 540", "Scania", "Vermelho", 2022, 50000, "DEF-5678");

frota.adicionarMotorista(motoristaFabi);
frota.adicionarMotorista(motoristaIas);
frota.adicionarVeiculo(fiatArgo);
frota.adicionarVeiculo(scaniaV8);

//teste
frota.listarVeiculos();

//teste
console.log("\nAtribuindo Motoristas aos Veículos");
frota.atribuirMotorista("ABC-1234", "897.654.121-11"); 
frota.atribuirMotorista("DEF-5678", "487.912.252-22"); 

frota.listarVeiculos(); // Descreve os motoristas

//teste dos outros métodos
console.log("\nTestando Ações dos Veículos");
fiatArgo.ligar();
fiatArgo.acelerar();
motoristaFabi.dirigir();
scaniaV8.desligar(); // Tenta desligar (já está desligado)
scaniaV8.acelerar(); // Tenta acelerar desligado

console.log("\n Encerrando... Bye!");