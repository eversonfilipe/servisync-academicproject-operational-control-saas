# ServiSync - Documento de Discovery e Definição de Produto

## Product Discovery and Definition Document

---

### **[English Version Bellow](#english-version)**

Este documento detalha o processo de pesquisa, descoberta e definição estratégica que guiou o desenvolvimento do Mínimo Produto Viável (MVP) do **ServiSync**, seguindo a "Policy Operacional Interno de Desenvolvimento de Projetos e Soluções".

## 1. Revisão Sistemática de Literatura

A fase inicial consistiu em uma busca estruturada em bases de dados acadêmicas (Scielo, Google Scholar) e relatórios de mercado (SEBRAE) para identificar os principais desafios enfrentados por microempresas no setor de serviços técnicos no Brasil.

-   **Principais Achados:** A literatura apontou consistentemente para a falta de ferramentas de gestão acessíveis e integradas, o uso excessivo de métodos manuais (papel, planilhas), a dificuldade no acompanhamento de ordens de serviço e a falta de visibilidade sobre o estoque como barreiras críticas para a eficiência e escalabilidade. Esta fragmentação sistêmica foi identificada como o problema central.

## 2. Shallow & Deep Definition

O processo evoluiu de uma definição superficial para uma profunda, utilizando a metodologia 5W2H para chegar à causa raiz do problema e a uma solução específica.

-   **Deep-problem:** A ausência de um fluxo de informação integrado causa retrabalho, perda de dados de clientes, atrasos na entrega de serviços e compras de estoque emergenciais e mais caras. O proprietário perde o controle operacional.
-   **Deep-solution:** Desenvolver um sistema web (MVP) chamado ServiSync que integra Clientes, Ordens de Serviço e Estoque em um único painel de controle para prover visibilidade e eficiência.
-   **Persona: Carlos Eduardo Silva, 38 anos**
    -   **Perfil:** Proprietário de uma oficina de manutenção com faturamento de R$ 15-20k/mês e lucro de R$ 3-5k/mês.
    -   **Dor:** Sente-se sobrecarregado por usar múltiplos sistemas desconectados (papel, WhatsApp, planilhas) para gerenciar a operação. Não tem uma visão clara do status das OS, do estoque exato ou do histórico dos clientes, o que leva a ineficiências e perda de oportunidades.

## 3. VVE-M (Validação de Viabilidade e Estruturação de Metas)

Esta fase foi conduzida para definir um MVP viável, analisar riscos e estabelecer metas claras, com base nos achados anteriores.

#### **Hipótese Central**

> "Se fornecermos um sistema simples de gestão integrada que unifique controle de clientes, serviços e inventário, então microempresas de serviços técnicos recuperarão controle operacional e reduzirão sobrecarga em 4-8 semanas, validando que integração é a solução para fragmentação."

#### **Especificação do MVP**

O MVP foi definido com 6 funcionalidades centrais para entregar valor imediato e testar a hipótese:

1.  **Cadastro Unificado de Clientes:** Fonte única de verdade para dados de clientes.
2.  **Gestão de Ordens de Serviço:** Criar e acompanhar OS (status: Aberta/Em Andamento/Concluída).
3.  **Controle de Inventário Básico:** Entrada/saída de peças principais.
4.  **Vinculação Cliente-Equipamento-Peças:** Histórico completo e integrado.
5.  **Dashboard Operacional:** Visão geral dos principais indicadores.
6.  **App Web Responsivo:** Acesso via desktop e mobile (Cloud-based).

#### **Análise de Riscos e Mitigação**

Uma análise identificou 14 riscos, com os 3 principais sendo:

1.  **Risco de Adoção:** Hábito com métodos atuais pode dificultar a transição.
    -   **Mitigação:** Focar em uma UI/UX extremamente simples, um guia de onboarding claro e entregar "quick wins" (benefícios rápidos) nas primeiras 1-2 semanas de uso.
2.  **Risco Técnico:** Complexidade na integração dos módulos de forma estável.
    -   **Mitigação:** Desenvolver os módulos de forma desacoplada com uma base de dados bem estruturada (simulada em C) para garantir robustez e escalabilidade.
3.  **Risco de Engajamento:** Usuários podem não perceber o valor total da plataforma.
    -   **Mitigação:** O Dashboard Operacional foi projetado para mostrar o valor tangível (nº de OS, status do estoque) de forma imediata, reforçando os benefícios da integração.

#### **Definição de Metas (OKRs para o MVP)**

-   **Objetivo 1:** Validar a proposta de valor central de gestão integrada.
    -   **KR 1:** Atingir 10 usuários-teste cadastrando um mínimo de 5 ordens de serviço cada no primeiro mês.
    -   **KR 2:** Obter um feedback de usabilidade com nota média de 4/5 (escala de 1-5) dos usuários-teste.
-   **Objetivo 2:** Confirmar a viabilidade técnica da solução.
    -   **KR 1:** Manter o tempo de carregamento das páginas principais abaixo de 2 segundos.
    -   **KR 2:** Garantir 99% de uptime durante o período de testes.

---
<br/>

# English Version

This document details the research, discovery, and strategic definition process that guided the development of the **ServiSync** Minimum Viable Product (MVP), following the "Internal Operational Policy for Project and Solution Development."

## 1. Systematic Literature Review

The initial phase consisted of a structured search in academic databases (Scielo, Google Scholar) and market reports (SEBRAE) to identify the main challenges faced by microenterprises in the Brazilian technical services sector.

-   **Key Findings:** The literature consistently pointed to the lack of accessible and integrated management tools, excessive use of manual methods (paper, spreadsheets), difficulty in tracking service orders, and a lack of inventory visibility as critical barriers to efficiency and scalability. This systemic fragmentation was identified as the core problem.

## 2. Shallow & Deep Definition

The process evolved from a shallow to a deep definition, using the 5W2H methodology to uncover the root cause of the problem and a specific solution.

-   **Deep-problem:** The absence of an integrated information flow causes rework, loss of customer data, service delivery delays, and more expensive emergency inventory purchases. The owner loses operational control.
-   **Deep-solution:** Develop a web system (MVP) called ServiSync that integrates Clients, Service Orders, and Inventory into a single dashboard to provide visibility and efficiency.
-   **Persona: Carlos Eduardo Silva, 38 years old**
    -   **Profile:** Owner of a maintenance shop with a monthly revenue of BRL 15-20k and a profit of BRL 3-5k.
    -   **Pain Point:** Feels overwhelmed by using multiple disconnected systems (paper, WhatsApp, spreadsheets) to manage operations. He lacks a clear view of SO statuses, exact inventory, or customer history, leading to inefficiencies and missed opportunities.

## 3. VVE-M (Validation, Viability, and Goal Setting)

This phase was conducted to define a viable MVP, analyze risks, and establish clear goals based on the previous findings.

#### **Central Hypothesis**

> "If we provide a simple integrated management system that unifies client, service, and inventory control, then technical service microenterprises will regain operational control and reduce overhead within 4-8 weeks, validating that integration is the solution to fragmentation."

#### **MVP Specification**

The MVP was defined with 6 core features to deliver immediate value and test the hypothesis:

1.  **Unified Client Registry:** A single source of truth for customer data.
2.  **Service Order Management:** Create and track SOs (status: Open/In Progress/Completed).
3.  **Basic Inventory Control:** Input/output of main parts.
4.  **Client-Equipment-Parts Linking:** Complete and integrated service history.
5.  **Operational Dashboard:** Overview of key indicators.
6.  **Responsive Web App:** Access via desktop and mobile (Cloud-based).

#### **Risk Analysis and Mitigation**

An analysis identified 14 risks, with the top 3 being:

1.  **Adoption Risk:** Habits with current methods may hinder the transition.
    -   **Mitigation:** Focus on an extremely simple UI/UX, a clear onboarding guide, and delivering "quick wins" within the first 1-2 weeks of use.
2.  **Technical Risk:** Complexity in stably integrating the modules.
    -   **Mitigation:** Develop modules in a decoupled manner with a well-structured database (simulated in C) to ensure robustness and scalability.
3.  **Engagement Risk:** Users may not perceive the full value of the platform.
    -   **Mitigation:** The Operational Dashboard is designed to show tangible value (number of SOs, inventory status) immediately, reinforcing the benefits of integration.

#### **Goal Setting (OKRs for the MVP)**

-   **Objective 1:** Validate the core value proposition of integrated management.
    -   **KR 1:** Achieve 10 test users, each registering a minimum of 5 service orders within the first month.
    -   **KR 2:** Obtain an average usability feedback score of 4/5 (on a 1-5 scale) from test users.
-   **Objective 2:** Confirm the technical viability of the solution.
    -   **KR 1:** Maintain the loading time of main pages under 2 seconds.
    -   **KR 2:** Ensure 99% uptime during the testing period.
