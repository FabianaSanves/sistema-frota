import { Veiculo } from './veiculo'; 
export class Carro extends Veiculo { 
    private numeroPortas: number;
     constructor(
        modelo: string, 
        marca: string, 
        cor: string, 
        ano: number, 
        numeroPortas: number,
        placa: string
    ) {
         super(modelo, marca, cor, ano, placa); 
        this.numeroPortas = numeroPortas; 
    }
      public obterDescricao(): string {  
        return `Carro ${this.marca} ${this.modelo} | Ano: ${this.ano} | Portas: ${this.numeroPortas}.`;
    }
}
