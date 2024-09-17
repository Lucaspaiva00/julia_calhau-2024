<div align = "center">
  <img src = "https://text.media.giphy.com/v1/media/giphy.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJwcm9kLTIwMjAtMDQtMjIiLCJzdHlsZSI6Im5ld2Jvcm4iLCJ0ZXh0IjoiQ3JpcHRvZ3JhZmlhIiwiaWF0IjoxNzI2NjAxNTI3fQ.qOrkkcR7qo7oEVa8dKqKCada3X0WJQy7oUE8RdsdTAo">
</div>

# Aula 06 - Criptografia

Criptografia é o campo da ciência da computação e da matemática que se ocupa da proteção da informação por meio de técnicas que tornam os dados ilegíveis para pessoas não autorizadas. O objetivo principal da criptografia é garantir a confidencialidade, integridade e autenticidade da informação.

![criptografia---ilustracao--1-](https://github.com/user-attachments/assets/a2f73327-2897-4d1a-8cbc-13d04a806228)


Aqui estão alguns conceitos-chave relacionados à criptografia:

 - Confidencialidade: Garante que apenas as partes autorizadas possam acessar e entender a informação. Isso é geralmente alcançado através da criptografia, que transforma dados legíveis em uma forma cifrada.

 - Integridade: Assegura que a informação não foi alterada de forma não autorizada. Técnicas como assinaturas digitais e códigos de autenticação de mensagem (MAC) ajudam a verificar se os dados foram modificados.

 - Autenticidade: Verifica a identidade das partes envolvidas na comunicação, garantindo que a informação provém de uma fonte legítima. Isso pode ser feito através de certificados digitais e sistemas de autenticação.

 - Criptografia Simétrica: Utiliza a mesma chave para criptografar e descriptografar a informação. O desafio é garantir que a chave seja mantida em segredo entre as partes envolvidas.

 - Criptografia Assimétrica: Utiliza um par de chaves, uma pública e uma privada. A chave pública pode ser compartilhada com todos, enquanto a chave privada é mantida em segredo. A chave pública é usada para criptografar dados, e a chave privada é usada para descriptografá-los.

 - Algoritmos de Criptografia: Conjunto de procedimentos matemáticos usados para criptografar e descriptografar dados. Exemplos incluem AES (Advanced Encryption Standard) para criptografia simétrica e RSA (Rivest-Shamir-Adleman) para criptografia assimétrica.

 - Hashing: Processo que transforma dados em uma string de comprimento fixo, geralmente para verificar a integridade dos dados. Funções hash, como SHA-256, geram um valor hash único para cada conjunto de dados.

 - Criptoanálise: O estudo da quebra de sistemas criptográficos. A criptoanálise busca encontrar fraquezas nos algoritmos e métodos de criptografia.

# Cifra de Cesar

A cifra de César é uma técnica clássica de criptografia que pertence ao grupo das cifras de substituição. É uma das formas mais simples e antigas de criptografia, nomeada em homenagem a Júlio César, que usava esse método para proteger suas mensagens militares.

## Como Funciona
Substituição de Caracteres: A cifra de César funciona substituindo cada letra do texto original (plaintext) por outra letra que está um número fixo de posições à frente no alfabeto. Por exemplo, se o deslocamento (ou chave) for 3, a letra A se torna D, a letra B se torna E, e assim por diante.

Chave de Criptografia: O número de posições que cada letra deve ser deslocada é conhecido como a chave. No exemplo acima, a chave é 3. Para decifrar a mensagem, você aplicaria o deslocamento inverso.

![images](https://github.com/user-attachments/assets/47ef81f9-76fe-4429-91e9-5af14a5ddb44)

## Exemplo
Suponha que queremos criptografar a mensagem "HELLO" com uma chave de 3:

H se torna K
E se torna H
L se torna O
O se torna R
Portanto, "HELLO" criptografado com uma chave de 3 seria "KHOOR".

Decodificação
Para decifrar a mensagem, você aplicaria o deslocamento inverso. Se a chave for 3, você deslocaria cada letra para trás no alfabeto por 3 posições:

K se torna H
H se torna E
O se torna L
R se torna O
Então, "KHOOR" se tornaria "HELLO".

## Segurança
A cifra de César é muito simples e, portanto, é considerada insegura por padrões modernos. Pode ser facilmente quebrada usando ataques de força bruta ou análise de frequência, especialmente porque há apenas 25 possíveis chaves (desconsiderando o deslocamento de 0, que não altera o texto). Apesar disso, a cifra de César é uma ferramenta útil para ensinar os conceitos básicos de criptografia e criptanálise.

## Conteudo adicional

https://pt.khanacademy.org/computing/computer-science/cryptography

## Filme O Jogo da Imitação

https://drive.google.com/file/d/1guidMUq6ZWzbC3pEzMN_vengBWb-1W7j/view?usp=sharing




