#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int jogador=0,
    computador=0;

void placar();          // Exibe o placar
int par_impar();        // Jogador diz se quer par ou ímpar
int jogada_humano();    // Humano escolhe numero
int jogada_computador();// Computador escolhe numero
void jogada(int parimpar, int jog, int comp); // Verifica quem ganhou

int main()
{
    int continuar=1,
        parimpar,
        num_jogador,
        num_comp;

    do{
        parimpar = par_impar();
        num_jogador = jogada_humano();
        num_comp = jogada_computador();
        jogada(parimpar, num_jogador, num_comp);

        placar();
        cout<<"\nJogar mais uma vez?"<<endl;
        cout<<"0. Sair"<<endl;
        cout<<"1. Jogar de novo"<<endl;
        cin >> continuar;

    }while(continuar);
    return 0;
}

int par_impar()
{
    int num;

    cout<<"\nPar ou ímpar? Digite:"<<endl;
    cout<<"0 para par"<<endl;
    cout<<"1 para ímpar"<<endl;
    cin >> num;

    return num;
}

int jogada_humano()
{
    int num;
    cout<<"\nDigite um número de 0 até 10:"<<endl;
    cin >> num;
    return num;
}

int jogada_computador()
{
    unsigned seed = time(0);
    srand(seed);

    return rand()%11;
}

void jogada(int parimpar, int jog, int comp)
{
    cout<<"\nJOGADA: "<<endl;
    cout<<"Humano    = "<<jog<<endl;
    cout<<"Máquina   = "<<comp<<endl;
    cout<<"Soma      = "<<(jog+comp)<<endl;
    cout<<"Resultado = ";

    if( (jog+comp)%2 == 0 )
        cout<<"PAR\n";
    else
        cout<<"ÍMPAR\n";

    if( (jog+comp)%2 == parimpar){
        cout<<"\nHumano ganhou!"<<endl;
        jogador++;
    }
    else{
        cout<<"\nMáquina ganhou!"<<endl;
        computador++;
    }

}


void placar()
{
    cout <<"\nPLACAR"<<endl;
    cout <<">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"<<endl;
    cout <<"Jogador: "<<jogador<<"\t Computador: "<<computador<<endl;
    cout <<"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"<<endl;
}
