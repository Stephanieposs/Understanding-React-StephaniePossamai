## Caderno de anotações CSS

### Sumário
- [Anotações gerais](#anotações-gerais-css)
- [CSS Básico](#css-básico)
- [Comandos para estilizar](#comandos-que-estilizam-a-página-no-css)

#### Anotações gerais CSS
**Funções:**  Estilizar elementos HTML, controle de layout, animações e transições, pseudoclasses e pseudoelementos, estilos de formulários, transformações e efeitos 2D/3D, controle de impressão


#### CSS básico
é colocado "< style>" dentro do "head" 

Aonde é colocado os nomes das classes: 
```
{
    <h1 id="idTituloPrincipal" name="" class="clTituloPrincial" >Titulo Teste</h1>

    <h2 class="clTituloPrincial sublinhado">Titulo 2</h2>

    <div class="clDiv1">
}
```
CSS estilo externo : <link rel="stylesheet" href="style.css">

Aonde se coloca o CSS: Cascateamento: 
- CSS Padrão Navegador
- CSS Folhas de estilo interno e externo (interno é quando a gente abre o style com o *,#,etc e externo é um arquivo separado .css)
- CSS Inline

Sites cores:   
[Color Wheel](https://color.adobe.com/pt/create/color-wheel)   
[ColorPalletes](https://coolors.co/)   
Sites fontes:  
[Google Fontes](https://fonts.google.com/) 

landing page -> 

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

    </style>
}
```
##### Seletores combinadores
Seleciona os elementos com base em uma relação específica entre eles


#### Comandos que estilizam a página no CSS
Comandos gerais: 
- padding -> px -> 
    padding-left, padding-right

- margin -> px -> margem 
- background-color -> cor do background do item selecionado
- border ->
    border-style, border-color, 

- width e height -> 
- display -> block (linha inteira), inline (****)
- text-align: center -> alinha o texto de uma linha

- justify-content -> flex-end, flex-start, center, space-between, space-around, space-evenly (mesmo que o around mas deixa todos os espaçamentos iguais) -> alinhamento horizontal, se usa ao mesmo tempo que o display flex
- align-items -> flex-end, flex-start, center, stretch, baseline -> alinhamento vertical sem wrap 
- align-content -> flex-end, flex-start, center, space-between, stretch, space-around, space-evenly (mesmo que o around mas deixa todos os espaçamentos iguais) -> alinhamento vertical com wrap 

- flex-wrap -> wrap, nowrap(escapa), wrap-reverse -> quebra o conteudo e coloca em outra linha, não deixa escapar  
- flex-flow -> flex-direcion + flex-wrap 
- flex-grow
- flex-shrink
- flex-direction: row;  /*column; column-reverse; row; row-reverse;*/

         

Comandos de tabelas:  
- vertical-align -> alinha o conteudo de um item da tabela centralizado, em cima ou embaixo
- overflow-y -> configura o scroll da vertical, auto seria o ideal  
- overflow-x -> configura o scroll da horizontal, auto seria o ideal  
- empty-lines -> limpa o conteudo 
- line-height 

tr:nth-child(odd){ /*even, odd, 3n, 4, 2n + 1...*/
            background-color: bisque;
        }


Comandos de lista: 
- list-style-type -> muda o pontinho da frente da lista  
- list-style-image: url("assets/index.gif"); -> coloca uma imagem no lugar dos pontinhos da frente  
- list-style-position -> inside, etc -> muda o local do pontinho ou imagem

Comandos de Fonte: 
- font-size -> px
- font-style: italic;
- font-variant: normal;
- font-weight: 800 / lighter/ etc
- font-size: 0.5em;
- font-family: 'Courier New', Courier, 'lucida console', monospace;

Comandos de imagem: 
- opacity: 0.3; 
- filter: blur(5px); -> borrado 
- filter: brigthness (3); -> claridade da foto
- filter: contrast(0.5); -> contraste
- filter: grayscale(0.2);
- filter: invert();
- filter: saturation(2); 
- filter: sepia(0.5);
- filter: drop-shadow(rgb);
- filter: hue-rotate(120deg);

