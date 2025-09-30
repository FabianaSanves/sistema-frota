//Criação da Classe Motorista
class Motorista {
  //atributos privados para nome, cpf e cnh (encapsulamento)
  private _nome: string;
  private _cpf: string;
  private _cnh: string;

  constructor(nome: string, cpf: string, cnh: string) {
    this._nome = nome;
    this._cpf = cpf;
    this._cnh = cnh;
  }
  //getters
  public get nome(): string {
    return this._nome;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public get cnh(): string {
    return this._cnh;
  }

  //setters
  public set cpf(novoCpf: string) {
    console.warn(`AVISO! O CPF de um motorista não pode ser alterado.`);
  }

  public set cnh(novaCnh: string) {
    console.warn(`AVISO! A CNH de um motorista não pode ser alterada.`);
  }

  public dirigir(): void {
    console.log(`O motorista ${this._nome} está dirigindo.`);
  }
}
