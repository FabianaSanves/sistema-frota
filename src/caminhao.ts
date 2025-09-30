import { veiculo } from './veiculo'; 

class Caminhao extends veiculo { 

    private capacidadeCarga: number;
    constructor(
        modelo: string, 
        marca: string, 
        cor: string, 
        ano: number, 
        capacidadeCarga: number 
    ) {
        super(modelo, marca, cor, ano); 
        this.capacidadeCarga = capacidadeCarga; 
    }
    public obterDescricao(): string {
        return `Caminhão ${this.marca} ${this.modelo} | Carga Máxima: ${this.capacidadeCarga} kg.`;
    }
}