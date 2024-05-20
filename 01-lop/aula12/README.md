# Aula12 - Away / vetor


Nesta aula vamos aprender o que é uma Array ou um Vetor para utilizarmos nas atividades

## O Que é?

O array, também chamado de vetor, é tipo de estrutura de dados (coleção de dados), do mesmo tipo. Ou seja, é um modo existente de trabalharmos com várias quantidades de variáveis.

Até o momento, estudamos apenas variáveis únicas, que recebem e armazenam uma única informação, como um número. É um bloquinho de memória reservado para guardar algum dado.

No caso do array, ele é um grupo de variáveis do mesmo tipo. Quando declaramos um vetor, o C++ vai lá e reserva um bloco de memória bem grande, suficiente para caber várias variáveis, todos os endereços são vizinhos.

![Funcionamento do Array](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijIP9gEA7XGRt_b5pYps4Zw8GEZoIzLkabfWkMYGbsFhEYJp-yd2BuD6RGmc14eth9ut90IjyLPiM-bw44CSqDeitnye7dcHSye34LHry785YwMyWRT7hUpfAr0RtQ_9s4e0Pz55AJNr5N/s320/vetor-array-c%252B%252B.jpeg)

## Para que serve um vetor (ou array) ?

Imagine que você quer calcular a média de dois alunos da sua turma.
Basta declarar duas variáveis: a e b, e fazer (a+b)/2
Simples, né?

E caso queira calcular a média de três alunos?
Hora, é óbvio: (a+b+c)/3

Bacana...e se quiser calcular a média de uma turma de 30 alunos?
Vai declarar 30 variáveis e fazer: (a+b+c+d+e+f+g....)/30 ?
Nem tem 30 letras no alfabeto.

É aí que entra o conceito de array.
Vamos simplesmente declarar um vetor de floats, por exemplo, de tamanho 30.
Ou seja, 30 variáveis do tipo float, vizinhas de memória, serão alocadas em sua máquina, de uma vez só, ao criarmos esse array.

Basicamente é para isso que serve um array: vamos aprender a declarar, inicializar, usar e manusear grandes blocos de informações de uma só vez, mexendo com 10, 10, mil ou 1 milhão de variáveis de uma vez só, de maneira bem automatizada e simples, através de arrays.

## Como declarar um Array em C++

Assim como as variáveis que usamos até o momento, em nossa apostila, para declarar um vetor, você primeiramente precisa declarar o tipo de dado dele (char, int, double, float etc). Em seguida, precisa dar um nome também.

Agora vem a parte diferente, em array: você precisa dizer o tamanho do seu array, ou seja, quantas variáveis únicas aquele vetor vai conter, e isso é informado entre colchetes [ ].

Vamos declarar algumas variáveis?

- 1 -int RG[10]: array com 10 inteiros pra armazenar números de RG's
- 2 float notas[5]: array com 5 números floats, pra armazenar notas
- 3 char nome[100]: array com espaços para 100 caracteres, para armazenar um nome ou texto (também chamado de strings, que estudaremos futuramente nosso curso)


Só isso: tipo, nome do array e quantos elementos ele deve ter.
 

 ### Exemplo 1

 ```cmd
 #include <iostream>
using namespace std;

int main()
{
    int num[10], cont;

    for(cont=0 ; cont<10 ; cont++)
        num[cont] = cont;
}
```
