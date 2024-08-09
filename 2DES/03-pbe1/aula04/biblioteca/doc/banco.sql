drop database if exists biblioteca;
create database biblioteca;
use biblioteca;

create table Livros(
    id integer primary key auto_increment,
    autorLivro varchar(252) not null,
    descricaoLivro varchar(252) not null
);

describe Livros;

insert into Livros (autorLivro, descricaoLivro) values
("Jacinto Pena","Livro de comida");