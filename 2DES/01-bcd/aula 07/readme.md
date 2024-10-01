<div align = "center">
  <img src = "https://github.com/user-attachments/assets/0d5dace6-8f62-46f9-81be-e8be01e68b7d">
  
</div>


# Aula 07 - Update e Delete

## Conceito de UPDATE e DELETE em Banco de Dados

## UPDATE
### O que é?

O comando UPDATE é utilizado em bancos de dados relacionais para modificar dados existentes em uma tabela. Ele permite que você altere um ou mais registros de uma ou mais colunas, com base em condições específicas.

```sql
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2, ...
WHERE condição;
```
## Exemplo

```sql
UPDATE Cliente
SET email = 'novoemail@example.com'
WHERE idCliente = 1;
```

Nesse exemplo, o e-mail do cliente com idCliente igual a 1 é atualizado para "novoemail@example.com".

### Considerações
*Importância da cláusula WHERE:* A cláusula WHERE é crucial, pois, sem ela, todos os registros na tabela serão atualizados.
*Transações:* O UPDATE pode ser parte de uma transação, o que garante que as modificações sejam aplicadas de forma segura e consistente.

## DELETE

### O que é?
O comando DELETE é utilizado para remover registros de uma tabela. Assim como o UPDATE, ele permite especificar condições para determinar quais registros devem ser excluídos.

```sql
DELETE FROM nome_da_tabela
WHERE condição;
```

## Exemplo

```sql
DELETE FROM Cliente
WHERE idCliente = 1;
```

Neste exemplo, o cliente com idCliente igual a 1 é removido da tabela.

### Considerações
*Importância da cláusula WHERE:* A ausência da cláusula WHERE resultará na exclusão de todos os registros da tabela.
*Integridade Referencial:* É importante estar ciente das restrições de chave estrangeira, pois a exclusão de um registro pode afetar registros em outras tabelas relacionadas.
*Transações:* Assim como o UPDATE, o DELETE também pode ser parte de uma transação para garantir a integridade dos dados.

## Exemplo de Script Transportadora

```sql
drop database if exists transportadora;
create database transportadora CHARSET=UTF8 COLLATE utf8_general_ci;
use transportadora;

-- DDL - CREATE
create table Cliente(
    idCliente int not null primary key auto_increment,
    nome varchar(100) not null,
    endereco varchar(100) not null,
    telefone varchar(15) not null,
    email varchar(100) not null
);
create table Funcionario(
    idFuncionario int not null primary key auto_increment,
    nome varchar(100) not null default("Motorista"),
    cargo varchar(30) not null,
    salario float(10,2) not null
);
create table Rota(
    idRota int not null primary key auto_increment,
    origem varchar(100) not null,
    destino varchar(100) not null,
    distancia float(10,2)
);
create table Veiculo(
    placa varchar(10) not null primary key,
    modelo varchar(20) not null,
    capacidade float(10,2)
);

create table Entrega(
    idEntrega int not null primary key auto_increment,
    placa varchar(10) not null,
    motorista int not null,
    idRota int not null,
    inicio datetime,
    fim datetime,
    status varchar(20)
);

create table pedido(
    idPedido int not null primary key auto_increment,
    idCliente int not null,
    idEntrega int not null,
    dataPedido timestamp not null,
    valor float(50,2) not null
);
-- DDL - ALTER
alter table Pedido add foreign key (idCliente) references Cliente(idCliente);
alter table Pedido add foreign key (idEntrega) references Entrega(idEntrega);

alter table Entrega add foreign key (placa) references Veiculo(placa);
alter table Entrega add foreign key (motorista) references Funcionario(idFuncionario);
alter table Entrega add foreign key (idRota) references Rota(idRota);

describe Cliente;
describe Funcionario;
describe Rota;
describe Veiculo;
describe Entrega;
describe Pedido;
show tables;

-- DML - População do banco de dados com dados de teste
insert into cliente(nome, endereco, telefone, email) values
("Jacinto Mello Aquino Rego", "Rua Alfredo Bueno, 25, Centro, Jaguariúna, SP","19 90567-8847","jacintomello@gmail.com"),
("Osmar Motta","Rua Julia Bueno, 31, Centro, Jaguariúna, SP","19 99999-8847","osmarmotta@gmail.com"),
("Osmar Manjo","Rua Joaquim Bueno, 31, Santa Maria, Jaguariúna, SP","19 98888-8847","osmarmanjo@gmail.com"),
("Osmar Dito","Av. Papa João XXIII, 190, Pedreira - SP","19 94444-8847","osmardito@gmail.com"),
("Osmar Educado","Rua Joaquim Bueno, 131, Santa Maria, Jaguariúna, SP","19 95555-8847","osmareducado@gmail.com"),
("Humberto garcia","R. Panini, 108 - Vila Sao Jose, Jaguariúna - SP","19 96666-8847","humbertogarcia@gmail.com"),
("Dagoberto Teixeira","Rua Joaquim Bueno, 331, Santa Maria, Jaguariúna, SP","19 97777-8847","dagobertoteixeira@gmail.com");

insert into Funcionario(nome, cargo, salario) values
("Passos Dias Aguiar","Motorista",4980.9),
("Suzi Rego Grande","Motorista",9980.9),
("Bino Nomuro","Motorista",6750);

insert into rota(origem, destino, distancia) values
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","Av. Pacífico Moneda, 2925, Vargeão Jaguariúna, SP", null),
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","R. Marion, 780 - Chácaras Santo Antonio Bom Jardim, Santo Antônio de Posse - SP",8.8),
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","Av. Papa João XXIII, 190, Pedreira - SP",15.2),
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","R. Olindo Peron, 94, Pedreira - SP",18),
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","R. Panini, 108 - Vila Sao Jose, Jaguariúna - SP",4.2);

insert into veiculo(placa, modelo, capacidade) values
("AAA-1A11","VW Kombi",1),
("BBB-1B11","Fiat Toro",2),
("CCC-1C11","Ford F250",2.5);

insert into entrega(placa, motorista, idRota, inicio, fim, status) values
("AAA-1A11",1,1,date_sub(now(),interval 200 hour),date_sub(now(),interval 196 hour),"Finalizada"),
("BBB-1B11",2,1,date_sub(now(),interval 180 hour),date_sub(now(),interval 172 hour),"Finalizada"),
("CCC-1C11",3,1,date_sub(now(),interval 160 hour),date_sub(now(),interval 159 hour),"Finalizada"),
("AAA-1A11",1,1,date_sub(now(),interval 155 hour),date_sub(now(),interval 151 hour),"Finalizada"),
("BBB-1B11",3,1,date_sub(now(),interval 100 hour),date_sub(now(),interval 97 hour),"Finalizada"),
("CCC-1C11",2,1,date_sub(now(),interval 90 hour),date_sub(now(),interval 88 hour),"Finalizada"),
("BBB-1B11",1,1,date_sub(now(),interval 80 hour),date_sub(now(),interval 79 hour),"Finalizada"),
("AAA-1A11",2,1,date_sub(now(),interval 20 hour),date_sub(now(),interval 18 hour),"Finalizada"),
("CCC-1C11",3,1,date_sub(now(),interval 2 hour),null,"Em andamento"),
("BBB-1B11",1,1,null,null,"Agendada");

insert into pedido(idCliente, idEntrega, dataPedido, valor) values
(1,1,date_sub(now(),interval 203 hour),500),
(2,1,date_sub(now(),interval 201 hour),499.9),
(1,2,date_sub(now(),interval 182 hour),399.9),
(3,2,date_sub(now(),interval 181 hour),200),
(2,3,date_sub(now(),interval 161 hour),1200),
(5,3,date_sub(now(),interval 161 hour),59.9),
(4,4,date_sub(now(),interval 156 hour),550.9),
(6,4,date_sub(now(),interval 155 hour),120),
(5,5,date_sub(now(),interval 101 hour),12.5),
(7,5,date_sub(now(),interval 100 hour),200),
(6,6,date_sub(now(),interval 91 hour),12.5),
(7,6,date_sub(now(),interval 91 hour),200),
(1,7,date_sub(now(),interval 81 hour),150),
(4,7,date_sub(now(),interval 81 hour),180),
(1,8,date_sub(now(),interval 20 hour),150),
(4,8,date_sub(now(),interval 20 hour),180),
(1,9,date_sub(now(),interval 3 hour),150),
(4,9,date_sub(now(),interval 2 hour),180),
(6,10,date_sub(now(),interval 1 hour),180),
(7,10,now(),180);

select * from cliente;
select * from funcionario;
select * from rota;
select * from veiculo;
select * from entrega;
select * from pedido;
```


# Exercícios de UPDATE

## Atualizar Nome do Cliente
Atualize o nome do cliente com `idCliente = 1` para "Jacinto Mello".

## Aumentar Salário do Funcionário
Aumente o salário do funcionário com `idFuncionario = 2` em 10%.

## Atualizar Status da Entrega
Altere o status da entrega com `idEntrega = 9` para "Finalizada".

## Corrigir Email do Cliente
Corrija o e-mail do cliente com `idCliente = 3` para "osmarmanjo_updated@gmail.com".

## Modificar Distância da Rota
Atualize a distância da rota com `idRota = 2` para 9.0 km.

# Exercícios de DELETE

## Excluir um Cliente
Exclua o cliente com `idCliente = 4`.

## Excluir um Funcionário
Exclua o funcionário com `idFuncionario = 3`.

## Excluir uma Rota
Exclua a rota com `idRota = 1`.

## Excluir uma Entrega
Exclua a entrega com `idEntrega = 5`.

## Excluir um Pedido
Exclua o pedido com `idPedido = 10`.
