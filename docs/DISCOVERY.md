
# ServiSync - Documento de Discovery e Definição de Produto

## Product Discovery and Definition Document

---

### **[English Version Bellow](#english-version)**

Este documento detalha o processo de pesquisa, descoberta e definição estratégica que guiou o desenvolvimento do Mínimo Produto Viável (MVP) do **ServiSync**, seguindo a "Policy Operacional Interno de Desenvolvimento de Projetos e Soluções".

## 1. Revisão Sistemática de Literatura

A fase inicial consistiu em uma busca estruturada em bases de dados acadêmicas (Scielo, Google Scholar) e relatórios de mercado (SEBRAE) para identificar os principais desafios enfrentados por microempresas no setor de serviços técnicos no Brasil.

-   **Strings de Busca:** `("gestão" AND "microempresa" AND "serviços técnicos")`, `("desafios" AND "MEI" AND "controle operacional")`.
-   **Critérios de Inclusão/Exclusão:** Foco em artigos e relatórios publicados nos últimos 5 anos, abordando o contexto brasileiro e PMEs (Pequenas e Médias Empresas) de base tecnológica ou de serviços.
-   **Principais Achados:** A literatura apontou consistentemente para a falta de ferramentas de gestão acessíveis e integradas, o uso excessivo de métodos manuais (papel, planilhas), a dificuldade no acompanhamento de ordens de serviço e a falta de visibilidade sobre o estoque como barreiras críticas para a eficiência e escalabilidade.

## 2. Shallow Definition

-   **Shallow-problem:** Microempresas de serviços técnicos no Brasil perdem tempo e dinheiro devido à falta de um sistema de gestão centralizado, resultando em desorganização operacional.
-   **Shallow-solution:** Criar uma plataforma digital simples que unifique o cadastro de clientes, o controle de ordens de serviço e a gestão de estoque.
-   **Shallow-segment:** Técnicos autônomos e donos de pequenas assistências técnicas que ainda dependem de planilhas e cadernos.
-   **Foco ESG:** A solução promove a **Governança** (G) ao formalizar e organizar processos internos. Indiretamente, ao otimizar o uso de peças (Estoque), contribui para a redução de desperdício (**Ambiental** - E) e melhora o relacionamento com a comunidade de clientes (**Social** - S) através de um serviço mais ágil e confiável.

## 3. Deep-Definition (5W2H)

#### **Deep-problem**

-   **What?** A ausência de um fluxo de informação integrado causa retrabalho, perda de dados de clientes, atrasos na entrega de serviços e compras de estoque emergenciais e mais caras.
-   **Why?** Ferramentas existentes são complexas, caras ou inadequadas para a realidade de uma microempresa. A informalidade dos processos impede a visão gerencial.
-   **Who?** O microempreendedor, que atua como técnico, administrador, vendedor e comprador.
-   **Where?** Na operação diária do negócio, desde o primeiro contato com o cliente até o faturamento e a reposição de peças.
-   **When?** O problema se manifesta diariamente, mas se agrava em períodos de alta demanda, onde a desorganização leva à perda de oportunidades.
-   **How?** Ocorre através da comunicação descentralizada (WhatsApp, papel), falta de histórico de serviços e controle de estoque manual e impreciso.
-   **How much?** Custo estimado em perda de produtividade (5-10 horas/semana) e compras ineficientes, além do custo de oportunidade de novos serviços perdidos.

#### **Deep-solution**

-   **What?** Desenvolver um sistema web (MVP) chamado ServiSync que integra Clientes, Ordens de Serviço e Estoque em um único painel de controle.
-   **Why?** Para prover controle, visibilidade e eficiência, liberando o tempo do gestor para atividades estratégicas.
-   **Who?** O desenvolvimento será focado nas necessidades essenciais do microempreendedor do setor.
-   **Where?** Acessível de qualquer dispositivo com internet, com foco em usabilidade mobile-friendly.
-   **When?** O MVP será desenvolvido em um ciclo acadêmico, com funcionalidades essenciais entregues inicialmente.
-   **How?** Utilizando React/TypeScript para um frontend moderno e uma representação lógica em C para as estruturas de dados, simulando a base de um sistema performático.
-   **How much?** O projeto será executado dentro do escopo acadêmico, sem custos diretos de licença para o usuário final do MVP.

#### **Deep-segment & Persona**

-   **Deep-segment:** Donos de assistências técnicas de celulares e computadores, com até 2 funcionários, que atendem diretamente o consumidor final.
-   **Persona: Carlos, 38 anos**
    -   **Situação:** Dono da "Conserta Rápido", uma pequena assistência técnica. Ele é o principal técnico.
    -   **Tarefa:** Precisa saber rapidamente qual cliente deixou qual aparelho, qual o defeito, quais peças serão necessárias e qual o status do conserto.
    -   **Ação:** Atualmente, anota em uma ordem de serviço de papel, manda mensagens no WhatsApp para o cliente e controla o estoque em uma planilha que nem sempre está atualizada.
    -   **Resultado:** Às vezes, perde o histórico de um cliente, demora para dar um retorno sobre o status do serviço e já teve que parar um conserto no meio por falta de uma peça que ele achava que tinha. Ele se sente sobrecarregado e sabe que está perdendo eficiência.

## 4. VVE-M (Validação, Viabilidade e Metas)

-   **MVP:** Uma aplicação web que permite:
    1.  Cadastrar um cliente (nome, telefone).
    2.  Criar uma ordem de serviço vinculada a um cliente (equipamento, problema).
    3.  Cadastrar um item no estoque (nome, quantidade).
    4.  Visualizar um painel com o número total de clientes e ordens abertas.

-   **Matriz de Risco (Probabilidade X Impacto):**
    -   **Alto Risco:** Baixa adesão por hábito com métodos atuais (Alta Probabilidade, Médio Impacto).
    -   **Médio Risco:** Complexidade técnica na integração de módulos (Média Probabilidade, Médio Impacto).
    -   **Baixo Risco:** Instabilidade da plataforma (Baixa Probabilidade, Alto Impacto).

-   **Mitigação:**
    -   **Baixa Adesão:** Focar em uma UI extremamente simples e intuitiva (Onboarding Guide) e começar com o conjunto mínimo de funcionalidades para não sobrecarregar.
    -   **Complexidade:** Desenvolver os módulos de forma desacoplada, garantindo que a base de dados (simulada em C) seja robusta e bem estruturada.

-   **Definição de Metas (OKRs para o MVP):**
    -   **Objetivo 1:** Validar a proposta de valor central de gestão integrada.
        -   **KR 1:** Atingir 10 usuários-teste cadastrando pelo menos 5 ordens de serviço cada no primeiro mês.
        -   **KR 2:** Obter um feedback de usabilidade com nota média de 4/5 dos usuários-teste.

---
<br/>

# English Version

This document details the research, discovery, and strategic definition process that guided the development of the **ServiSync** Minimum Viable Product (MVP), following the "Internal Operational Policy for Project and Solution Development."

## 1. Systematic Literature Review

The initial phase consisted of a structured search in academic databases (Scielo, Google Scholar) and market reports (SEBRAE) to identify the main challenges faced by microenterprises in the Brazilian technical services sector.

-   **Search Strings:** `("management" AND "microenterprise" AND "technical services")`, `("challenges" AND "MEI" AND "operational control")`.
-   **Inclusion/Exclusion Criteria:** Focus on articles and reports published in the last 5 years, addressing the Brazilian context and SMEs (Small and Medium-sized Enterprises) in technology or services.
-   **Key Findings:** The literature consistently pointed to the lack of accessible and integrated management tools, excessive use of manual methods (paper, spreadsheets), difficulty in tracking service orders, and a lack of inventory visibility as critical barriers to efficiency and scalability.

## 2. Shallow Definition

-   **Shallow-problem:** Technical service microenterprises in Brazil lose time and money due to the lack of a centralized management system, resulting in operational disorganization.
-   **Shallow-solution:** Create a simple digital platform that unifies client registration, service order control, and inventory management.
-   **Shallow-segment:** Freelance technicians and owners of small technical assistance shops who still rely on spreadsheets and notebooks.
-   **ESG Focus:** The solution promotes **Governance** (G) by formalizing and organizing internal processes. Indirectly, by optimizing the use of parts (Inventory), it contributes to waste reduction (**Environmental** - E) and improves relationships with the client community (**Social** - S) through more agile and reliable service.

## 3. Deep-Definition (5W2H)

#### **Deep-problem**

-   **What?** The absence of an integrated information flow causes rework, loss of customer data, service delivery delays, and more expensive emergency inventory purchases.
-   **Why?** Existing tools are complex, expensive, or unsuitable for the reality of a microenterprise. The informality of processes prevents managerial oversight.
-   **Who?** The micro-entrepreneur, who acts as a technician, administrator, salesperson, and buyer.
-   **Where?** In the daily operation of the business, from the first customer contact to invoicing and parts replacement.
-   **When?** The problem manifests daily but worsens during periods of high demand, where disorganization leads to missed opportunities.
-   **How?** It occurs through decentralized communication (WhatsApp, paper), lack of service history, and inaccurate manual inventory control.
-   **How much?** Estimated cost in lost productivity (5-10 hours/week) and inefficient purchases, plus the opportunity cost of lost new services.

#### **Deep-solution**

-   **What?** Develop a web system (MVP) called ServiSync that integrates Clients, Service Orders, and Inventory into a single dashboard.
-   **Why?** To provide control, visibility, and efficiency, freeing up the manager's time for strategic activities.
-   **Who?** Development will focus on the essential needs of the micro-entrepreneur in the sector.
-   **Where?** Accessible from any device with internet, with a focus on mobile-friendly usability.
-   **When?** The MVP will be developed in an academic cycle, with essential features delivered initially.
-   **How?** Using React/TypeScript for a modern frontend and a logical representation in C for data structures, simulating the foundation of a high-performance system.
-   **How much?** The project will be executed within the academic scope, with no direct license costs for the MVP's end-user.

#### **Deep-segment & Persona**

-   **Deep-segment:** Owners of cell phone and computer repair shops, with up to 2 employees, who serve the end consumer directly.
-   **Persona: Carlos, 38 years old**
    -   **Situation:** Owner of "Conserta Rápido" (Fast Fix), a small repair shop. He is the main technician.
    -   **Task:** He needs to quickly know which customer left which device, what the defect is, what parts will be needed, and the status of the repair.
    -   **Action:** Currently, he writes on a paper service order, sends messages to the client on WhatsApp, and manages inventory in a spreadsheet that is not always up to date.
    -   **Result:** Sometimes he loses a customer's history, takes a long time to provide an update on the service status, and has had to stop a repair midway for lack of a part he thought he had. He feels overwhelmed and knows he is losing efficiency.

## 4. VVE-M (Validation, Viability, and Goals)

-   **MVP:** A web application that allows:
    1.  Registering a client (name, phone).
    2.  Creating a service order linked to a client (equipment, problem).
    3.  Registering an item in inventory (name, quantity).
    4.  Viewing a dashboard with the total number of clients and open orders.

-   **Risk Matrix (Probability X Impact):**
    -   **High Risk:** Low adoption due to habit with current methods (High Probability, Medium Impact).
    -   **Medium Risk:** Technical complexity in integrating modules (Medium Probability, Medium Impact).
    -   **Low Risk:** Platform instability (Low Probability, High Impact).

-   **Mitigation:**
    -   **Low Adoption:** Focus on an extremely simple and intuitive UI (Onboarding Guide) and start with the minimum feature set to avoid overwhelming users.
    -   **Complexity:** Develop modules in a decoupled manner, ensuring the database (simulated in C) is robust and well-structured.

-   **Goal Setting (OKRs for the MVP):**
    -   **Objective 1:** Validate the core value proposition of integrated management.
        -   **KR 1:** Achieve 10 test users registering at least 5 service orders each in the first month.
        -   **KR 2:** Obtain a usability feedback score with an average of 4/5 from test users.
