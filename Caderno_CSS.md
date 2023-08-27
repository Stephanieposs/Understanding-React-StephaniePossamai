## Caderno de anotações CSS

### Sumário
- [Anotações gerais](#anotações-gerais-css)
- [CSS Básico](#css-básico)

#### Anotações gerais CSS
**Funções:**  Estilizar elementos HTML, controle de layout, animações e transições, pseudoclasses e pseudoelementos, estilos de formulários, transformações e efeitos 2D/3D, controle de impressão


#### CSS básico
é colocado <style> dentro do head 

Aonde é colocado os nomes das classes: 
```
{
    <h1 id="idTituloPrincipal" name="" class="clTituloPrincial" >Titulo Teste</h1>

    <h2 class="clTituloPrincial sublinhado">Titulo 2</h2>

    <div class="clDiv1">
}
```

O CSS tem seletores que são colocados no style para encontrar os elementos para estilizar. Existem 5 tipos de seletores: simples, combinadores, de pseudoclasse, de pseudoelementos e de atributos.
- [Seletores simples](#seletores-simples)  
- [Seletores combinadores](#seletores-combinadores)

##### Seletores simples
Selecionam os elementos com base no id, nome, classe, etc. 
```
{
    <style>
        /* Seletor Universal*/  <!--seleciona toda a pagina-->
        *{
            margin: 0;
            padding: 0;
            border: 0;
            
        }

        /* Seletor de classe */
        .clTituloPrincial{
            color: blue;
        }

        .clDiv1{
            background-color: beige;
        }

        .clDiv2{
            height: 40px;
        }

        .clSpan1{
            background-color: brown;
        }
        .sublinhado{
            text-decoration: underline;
        }

        /* Seletor de ID */
        #idTituloPrincipal{
            color : red; 
            background-color: aqua;
        }

        /* Seletor de Tag */
        h3{
            color: blueviolet;
        }

        .linha {
            border: 1px solid black;
            display: flex; <!--transforma linha em coluna-->
        }

        .coluna1{
            border: 1px solid black;
            width: 30%;
        }

        .coluna2{
            border: 1px solid black;
            width: 70%;
        }
    </style>
}
```
##### Seletores combinadores
Seleciona os elementos com base em uma relação específica entre eles
