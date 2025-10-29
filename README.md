
# ServiSync - Gestão Simplificada para Microempresas

![Badge](https://img.shields.io/badge/Projeto-Acad%C3%AAmico-blue)
![Badge](https://img.shields.io/badge/Linguagem-C-blue.svg)
![Badge](https://img.shields.io/badge/UI-React%20/%20TypeScript-cyan.svg)
![Badge](https://img.shields.io/badge/Status-MVP-green)

---

### **[English Version Bellow](#servisync---simplified-management-for-microenterprises)**

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Público-Alvo](#público-alvo)
- [Metodologia Aplicada](#metodologia-aplicada)
- [Estrutura Tecnológica](#estrutura-tecnológica)
- [Como Executar](#como-executar)
- [Licença](#licença)

## Visão Geral

**ServiSync** é um MVP (Mínimo Produto Viável) acadêmico, desenvolvido como projeto para a disciplina de Estrutura de Dados em C. A plataforma foi concebida para atender às necessidades de microempresas brasileiras no setor de serviços técnicos, oferecendo uma solução de gestão integrada e baseada na nuvem. O objetivo principal é centralizar e simplificar o controle operacional, permitindo que os gestores foquem no crescimento do negócio.

## Funcionalidades Principais

- **Painel de Controle (Dashboard):** Visualização rápida e intuitiva dos principais indicadores do negócio, como ordens de serviço abertas, concluídas e em andamento.
- **Gestão de Clientes:** Cadastro centralizado de clientes, com fácil acesso a informações de contato e histórico.
- **Ordens de Serviço (OS):** Criação, acompanhamento e gestão do ciclo de vida das OS, desde a abertura até a conclusão.
- **Controle de Estoque:** Gerenciamento básico de peças e materiais, com alertas de estoque baixo para evitar interrupções no serviço.

## Público-Alvo

O projeto foca em microempreendedores e técnicos autônomos do setor de serviços (assistência técnica, manutenção, etc.) no Brasil, que atualmente utilizam métodos manuais ou planilhas descentralizadas para gerir suas operações.

## Metodologia Aplicada

O desenvolvimento do ServiSync seguiu um rigoroso processo híbrido que une práticas acadêmicas, corporativas e de Lean Startup, garantindo que a solução seja fundamentada em problemas reais e validada de forma estruturada. As principais etapas foram:

1.  **Revisão Sistemática de Literatura:** Análise de estudos sobre os desafios de gestão enfrentados por microempresas.
2.  **Shallow & Deep Definition:** Definição progressiva do problema, da solução e do público-alvo, aprofundando o entendimento da causa-raiz das dificuldades operacionais.
3.  **VVE-M (Validação, Viabilidade e Metas):** Definição do escopo do MVP, análise de riscos e estabelecimento de OKRs (Objectives and Key Results) para guiar o desenvolvimento.
4.  **Validação Empírica:** Formulação e teste de hipóteses sobre a utilidade das funcionalidades propostas.
5.  **Decomposição Ágil:** Estruturação do trabalho em Épicos, Features e User Stories para um desenvolvimento iterativo e focado em valor.

Para um detalhamento completo do processo, consulte o [Documento de Discovery](./docs/DISCOVERY.md).

## Estrutura Tecnológica

-   **Backend (Lógica Central):** A lógica de manipulação dos dados foi modelada e implementada em **C**, utilizando estruturas de dados como listas encadeadas para gerenciar clientes, inventário e ordens de serviço.
-   **Frontend (Interface do Usuário):** A interface web foi construída com **React** e **TypeScript**, oferecendo uma experiência de usuário moderna, responsiva e interativa.

## Como Executar

O projeto possui duas partes distintas:

1.  **Interface Web:** Pode ser executada em um ambiente de desenvolvimento web padrão. Sirva o arquivo `index.html` e suas dependências.
2.  **Core em C:** Os arquivos `main.c` e `datastructures.h` na pasta `src/core` podem ser compilados utilizando um compilador C (como o GCC).
    ```bash
    # Navegue até a pasta src/core
    cd src/core

    # Compile o programa
    gcc main.c -o servisync_core

    # Execute o programa no terminal
    ./servisync_core
    ```

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

# ServiSync - Simplified Management for Microenterprises

![Badge](https://img.shields.io/badge/Project-Academic-blue)
![Badge](https://img.shields.io/badge/Language-C-blue.svg)
![Badge](https://img.shields.io/badge/UI-React%20/%20TypeScript-cyan.svg)
![Badge](https://img.shields.io/badge/Status-MVP-green)

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Target Audience](#target-audience)
- [Applied Methodology](#applied-methodology)
- [Technological Structure](#technological-structure)
- [How to Run](#how-to-run)
- [License](#license)

## Overview

**ServiSync** is an academic MVP (Minimum Viable Product), developed as a project for a Data Structures in C course. The platform is designed to meet the needs of Brazilian microenterprises in the technical services sector, offering an integrated, cloud-based management solution. The main objective is to centralize and simplify operational control, allowing managers to focus on business growth.

## Key Features

- **Dashboard:** Quick and intuitive visualization of key business indicators, such as open, completed, and in-progress service orders.
- **Client Management:** Centralized client registry with easy access to contact information and history.
- **Service Orders (SO):** Creation, tracking, and management of the SO lifecycle, from opening to completion.
- **Inventory Control:** Basic management of parts and materials, with low-stock alerts to prevent service interruptions.

## Target Audience

The project targets micro-entrepreneurs and freelance technicians in the service sector (technical assistance, maintenance, etc.) in Brazil, who currently use manual methods or decentralized spreadsheets to manage their operations.

## Applied Methodology

The development of ServiSync followed a rigorous hybrid process that blends academic, corporate, and Lean Startup practices, ensuring the solution is grounded in real problems and structurally validated. The main stages were:

1.  **Systematic Literature Review:** Analysis of studies on the management challenges faced by microenterprises.
2.  **Shallow & Deep Definition:** Progressive definition of the problem, solution, and target audience, deepening the understanding of the root cause of operational difficulties.
3.  **VVE-M (Validation, Viability, and Goals):** Definition of the MVP scope, risk analysis, and establishment of OKRs (Objectives and Key Results) to guide development.
4.  **Empirical Validation:** Formulation and testing of hypotheses regarding the utility of the proposed features.
5.  **Agile Decomposition:** Structuring the work into Epics, Features, and User Stories for iterative, value-focused development.

For a complete breakdown of the process, please see the [Discovery Document](./docs/DISCOVERY.md).

## Technological Structure

-   **Backend (Core Logic):** The data manipulation logic was modeled and implemented in **C**, using data structures like linked lists to manage clients, inventory, and service orders.
-   **Frontend (User Interface):** The web interface was built with **React** and **TypeScript**, providing a modern, responsive, and interactive user experience.

## How to Run

The project has two distinct parts:

1.  **Web Interface:** Can be run in a standard web development environment. Serve the `index.html` file and its dependencies.
2.  **Core in C:** The `main.c` and `datastructures.h` files in the `src/core` folder can be compiled using a C compiler (like GCC).
    ```bash
    # Navigate to the src/core folder
    cd src/core

    # Compile the program
    gcc main.c -o servisync_core

    # Run the program in the terminal
    ./servisync_core
    ```

## License

This project is distributed under the MIT license. See the `LICENSE` file for more details.
