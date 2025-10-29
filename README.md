# ServiSync - Gestão Simplificada para Microempresas

![Badge](https://img-shields.io/badge/Projeto-Acad%C3%AAmico-blue)
![Badge](https://img-shields.io/badge/Linguagem-C-blue.svg)
![Badge](https://img-shields.io/badge/UI-React%20/%20TypeScript-cyan.svg)
![Badge](https://img-shields.io/badge/Status-MVP-green)

---

### **[English Version Bellow](#servisync---simplified-management-for-microenterprises)**

## Sumário

- [Visão Geral](#visão-geral)
- [Hipótese Central](#hipótese-central)
- [Funcionalidades Principais (MVP)](#funcionalidades-principais-mvp)
- [Metodologia Aplicada](#metodologia-aplicada)
- [Estrutura Tecnológica](#estrutura-tecnológica)
- [Como Executar](#como-executar)
- [Licença](#licença)

## Visão Geral

**ServiSync** é um MVP (Mínimo Produto Viável) acadêmico, desenvolvido como projeto para a disciplina de Estrutura de Dados em C. A plataforma foi concebida para resolver a fragmentação sistêmica enfrentada por microempresas brasileiras no setor de serviços técnicos, oferecendo uma solução de gestão integrada que promete a recuperação do controle operacional em 4 a 8 semanas.

## Hipótese Central

> "Se fornecermos um sistema simples de gestão integrada que unifique controle de clientes, serviços e inventário, então microempresas de serviços técnicos recuperarão controle operacional e reduzirão sobrecarga em 4-8 semanas, validando que integração é a solução para fragmentação."

## Funcionalidades Principais (MVP)

O escopo do MVP foi definido para entregar valor imediato e validar a hipótese central, cobrindo 78.8% das necessidades operacionais identificadas:

1.  **Cadastro Unificado de Clientes:** Cria uma fonte única de verdade para os dados dos clientes.
2.  **Gestão de Ordens de Serviço (OS):** Permite criar e acompanhar o status (Aberta, Em Andamento, Concluída) de todas as OS em tempo real.
3.  **Controle de Inventário Básico:** Gerenciamento de entrada e saída das peças mais críticas.
4.  **Vinculação Cliente-Equipamento-Peças:** Cria um histórico completo e integrado de cada serviço.
5.  **Dashboard Operacional:** Oferece uma visão geral dos principais indicadores em uma única tela.
6.  **Aplicação Web Responsiva:** Garante acesso via desktop e dispositivos móveis (Cloud-based).

## Metodologia Aplicada

O desenvolvimento do ServiSync seguiu um processo rigoroso e híbrido, validado cientificamente. A metodologia uniu Revisão Sistemática de Literatura, definição aprofundada de problema/solução (Deep-Definition) e um processo completo de **VVE-M (Validação de Viabilidade e Estruturação de Metas)**. Esta abordagem garantiu que a solução fosse fundamentada em problemas reais, com escopo de MVP, riscos e metas claramente definidos antes do desenvolvimento.

Para um detalhamento completo do processo, consulte o [Documento de Discovery](./docs/DISCOVERY.md).

## Estrutura Tecnológica

-   **Backend (Lógica Central):** A lógica de manipulação dos dados foi modelada e implementada em **C**, utilizando estruturas de dados como listas encadeadas para gerenciar clientes, inventário e ordens de serviço. Os arquivos estão em `src/core`.
-   **Frontend (Interface do Usuário):** A interface web foi construída com **React** e **TypeScript**, oferecendo uma experiência de usuário moderna, responsiva e interativa.

## Como Executar

O projeto possui duas partes distintas:

1.  **Interface Web:** Pode ser executada em um ambiente de desenvolvimento web padrão, servindo o arquivo `index.html`.
2.  **Core em C:** Os arquivos na pasta `src/core` podem ser compilados e executados para testar a lógica de base.
    ```bash
    # Navegue até a pasta src/core
    cd src/core

    # Compile o programa (usando GCC como exemplo)
    gcc main.c -o servisync_core

    # Execute o programa no terminal
    ./servisync_core
    ```

## Licença

Este projeto é distribuído sob a licença MIT.

---

# ServiSync - Simplified Management for Microenterprises

![Badge](https://img-shields.io/badge/Project-Academic-blue)
![Badge](https://img-shields.io/badge/Language-C-blue.svg)
![Badge](https://img-shields.io/badge/UI-React%20/%20TypeScript-cyan.svg)
![Badge](https://img-shields.io/badge/Status-MVP-green)

## Table of Contents

- [Overview](#overview)
- [Central Hypothesis](#central-hypothesis)
- [Key Features (MVP)](#key-features-mvp)
- [Applied Methodology](#applied-methodology)
- [Technological Structure](#technological-structure)
- [How to Run](#how-to-run)
- [License](#license)

## Overview

**ServiSync** is an academic MVP (Minimum Viable Product), developed as a project for a Data Structures in C course. The platform is designed to solve the systemic fragmentation faced by Brazilian microenterprises in the technical services sector, offering an integrated management solution that promises to restore operational control within 4 to 8 weeks.

## Central Hypothesis

> "If we provide a simple integrated management system that unifies client, service, and inventory control, then technical service microenterprises will regain operational control and reduce overhead within 4-8 weeks, validating that integration is the solution to fragmentation."

## Key Features (MVP)

The MVP scope was defined to deliver immediate value and validate the central hypothesis, covering 78.8% of identified operational needs:

1.  **Unified Client Registry:** Creates a single source of truth for customer data.
2.  **Service Order (SO) Management:** Allows creating and tracking the status (Open, In Progress, Completed) of all SOs in real-time.
3.  **Basic Inventory Control:** Manages the input and output of the most critical parts.
4.  **Client-Equipment-Parts Linking:** Creates a complete and integrated history for each service.
5.  **Operational Dashboard:** Provides an overview of key indicators on a single screen.
6.  **Responsive Web Application:** Ensures access via desktop and mobile devices (Cloud-based).

## Applied Methodology

ServiSync's development followed a rigorous and scientifically validated hybrid process. The methodology combined a Systematic Literature Review, in-depth problem/solution definition (Deep-Definition), and a comprehensive **VVE-M (Validation, Viability, and Goal Setting)** process. This approach ensured the solution was grounded in real-world problems, with a clearly defined MVP scope, risks, and goals before development began.

For a complete breakdown of the process, see the [Discovery Document](./docs/DISCOVERY.md).

## Technological Structure

-   **Backend (Core Logic):** The data manipulation logic was modeled and implemented in **C**, using data structures like linked lists to manage clients, inventory, and service orders. The files are located in `src/core`.
-   **Frontend (User Interface):** The web interface was built with **React** and **TypeScript**, providing a modern, responsive, and interactive user experience.

## How to Run

The project has two distinct parts:

1.  **Web Interface:** Can be run in a standard web development environment by serving the `index.html` file.
2.  **Core in C:** The files in the `src/core` folder can be compiled and run to test the core logic.
    ```bash
    # Navigate to the src/core folder
    cd src/core

    # Compile the program (using GCC as an example)
    gcc main.c -o servisync_core

    # Run the program in the terminal
    ./servisync_core
    ```

## License

This project is distributed under the MIT license.
