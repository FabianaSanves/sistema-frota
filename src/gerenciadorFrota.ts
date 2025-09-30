// Esta classe não representa um objeto físico, mas a lógica do sistema

import { Motorista } from "./motorista";
import { Veiculo } from "./veiculo";

export class GerenciadorFrota {
  // Para proteger o acesso direto.
  private veiculos: Veiculo[] = [];
  private motoristas: Motorista[] = [];

  //Implementação dos métodos públicos

  public adicionarVeiculo(veiculo): void {
    this.veiculos.push(veiculo);
    console.log(`Veículo de placa ${veiculo.placa} foi adicionado à frota.`);
  }

  public adicionarMotorista(motorista): void {
    this.motoristas.push(motorista);
    console.log(`Motorista ${motorista.nome} foi adicionado.`);
  }

  public listarVeiculos(): void {
    console.log("\n-------VEÍCULOS DA FROTA-------");
    if (this.veiculos.length === 0) {
      console.log("A frota está vazia.");
    } else {
      this.veiculos.forEach((veiculo) => {
        veiculo.descrever(); // Chamada polimórfica!
      });
    }
  }

  public atribuirMotorista(placaVeiculo: string, cpfMotorista: string): void {
    //Encontrando o veículo na lista pela placa.
    const veiculo = this.veiculos.find(
      (vehicle) => vehicle.placa === placaVeiculo
    );
    if (!veiculo) {
      console.error(
        `ERRO: O veículo com placa ${placaVeiculo} não foi localizado.`
      );
      return;
    }

    //Encontrando o motorista na lista pelo CPF.
    const motorista = this.motoristas.find(
      (driver) => driver.cpf === cpfMotorista
    );
    if (!motorista) {
      console.error(
        `ERRO: O motorista com CPF ${cpfMotorista} não foi localizado.`
      );
      return;
    }
  }
}
