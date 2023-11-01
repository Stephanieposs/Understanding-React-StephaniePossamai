Parte dois do Caderno de Lógica
Funções e Arrays



### Estruturas de repetição

cada vez que passa numa estrutura de repetição é uma iteração, cada passada dentro do for por exemplo

#### Array
Vetores e matrizes são iguais em JS e é chamado de Array
```
{
    // criando vetores
    var fruta = ['laranja', 'morango', 10, true]
    var frutaCitrica = fruta[0]

    console.log(fruta) // imprime todo o vetor fruta

    //Inserindo um novo elemento no final do array
        fruta[fruta.length] = "melão"
        fruta.push("Amora")


        //Inserindo um novo elemento no inicio do array
        fruta.unshift("Banana")
        
        //Tirar Elementos do começo do array 
        var fruta3 = fruta.shift()
        console.log("fruta 3 --> " + fruta3);


        //Tirar Elementos do Final do array 
        var fruta4 = fruta.pop()
        console.log("fruta 4 --> " + fruta4);

    //Iterando um Array 
        for (let index = 0; index < fruta.length; index++) {
            let element = fruta[index];
            console.log(fruta[index]);
            console.log("Fruta[" + index + "] -> " + element);
        }

    
    // ordenando para crescente
        for (let index = 0; index < 4; index++) {
            if (funcao[index] < funcao[index - 1]) {
                bolha = funcao[index];
                funcao[index] = funcao[index - 1];
                funcao[index - 1] = bolha;
                bolha = 0;
                index = 0;
            }
        }

        // fazendo vetor decrescente
        let contInv = 3;
        for (let cont = 0; cont < 4; cont++) {
            decrescente[contInv] = funcao[cont]
            contInv--
        }


    // contenando arrays
        array1.concat(array2)

}
```


### Objetos


Objetos são por referencia, diferente dos tipos primitivos (String, boolean, int)

console.table -> mostra os dados no console dentro de uma tabela -> usado para ver array

```
{
    // decremento pós fixado 
    numero[index] = num--  
       // -> mesma coisa
    numero[index] = num 
    num -- 

    // decremento pré fixado 
    numero[index] = --num  
       // -> mesma coisa
    num --
    numero[index] = num 
}
```


=== -> compara o valor e o tipo

### Funções

Funções são executadas quando forem chamadas ou a partir de um evento (exemplo, quando clicamos em um botão) -> Paradigma Programação estruturada
```
{
    // função executada quando for chamada
    var pesoIdealF = calcularPesoIdeal("f", 1.60)

    function calcularPesoIdeal(genero, altura) { // genero e altura não precisam ser declarados antes

            let pesoIdeal = 0
            if (genero == "f") {
                pesoIdeal = (62.1 * altura) - 44.7
            } else {
                pesoIdeal = (72.7 * altura) - 58
            }

            return pesoIdeal
    }


}
```



#### Funções - arrays: map, filter e reduce

reduce -> reduz o array inteiro a um unico vetor
filter -> filtrar 
map -> 


004-Lógica-de-Programação/001-Exemplos/005-EstruturasDados/003-VetorMetodos.html




- sort, reverse  



### Matriz
Uma matriz em JS é um Array de Arrays (um vetor de vetores)
```
{
    var matriz = [["l0 c0", "l0 c1", "l0 c2"],
                  ["l1 c0", "l1 c1", "l1 c2"],
                  ["l2 c0", "l2 c1", "l2 c2"]];

    // matriz[linha][coluna] - sempre começa no 0 
    console.log(matriz[1][1]); // imprime o item 1 da linha 1
    console.log(matriz[1]); // imprime a linha 1

    // matriz.lenght -> quantidade de linhas
    // matriz[1].lenght -> quantidade de colunas dentro da linha 1

    for(let i=0;i<matriz.lenght;i++){
        for(let j=0;j<matriz[i].lenght;j++){
            console.log(matriz[i][j]);  // imprime todos os itens
        }
    }

}
```

### Consistencia de dados
L7E2 do professor



