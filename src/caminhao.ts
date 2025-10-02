import { Veiculo } from './veiculo'; 

export class Caminhao extends Veiculo { 

    private capacidadeCarga: number;
    constructor(
        modelo: string, 
        marca: string, 
        cor: string, 
        ano: number, 
        capacidadeCarga: number,
        placa: string
    ) {
        super(modelo, marca, cor, ano, placa); 
        this.capacidadeCarga = capacidadeCarga; 
    }
    public obterDescricao(): string {
        return `Caminhão ${this.marca} ${this.modelo} | Carga Máxima: ${this.capacidadeCarga} kg.`;
    }
}