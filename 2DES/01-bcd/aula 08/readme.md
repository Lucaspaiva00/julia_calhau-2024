<div align = "center">
  <img src = "https://github.com/user-attachments/assets/e5daad65-11d8-4d5d-b0d0-7621e5241ede">


</div>


# Aula 08 - Atividade BD - CRUD

## Banco de Dados com Hotel

Vamos montar um banco de dados de um Hotel

```sql
-- Criação do banco de dados
DROP DATABASE hotel_db;
CREATE DATABASE hotel_db;
USE hotel_db;

-- Tabela Clientes
CREATE TABLE Clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(15)
);

-- Tabela Quartos
CREATE TABLE Quartos (
    quarto_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    status VARCHAR(15) NOT NULL CHECK (status IN ('Disponível', 'Ocupado'))
);

-- Tabela Reservas
CREATE TABLE Reservas (
    reserva_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    quarto_id INT NOT NULL,
    data_checkin DATE NOT NULL,
    data_checkout DATE NOT NULL
    
);

-- Tabela Funcionarios
CREATE TABLE Funcionarios (
    funcionario_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL
);

-- Tabela Servicos
CREATE TABLE Servicos (
    servico_id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

-- Tabela Pagamentos
CREATE TABLE Pagamentos (
    pagamento_id INT AUTO_INCREMENT PRIMARY KEY,
    reserva_id INT NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    data_pagamento DATE NOT NULL,
    metodo_pagamento VARCHAR(50) NOT NULL
    
);

```

# Atividade - 1ª Etapa

Crie para cada tabela do banco 10 inserts com dados para popular o banco (pode usar IA para ajudar nessa etapa)

# Atividade - 2ª Etapa

Responder as perguntas listadas abaixo em uma folha e entregar ao professor (atividade vale nota)

### Perguntas

1. Como visualizar todos os clientes?

2. Como visualizar um cliente específico pelo cliente_id?

3. Como visualizar todos os quartos disponíveis?

4. Como visualizar todos os serviços oferecidos?

5. Como visualizar todas as reservas feitas por um cliente específico?

6. Como visualizar todos os pagamentos realizados?

7. Como visualizar todos os funcionários?

8. Como visualizar um quarto específico pelo quarto_id?

9. Como visualizar a descrição de um serviço específico pelo servico_id?

10. Como visualizar os detalhes de uma reserva específica pelo reserva_id?

11. Como atualizar o nome de um cliente?

12. Como atualizar o status de um quarto para 'Ocupado'?

13. Como atualizar o preço de um serviço?

14. Como atualizar o salário de um funcionário?

15. Como atualizar a data de checkout de uma reserva?

16. Como atualizar o email de um cliente?

17. Como atualizar o tipo de um quarto?

18. Como atualizar a descrição de um serviço?

19. Como atualizar o telefone de um cliente?

20. Como atualizar o cargo de um funcionário?

21. Como remover um cliente pelo cliente_id?

22. Como remover um quarto pelo quarto_id?

23. Como cancelar uma reserva pelo reserva_id?

24. Como remover um funcionário pelo funcionario_id?

25. Como remover um serviço pelo servico_id?

26. Como remover um pagamento pelo pagamento_id?

27. Como remover todos os clientes sem reservas?

28. Como remover todos os quartos que estão ocupados?

29. Como remover todos os serviços com preço menor que 50?

30. Como remover todos os pagamentos feitos em uma data específica?

