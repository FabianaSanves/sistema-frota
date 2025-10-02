# 🚗 Sistema de Gerenciamento de Frota

![Linguagem Principal](https://img.shields.io/github/languages/top/FabianaSanves/sistema-frota?style=for-the-badge)
![Status do Repositório](https://img.shields.io/badge/status-finalizado-green?style=for-the-badge)

> ✅ **Status:** Finalizado

Este é um projeto de console (terminal) desenvolvido em TypeScript para simular o gerenciamento de uma frota de veículos. O objetivo principal é aplicar e demonstrar os quatro pilares da Programação Orientada a Objetos (POO) em um cenário prático.

---

## ✨ Funcionalidades

O sistema permite realizar as seguintes operações:

-   👤 **Gerenciar Motoristas:**
    -   Adicionar novos motoristas ao sistema.
-   🚚 **Gerenciar Veículos:**
    -   Adicionar diferentes tipos de veículos (Carros e Caminhões) à frota.
-   🔄 **Atribuir Tarefas:**
    -   Associar um motorista a um veículo específico.
-   📊 **Listar Frota:**
    -   Exibir uma lista detalhada de todos os veículos, demonstrando o polimorfismo.
-   ⚙️ **Simular Ações:**
    -   Ligar, desligar e acelerar veículos.
    -   Simular um motorista dirigindo.

---

## 🚀 Tecnologias Utilizadas

-   **[TypeScript](https://www.typescriptlang.org/):** Linguagem principal do projeto, adicionando tipagem estática ao JavaScript.
-   **[Node.js](https://nodejs.org/):** Ambiente de execução do código no lado do servidor.
-   **[TSX](https://github.com/esbuild-kit/tsx):** Ferramenta para executar arquivos TypeScript diretamente, sem a necessidade de uma etapa de compilação manual.

---

## 🏛️ Conceitos de POO Aplicados

Este projeto foi estruturado para praticar os 4 pilares da Programação Orientada a Objetos:

1.  **Abstração:**
    -   A classe abstrata `Veiculo` foi criada para representar o que é comum a todos os veículos, definindo um contrato (atributos e métodos) que todas as classes filhas devem seguir.

2.  **Encapsulamento:**
    -   Os atributos das classes (`Motorista`, `Veiculo`, etc.) foram definidos como `private` ou `protected`, e o acesso a eles é controlado por meio de métodos públicos (`getters`, `setters`, `ligar()`), protegendo a integridade dos dados.

3.  **Herança:**
    -   As classes `Carro` e `Caminhao` herdam da classe `Veiculo`, reutilizando seus atributos e métodos comuns e adicionando características específicas.

4.  **Polimorfismo:**
    -   O método `obterDescricao()` é sobrescrito nas classes `Carro
