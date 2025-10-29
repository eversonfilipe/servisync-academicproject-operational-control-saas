# ServiSync - Product Discovery and Definition Document

---

### **[English Version Bellow](#english-version)**

Este documento detalha o processo de pesquisa, descoberta e definição estratégica que guiou o desenvolvimento do Mínimo Produto Viável (MVP) do **ServiSync**, com base em metodologias de análise de dados e definição de produto.

## Sumário Executivo

Foi conduzido um processo completo de **VVE-M (Validação de Viabilidade e Estruturação de Metas)** para definir um MVP robusto. O resultado é uma especificação técnica completa, uma análise de 14 riscos críticos identificados via Matriz PxI (Probabilidade × Impacto), e planos de mitigação detalhados para os 3 riscos principais, garantindo que o produto atenda a uma necessidade real de mercado com uma estratégia de entrada clara.

---

## Parte 1: Definição do MVP

### Especificação Completa

-   **Nome:** ServiSync MVP v1.0 - Controle Operacional Integrado
-   **Tagline:** Recupere o controle da sua oficina em 4-8 semanas
-   **Hipótese Central:** "Se fornecermos um sistema simples de gestão integrada que unifique controle de clientes, serviços e inventário, então microempresas de serviços técnicos recuperarão controle operacional e reduzirão sobrecarga em 4-8 semanas, validando que integração é a solução para fragmentação."

### Problema Alvo

A **perda de controle operacional** é o problema central, manifestada pela incapacidade do proprietário de saber o status exato de ordens de serviço, níveis de estoque, e histórico de clientes. Isso é um sintoma de fragmentação sistêmica, onde múltiplos sistemas manuais (papel, planilhas, WhatsApp) não se comunicam.

### Persona Alvo

-   **Nome:** Carlos Eduardo Silva, 38 anos
-   **Perfil:** Proprietário de uma oficina de manutenção com faturamento de R$ 15-20k/mês e lucro de R$ 3-5k/mês.
-   **Dor:** Sente-se sobrecarregado pela desorganização. Perde tempo procurando informações, comete erros em pedidos de peças e não consegue oferecer um atendimento personalizado por falta de histórico.

### Proposta de Valor

-   **Promessa:** Recuperar o controle operacional em 4 a 8 semanas.
-   **Quick Wins (Benefícios Rápidos):** Os primeiros resultados são visíveis em 1 a 2 semanas.
    -   Ver o status de **TODAS** as Ordens de Serviço em 1 clique.
    -   Saber o estoque exato em tempo real (reduzindo discrepâncias).
    -   Acessar o histórico completo de cada cliente instantaneamente.
    -   Reduzir o tempo gasto em tarefas operacionais de 70% para 55% (meta inicial).

### 6 Funcionalidades Core do MVP (Cobertura de 78.8% do valor)

1.  **Cadastro Unificado de Clientes:** Fonte única de verdade para os dados dos clientes.
2.  **Gestão de Ordens de Serviço:** Criar e acompanhar OS (status: Aberta/Em Andamento/Concluída) em um painel Kanban.
3.  **Controle de Inventário Básico:** Entrada e saída das peças mais críticas com alertas de estoque baixo.
4.  **Vinculação Cliente-Equipamento-Peças:** Cria um histórico completo e integrado de cada serviço.
5.  **Dashboard Operacional:** Visão geral dos principais indicadores (# OS abertas, itens em falta, etc.).
6.  **App Web Responsivo:** Acesso via desktop e dispositivos móveis (Cloud-based).

---

## Parte 2: Análise de Riscos e Metas

### Análise de Riscos Críticos

Foram identificados 14 riscos, com os 3 principais sendo:

1.  **Risco de Adoção (Hábito):** Usuários podem resistir a abandonar métodos manuais.
    -   **Mitigação:** Focar em uma UI/UX extremamente simples, um guia de onboarding claro e entregar "quick wins" (benefícios rápidos) nas primeiras semanas de uso.
2.  **Risco Técnico (Integração):** Complexidade na integração estável dos módulos.
    -   **Mitigação:** Desenvolver os módulos de forma desacoplada com uma base de dados bem estruturada (simulada em C) para garantir robustez e escalabilidade futura.
3.  **Risco de Engajamento (Percepção de Valor):** Usuários podem não perceber o valor total da plataforma.
    -   **Mitigação:** O Dashboard Operacional foi projetado para mostrar o valor tangível de forma imediata, reforçando os benefícios da integração.

### Definição de Metas (OKRs para o MVP)

-   **Objetivo 1:** Validar a proposta de valor central de gestão integrada.
    -   **KR 1:** Atingir 10 usuários-teste cadastrando um mínimo de 5 ordens de serviço cada no primeiro mês.
    -   **KR 2:** Obter um feedback de usabilidade com nota média de 4/5 (escala de 1-5) dos usuários-teste.
-   **Objetivo 2:** Confirmar a viabilidade técnica da solução.
    -   **KR 1:** Manter o tempo de carregamento das páginas principais abaixo de 2 segundos.
    -   **KR 2:** Garantir 99% de uptime (disponibilidade) durante o período de testes.

---
<br/>

# English Version

This document details the research, discovery, and strategic definition process that guided the development of the **ServiSync** Minimum Viable Product (MVP), based on data analysis and product definition methodologies.

## Executive Summary

A comprehensive **VVE-M (Validation, Viability, and Goal Setting)** process was conducted to define a robust MVP. The result is a complete technical specification, an analysis of 14 critical risks identified via a PxI Matrix (Probability × Impact), and detailed mitigation plans for the top 3 risks, ensuring the product meets a real market need with a clear entry strategy.

---

## Part 1: MVP Definition

### Complete Specification

-   **Name:** ServiSync MVP v1.0 - Integrated Operational Control
-   **Tagline:** Regain control of your workshop in 4-8 weeks
-   **Central Hypothesis:** "If we provide a simple integrated management system that unifies client, service, and inventory control, then technical service microenterprises will regain operational control and reduce overhead within 4-8 weeks, validating that integration is the solution to fragmentation."

### Target Problem

The core problem is the **loss of operational control**, manifested by the owner's inability to know the exact status of service orders, inventory levels, and customer history. This is a symptom of systemic fragmentation, where multiple manual systems (paper, spreadsheets, WhatsApp) do not communicate.

### Target Persona

-   **Name:** Carlos Eduardo Silva, 38 years old
-   **Profile:** Owner of a maintenance shop with a monthly revenue of BRL 15-20k and a profit of BRL 3-5k.
-   **Pain Point:** Feels overwhelmed by disorganization. He wastes time searching for information, makes mistakes in parts orders, and cannot provide personalized service due to a lack of history.

### Value Proposition

-   **Promise:** Regain operational control in 4 to 8 weeks.
-   **Quick Wins:** The first results are visible in 1 to 2 weeks.
    -   View the status of **ALL** Service Orders in 1 click.
    -   Know the exact inventory in real-time (reducing discrepancies).
    -   Instantly access the complete history of each client.
    -   Reduce time spent on operational tasks from 70% to 55% (initial goal).

### 6 Core MVP Features (Covering 78.8% of value)

1.  **Unified Client Registry:** A single source of truth for customer data.
2.  **Service Order Management:** Create and track SOs (status: Open/In Progress/Completed) on a Kanban board.
3.  **Basic Inventory Control:** Input and output of the most critical parts with low-stock alerts.
4.  **Client-Equipment-Parts Linking:** Creates a complete and integrated history for each service.
5.  **Operational Dashboard:** Overview of key indicators (# of open SOs, items out of stock, etc.).
6.  **Responsive Web App:** Access via desktop and mobile devices (Cloud-based).

---

## Part 2: Risk Analysis and Goals

### Critical Risk Analysis

14 risks were identified, with the top 3 being:

1.  **Adoption Risk (Habit):** Users may resist abandoning manual methods.
    -   **Mitigation:** Focus on an extremely simple UI/UX, a clear onboarding guide, and delivering "quick wins" within the first weeks of use.
2.  **Technical Risk (Integration):** Complexity in stably integrating the modules.
    -   **Mitigation:** Develop modules in a decoupled manner with a well-structured database (simulated in C) to ensure future robustness and scalability.
3.  **Engagement Risk (Value Perception):** Users may not perceive the full value of the platform.
    -   **Mitigation:** The Operational Dashboard is designed to show tangible value immediately, reinforcing the benefits of integration.

### Goal Setting (OKRs for the MVP)

-   **Objective 1:** Validate the core value proposition of integrated management.
    -   **KR 1:** Achieve 10 test users, each registering a minimum of 5 service orders within the first month.
    -   **KR 2:** Obtain an average usability feedback score of 4/5 (on a 1-5 scale) from test users.
-   **Objective 2:** Confirm the technical viability of the solution.
    -   **KR 1:** Maintain the loading time of main pages under 2 seconds.
    -   **KR 2:** Ensure 99% uptime during the testing period.
