// A classe base 'veiculo' representa o que todos os itens têm em comum.
abstract class Veiculo {
    // ATRIBUTOS comuns a todos os itens
    private modelo: string;
    private marca: string;
    private cor: string;
    private ano: number;
    private estaLigado: boolean = false;
    
     constructor(modelo: string, marca: string, cor: string, ano: number) {
        this.modelo = modelo; // Define o atributo modelo
        this.marca = marca;   // Define o atributo marca
        this.cor = cor;       // Define o atributo cor
        this.ano = ano;       // Define o atributo ano
        this.estaLigado = false; 
}

   // Aplica Encapsulamento: é o único caminho para mudar o status para 'ligado'.
    
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
            console.log(`O ${this.modelo} está acelerando de forma genérica.`);
        } else {
            console.log(`O ${this.modelo} precisa estar ligado para acelerar!`);
        }
    }
    // Método abstrato: cada subclasse deve implementar sua própria descrição.

    public abstract obterDescricao(): string; 

}