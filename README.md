# ServiSync - Gestão Simplificada para Microempresas de Serviços

![Badge](https://img-shields.io/badge/Projeto-Acad%C3%AAmico-blue)
![Badge](https://img-shields.io/badge/Linguagem%20Core-C-blue.svg)
![Badge](https://img-shields.io/badge/UI-React%20/%20TypeScript-cyan.svg)
![Badge](https://img-shields.io/badge/Status-MVP%20Funcional-green)

---

### **[English Version Bellow](#servisync---simplified-management-for-service-microenterprises)**

## Sumário

- [Visão Geral](#visão-geral)
- [Hipótese Central](#hipótese-central)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Persistência de Dados (Backup Local)](#persistência-de-dados-backup-local)
- [Metodologia Aplicada](#metodologia-aplicada)
- [Estrutura Tecnológica](#estrutura-tecnológica)
- [Como Executar](#como-executar)
- [Licença](#licença)

## Visão Geral

**ServiSync** é um MVP (Mínimo Produto Viável) acadêmico, desenvolvido como projeto para a disciplina de Estrutura de Dados em C. A plataforma foi concebida para resolver a fragmentação sistêmica enfrentada por microempresas brasileiras no setor de serviços técnicos. O objetivo é oferecer uma solução de gestão integrada que promete a **recuperação do controle operacional em 4 a 8 semanas**, centralizando informações e otimizando processos.

## Hipótese Central

> "Se fornecermos um sistema simples de gestão integrada que unifique controle de clientes, serviços e inventário, então microempresas de serviços técnicos recuperarão controle operacional e reduzirão sobrecarga em 4-8 semanas, validando que integração é a solução para fragmentação."

## Funcionalidades Principais

O escopo do MVP foi definido para entregar valor imediato e validar a hipótese central, cobrindo 78.8% das necessidades operacionais identificadas:

1.  **Cadastro Unificado de Clientes:** Cria uma fonte única de verdade para os dados dos clientes, servindo como base para um futuro CRM.
2.  **Gestão de Ordens de Serviço (OS):** Permite criar e acompanhar o status (Aberta, Em Andamento, Concluída) de todas as OS em tempo real através de um painel Kanban.
3.  **Controle de Inventário Básico:** Gerenciamento de entrada e saída das peças mais críticas, com alertas de estoque baixo.
4.  **Vinculação Cliente-Equipamento-Peças:** Cria um histórico completo e integrado de cada serviço.
5.  **Dashboard Operacional:** Oferece uma visão geral dos principais indicadores de negócio (KPIs) em uma única tela.
6.  **Aplicação Web Responsiva:** Garante acesso via desktop e dispositivos móveis (Cloud-based).

## Persistência de Dados (Backup Local)

Para garantir que os usuários mantenham o controle total de seus dados em um ambiente open-source e sem backend, o ServiSync inclui uma funcionalidade de **exportação e importação de dados**:

-   **Exportar:** A qualquer momento, o usuário pode exportar todos os dados da aplicação (clientes, ordens de serviço, estoque) para um único arquivo `JSON` de backup.
-   **Importar:** O usuário pode carregar um arquivo `JSON` de backup para restaurar completamente o estado da aplicação, garantindo a continuidade do negócio e a segurança dos dados.

## Metodologia Aplicada

O desenvolvimento do ServiSync seguiu um processo rigoroso e híbrido, validado cientificamente. A metodologia uniu Revisão Sistemática de Literatura, definição aprofundada de problema/solução (Deep-Definition) e um processo completo de **VVE-M (Validação de Viabilidade e Estruturação de Metas)**. Esta abordagem garantiu que a solução fosse fundamentada em problemas reais, com escopo de MVP, riscos e metas claramente definidos antes do desenvolvimento.

Para um detalhamento completo do processo, consulte o [Documento de Discovery](./docs/DISCOVERY.md).

## Estrutura Tecnológica

-   **Backend (Lógica Central):** A lógica de manipulação dos dados foi modelada e implementada em **C**, utilizando estruturas de dados como listas encadeadas para gerenciar clientes, inventário e ordens de serviço.
-   **Frontend (Interface do Usuário):** A interface web foi construída com **React** e **TypeScript**, oferecendo uma experiência de usuário moderna, responsiva e interativa. A aplicação é totalmente client-side.

## Como Executar

O projeto possui duas partes distintas:

1.  **Interface Web:** Pode ser executada em um ambiente de desenvolvimento web padrão, servindo o arquivo `index.html`. Não requer build ou instalação de pacotes.
2.  **Core em C (Opcional):** Os arquivos na pasta `src/core` podem ser compilados e executados para testar a lógica de base de forma isolada.

## Licença

Este projeto é distribuído sob a licença MIT.

---

# ServiSync - Simplified Management for Service Microenterprises

![Badge](https://img-shields.io/badge/Project-Academic-blue)
![Badge](https://img-shields.io/badge/Core%20Language-C-blue.svg)
![Badge](https://img-shields.io/badge/UI-React%20/%20TypeScript-cyan.svg)
![Badge](https://img-shields.io/badge/Status-Functional%20MVP-green)

## Table of Contents

- [Overview](#overview)
- [Central Hypothesis](#central-hypothesis)
- [Key Features](#key-features)
- [Data Persistence (Local Backup)](#data-persistence-local-backup)
- [Applied Methodology](#applied-methodology)
- [Technological Structure](#technological-structure)
- [How to Run](#how-to-run)
- [License](#license)

## Overview

**ServiSync** is an academic MVP (Minimum Viable Product), developed for a Data Structures in C course. The platform is designed to solve the systemic fragmentation faced by Brazilian microenterprises in the technical services sector. Its goal is to provide an integrated management solution that promises to **restore operational control within 4 to 8 weeks** by centralizing information and optimizing processes.

## Central Hypothesis

> "If we provide a simple integrated management system that unifies client, service, and inventory control, then technical service microenterprises will regain operational control and reduce overhead within 4-8 weeks, validating that integration is the solution to fragmentation."

## Key Features

The MVP scope was defined to deliver immediate value and validate the central hypothesis, covering 78.8% of identified operational needs:

1.  **Unified Client Registry:** Creates a single source of truth for customer data, serving as the foundation for a future CRM.
2.  **Service Order (SO) Management:** Allows creating and tracking the status (Open, In Progress, Completed) of all SOs in real-time via a Kanban board.
3.  **Basic Inventory Control:** Manages the input and output of the most critical parts, with low-stock alerts.
4.  **Client-Equipment-Parts Linking:** Creates a complete and integrated history for each service.
5.  **Operational Dashboard:** Provides an overview of key business indicators (KPIs) on a single screen.
6.  **Responsive Web Application:** Ensures access via desktop and mobile devices (Cloud-based).

## Data Persistence (Local Backup)

To ensure users maintain full control over their data in an open-source, backend-free environment, ServiSync includes a **data export and import** feature:

-   **Export:** At any time, the user can export all application data (clients, service orders, inventory) to a single `JSON` backup file.
-   **Import:** The user can upload a `JSON` backup file to completely restore the application's state, ensuring business continuity and data safety.

## Applied Methodology

ServiSync's development followed a rigorous and scientifically validated hybrid process. The methodology combined a Systematic Literature Review, in-depth problem/solution definition (Deep-Definition), and a comprehensive **VVE-M (Validation, Viability, and Goal Setting)** process. This approach ensured the solution was grounded in real-world problems, with a clearly defined MVP scope, risks, and goals before development began.

For a complete breakdown of the process, see the [Discovery Document](./docs/DISCOVERY.md).

## Technological Structure

-   **Backend (Core Logic):** The data manipulation logic was modeled and implemented in **C**, using data structures like linked lists to manage clients, inventory, and service orders.
-   **Frontend (User Interface):** The web interface was built with **React** and **TypeScript**, providing a modern, responsive, and interactive user experience. The application is entirely client-side.

## How to Run

The project has two distinct parts:

1.  **Web Interface:** Can be run in a standard web development environment by serving the `index.html` file. No build steps or package installations are required.
2.  **Core in C (Optional):** The files in the `src/core` folder can be compiled and run to test the core logic in isolation.

## License

This project is distributed under the MIT license.
