// A classe 'veiculo' representa o que todos os itens têm em comum.

import { Motorista } from "./motorista";

export abstract class Veiculo {
  public placa: string;
  protected _motorista: Motorista | null = null;

  // ATRIBUTOS comuns a todos os itens
  protected modelo: string;
  protected marca: string;
  private cor: string;
  protected ano: number;
  private estaLigado: boolean = false;

  constructor(
    modelo: string,
    marca: string,
    cor: string,
    ano: number,
    placa: string
  ) {
    //atributos veiculo
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.ano = ano;
    this.placa = placa;
    this.estaLigado = false;
  }

  // Aplica Encapsulamento
  public ligar(): void {
    if (!this.estaLigado) {
      this.estaLigado = true;
      console.log(`O ${this.modelo} está ligado.`);
    } else {
      console.log(`O ${this.modelo} já estava ligado!`);
    }
  }

  public desligar(): void {
    if (this.estaLigado) {
      this.estaLigado = false;
      console.log(`O ${this.modelo} foi desligado.`);
    } else {
      console.log(`O ${this.modelo} já estava desligado!`);
    }
  }

  public acelerar(): void {
    if (this.estaLigado) {
      console.log(`O ${this.modelo} está acelerando...`);
    } else {
      console.log(`O ${this.modelo} precisa estar ligado para acelerar!`);
    }
  }
  // Método abstrato: cada subclasse deve implementar sua própria descrição.

  public abstract obterDescricao(): string;
}

