
Sumário
- [Lógica de Programação](#lógica-programação)
- [Anotações Gerais JS](#anotações-gerais)
- [Introdução JS](#introdução-javascript)
- [Tipos de Dados](#tipos-de-dados)
- [Operações Aritméticas](#operações-aritmeticas)


### Lógica Programação
Gerações de um software 
![Gerações das Linguagens](assets/logica/geraçoes das linguagens.png)

Binario

linguagens de baixo e alto nivel

o que é software

linguagem compilada x interpretada

computador por dentro


### Anotações Gerais JS
Não precisa ;
É colocado dentro de um bloco script dentro do body do html


### Introdução JavaScript

- Scanner teclado -> console.log("Fique em casa");
- Ver a execução no inspecionar>console

- Declarando variáveis:
var x let -> a diferença ele vai explicar depois 
let -> preferir usar dentro de uma função 
const -> é uma contante que tem que ser inicializada com algum valor e o valor não pode ser alterado depois.  
ou sem dizer o que é, sem colocar var,let ou const -> prefira não usar

- Funções:
function pegarNome(){}
usar o let quando for uma variável dentro da função
variaveis que estão dentro da função não conseguem ser chamadas fora

- Como pegar uma função no html:
```
{
    <input type="button" value="Testar" onclick="testar()">
}
```

- Como jogar uma função para a tela:
```
{
    document.getElementById(idNome)
}
```

### Tipos de Dados
- Tipos de dados:
    - string -> "valor da string" ou 'valor da string'  
    - number -> 123   
    - boolean -> true ou false
    - Object
    - function

    - null
    - undefined -> quando não se inicializa uma variável  

- Tipos de Objetos:
    - Object
    - Date
    - Arrey
    - Number
    - String
    - Boolean

- Operadores para testar tipos de dados
    - typeOf
    console.log(typeOf(nomeUsuario)); -> retorna o tipo de dado que é o nomeUsuario -> vai imprimir string, number, boolean
    - isNan (Not a Number)
    console.log(isNan(nomeUsuario)); -> returna false se não for um numero 
    ** metodos com is normalmente retornam true ou false

### Operações Aritmeticas

- Potenciação -> **  
- Resto da divisão -> %   
- Radiciação -> num1**(1/num2) -> raiz de num1 por num2  
- Porcentagem -> x=(valor * porcentagem)/100

