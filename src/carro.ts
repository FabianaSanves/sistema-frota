import { veiculo } from './veiculo'; 
class Carro extends veiculo { 
    private numeroPortas: number;
     constructor(
        modelo: string, 
        marca: string, 
        cor: string, 
        ano: number, 
        numeroPortas: number 
    ) {
         super(modelo, marca, cor, ano); 
        this.numeroPortas = numeroPortas; 
    }
      public obterDescricao(): string {  
        return `Carro ${this.marca} ${this.modelo} | Ano: ${this.ano} | Portas: ${this.numeroPortas}.`;
    }
}
